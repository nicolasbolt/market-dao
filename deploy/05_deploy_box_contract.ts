import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { ethers } from 'hardhat'
import { ADDRESS_ZERO } from '../hardhat_helper_config'

const deployBox: DeployFunction = async(hre: HardhatRuntimeEnvironment) => {
    const { getNamedAccounts, deployments, network } = hre
    const { deployer } = await getNamedAccounts()
    const { deploy, log, get } = deployments

    log('Deploying the Box contract...')

    const box = await deploy('MarketSettings', {
        from: deployer,
        args: [],
        log: true,
    })

    const boxContract = await ethers.getContractAt('MarketSettings', box.address)
    const timeLock = await ethers.getContract('TimeLock')

    const transferTx = await boxContract.transferOwnership(timeLock.address)
    transferTx.wait(1)

    log(`Ownership of 'MarketSettings' contract is transferred to 'TimeLock'...`)
}

export default deployBox
deployBox.tags = ['all', 'deployBox']