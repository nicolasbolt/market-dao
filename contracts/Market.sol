// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

error Market__TransferFailed();
error Market__NeedsMoreThanZero();

contract Market is Ownable {
    IERC20 public s_stakingToken;
    IERC20 public s_rewardToken;

    uint256 public REWARD_RATE;
    uint256 public s_totalSupply;
    uint256 public s_rewardPerTokenStored;
    uint256 public s_lastUpdateTime;

    uint256 private fee;

    event FeeChanged(uint256 newFee);

    mapping(address => uint256) public s_balances;
    mapping(address => uint256) public s_rewards;
    mapping(address => uint256) public s_userRewardPerTokenPaid;

    modifier updateReward(address account) {
        // how much reward per token
        s_rewardPerTokenStored = rewardPerToken();
        // last timestamp
        s_lastUpdateTime = block.timestamp;
        s_rewards[account] = earned(account);
        s_userRewardPerTokenPaid[account] = s_rewardPerTokenStored;
        _;
    }

    modifier moreThanZero(uint256 amount) {
        if (amount == 0) {
            revert Market__NeedsMoreThanZero();
        }
        _;
    }

    constructor(address stakingToken, address rewardToken) {
        s_stakingToken = IERC20(stakingToken);
        s_rewardToken = IERC20(rewardToken);
    }

    function setFee(uint256 newFee) public onlyOwner {
        fee = newFee;
        emit FeeChanged(newFee);
    }

    function retrieveFee() public view returns (uint256) {
        return fee;
    }

    function earned(address account) public view returns (uint256) {
        uint256 currentBalance = s_balances[account];
        uint256 amountPaid = s_userRewardPerTokenPaid[account];
        uint256 currentRewardPerToken = rewardPerToken();
        uint256 pastRewards = s_rewards[account];

        uint256 earn = ((currentBalance *
            (currentRewardPerToken - amountPaid)) / 1e18) + pastRewards;
        return earn;
    }

    function rewardPerToken() public view returns (uint256) {
        if (s_totalSupply == 0) {
            return s_rewardPerTokenStored;
        }

        return
            s_rewardPerTokenStored +
            (((block.timestamp - s_lastUpdateTime) * REWARD_RATE * 1e18) /
                s_totalSupply);
    }

    // todo add multiple tokens
    // chainlink price feeds to convert prices between tokens
    function stake(uint256 amount)
        external
        updateReward(msg.sender)
        moreThanZero(amount)
    {
        // keep track of how much this user has staked
        // keep track of how much token we have total
        // transfer the tokens to this contract
        s_balances[msg.sender] = s_balances[msg.sender] + amount;
        s_totalSupply = s_totalSupply + amount;
        // emit event
        bool success = s_stakingToken.transferFrom(
            msg.sender,
            address(this),
            amount
        );

        // require(success, "Failed");
        if (!success) {
            revert Market__TransferFailed();
        }
    }

    function withdraw(uint256 amount)
        external
        updateReward(msg.sender)
        moreThanZero(amount)
    {
        s_balances[msg.sender] = s_balances[msg.sender] - amount;
        s_totalSupply = s_totalSupply - amount;
        bool success = s_stakingToken.transfer(msg.sender, amount);

        if (!success) {
            revert Market__TransferFailed();
        }
    }

    function claimReward() external updateReward(msg.sender) {
        uint256 rewards = s_rewards[msg.sender];
        bool success = s_rewardToken.transfer(msg.sender, rewards);

        if (!success) {
            revert Market__TransferFailed();
        }

        // How much reward do they get?
        // The contract is going to emit x tokens per second
        // And disperse them to all token stakers
        // 100 tokens per second
        // staked: 50 staked tokens, 20 staked tokens, 30 staked tokens (total = 100)
        // rewards: 50 reward tokens, 20 reward tokens, 30 reward tokens
        // staked: 100, 50, 20, 30 (total = 200)
        // rewards: 50, 25, 10, 15
    }
}

// stake: Lock tokens into our smart contract
// withdraw: unlock tokens and pull out of the contract
// claimReward: users get their reward tokens
// What's a good reward mechanism?
