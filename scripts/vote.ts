import { network, ethers } from "hardhat"
import { DEVELOPMENT_CHAIN, PROPOSAL_FILE, VOTING_PERIOD } from "../hardhat_helper_config"
import * as fs from 'fs'
import { moveBlocks } from "../helpers"

const VOTE_NO = 0
const VOTE_YES = 1
const VOTE_ABSTAIN = 2

// change this to vote differently
const CHOSEN_VOTE = VOTE_YES

export async function vote(proposalId: string) {
    console.log('Voting...')

    const governor = await ethers.getContract('GovernorContract')
    const voteTx = await governor.castVote(proposalId, CHOSEN_VOTE)
    // example with vote with reason
    // const voteTx = await governor.castVoteWithReason(proposalId, CHOSEN_VOTE, 'Fair fee value')

    voteTx.wait(1)

    let proposalState = await governor.state(proposalId)
    console.log(`Proposal state before voting is ${proposalState}`)

    if (DEVELOPMENT_CHAIN.includes(network.name)) {
        await moveBlocks(VOTING_PERIOD + 1)
    }

    proposalState = await governor.state(proposalId)
    console.log(`Proposal state after voting is ${proposalState}`)
}

const proposals = JSON.parse(fs.readFileSync(PROPOSAL_FILE, 'utf8'))
const proposalId = proposals[network.config.chainId!][0]

vote(proposalId)
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error), process.exit(1)
    })