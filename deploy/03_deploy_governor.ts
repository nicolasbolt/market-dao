import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { ethers } from 'hardhat'
import { EXECUTORS, MIN_DELAY, PROPOSERS, QUORUM_PERCENTAGE, VOTING_DELAY, VOTING_PERIOD } from '../hardhat_helper_config'

const deployGovernor: DeployFunction = async(hre: HardhatRuntimeEnvironment) => {
    const { getNamedAccounts, deployments, network } = hre
    const { deployer } = await getNamedAccounts()
    const { deploy, log, get } = deployments

    const governanceToken = await get('GovernanceToken')
    const timeLock = await get("TimeLock")

    const governorContract = await deploy("GovernorContract", {
        from: deployer,
        args: [governanceToken.address, timeLock.address, VOTING_DELAY, VOTING_PERIOD, QUORUM_PERCENTAGE],
        log: true,
        // waitConfirmations: 3
    })

    log(`03 - 'GovernorContract' deployed at ${governorContract.address}`)
}

export default deployGovernor
deployGovernor.tags = ['all', 'govenor']