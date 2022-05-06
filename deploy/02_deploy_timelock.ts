import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { ethers } from 'hardhat'
import { EXECUTORS, MIN_DELAY, PROPOSERS } from '../hardhat_helper_config'

const deployTimelock: DeployFunction = async(hre: HardhatRuntimeEnvironment) => {
    const { getNamedAccounts, deployments, network } = hre
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments

    log('Deploying the TimeLock contract...')
    const timeLock = await deploy("TimeLock", {
        from: deployer,
        args: [MIN_DELAY, PROPOSERS, EXECUTORS],
        log: true,
        // waitConfirmations: 3
    })

    log(`02 - 'TimeLock' contract deployed at ${timeLock.address}`)
}

export default deployTimelock
deployTimelock.tags = ['all', 'timelock']