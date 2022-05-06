// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";

contract MarketSettings is Ownable {
    uint256 private fee;

    event FeeChanged(uint256 newFee);

    function setFee(uint256 newFee) public onlyOwner {
        fee = newFee;
        emit FeeChanged(newFee);
    }

    function retrieveFee() public view returns (uint256) {
        return fee;
    }
}
