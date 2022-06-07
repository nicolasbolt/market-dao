import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { ethers } from 'hardhat'
import { ADDRESS_ZERO } from '../hardhat_helper_config'

const deployMarket: DeployFunction = async(hre: HardhatRuntimeEnvironment) => {
    const { getNamedAccounts, deployments, network } = hre
    const { deployer } = await getNamedAccounts()
    const { deploy, log, get } = deployments
    const governanceToken = await ethers.getContract('GovernanceToken')

    log('Deploying the Market contract...')

    const market = await deploy('Market', {
        from: deployer,
        args: [governanceToken.address, governanceToken.address],
        log: true,
    })

    const marketContract = await ethers.getContractAt('Market', market.address)
    const timeLock = await ethers.getContract('TimeLock')

    const transferTx = await marketContract.transferOwnership(timeLock.address)
    transferTx.wait(1)

    log(`Ownership of 'Market' contract is transferred to 'TimeLock'...`)
}

export default deployMarket
deployMarket.tags = ['all', 'deployMarket']