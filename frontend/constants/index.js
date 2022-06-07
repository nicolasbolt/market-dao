const marketAddress = '0xa513E6E4b8f2a923D98304ec87F64353C4D5C853'
const governanceTokenAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

const governanceTokenABI = require('./GovernanceTokenABI.json')
const marketABI = require('./MarketABI.json')

module.exports = {
    marketABI,
    governanceTokenABI,
    marketAddress,
    governanceTokenAddress
}