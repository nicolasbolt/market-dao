import { ethers, network } from 'hardhat'
import { DESCRIPTION, DEVELOPMENT_CHAIN, FUNC, FUNC_ARGS, MIN_DELAY, VOTING_DELAY } from '../hardhat_helper_config'
import { moveBlocks, moveTime } from '../helpers'

export async function queueAndExecute(functionToCall: string, args: number[], proposalDescription: string) {
    const box = await ethers.getContract('Market')
    const encodedFunctionCall = box.interface.encodeFunctionData(
        functionToCall,
        args
    )

    const descriptionHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(proposalDescription))

    // queue
    const governor = await ethers.getContract('GovernorContract')
    const queueTransaction = await governor.queue(
        [box.address],
        [0],
        [encodedFunctionCall],
        descriptionHash
    )

    queueTransaction.wait(1)
    console.log('Proposal in queue...')

    if (DEVELOPMENT_CHAIN.includes(network.name)) {
        await moveTime(MIN_DELAY + 1)
        await moveBlocks(1);
    }

    // execute
    const executeTx = await governor.execute(
        [box.address],
        [0],
        [encodedFunctionCall],
        descriptionHash 
    )

    executeTx.wait(1)

    console.log('Executed...')

    console.log(`The new fee value is ${await box.retrieveFee()}`)
}

queueAndExecute(FUNC, [FUNC_ARGS], DESCRIPTION)
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error), process.exit(1)
    })