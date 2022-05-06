import { ethers, network } from 'hardhat'
import { DESCRIPTION, DEVELOPMENT_CHAIN, FUNC, FUNC_ARGS, PROPOSAL_FILE, VOTING_DELAY } from '../hardhat_helper_config'
import { moveBlocks } from '../helpers'
import * as fs from 'fs'

export async function makeProposal(functionToCall: string, args: number[], proposalDescription: string) {
    const governor = await ethers.getContract('GovernorContract')
    const box = await ethers.getContract('MarketSettings')

    const encodedFunctionCall = box.interface.encodeFunctionData(
        functionToCall,
        args
    )

    const proposeTx = await governor.propose(
        [box.address],
        [0],
        [encodedFunctionCall],
        proposalDescription
    )

    const proposeReceipt = await proposeTx.wait(1)

    // Jump time if on a development chain
    if (DEVELOPMENT_CHAIN.includes(network.name)) {
        await moveBlocks(VOTING_DELAY + 1)
    }

    const proposalId = proposeReceipt.events[0].args.proposalId
    console.log(`Proposal ID is ${proposalId.toString()}`)

    fs.writeFileSync(
        PROPOSAL_FILE,
        JSON.stringify({
            [network.config.chainId!.toString()]: [proposalId.toString()]
        })
    )
}

makeProposal(FUNC, [FUNC_ARGS], DESCRIPTION)
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error), process.exit(1)
    })
