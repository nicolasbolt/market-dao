import { useState, useEffect } from 'react'
import { useMoralis, useWeb3Contract } from 'react-moralis'
import { marketABI, governanceTokenABI, marketAddress, governanceTokenAddress } from '../constants'
import { ethers } from 'ethers'

export default function MarketDetails() {
  const [gtBalance, setGtBalance] = useState('0.0')

  const { account, isWeb3Enabled } = useMoralis
  const [stakedBalance, setStakedBalance] = useState("0")
  const [earnedBalance, setEarned] = useState("0")

  const { runContractFunction: getGtBalance } = useWeb3Contract({
      abi: governanceTokenABI,
      contractAddress: governanceTokenAddress,
      functionName: "balanceOf",
      params: {
          account: account,
      },
  })

  const { runContractFunction: getStakedBalance } = useWeb3Contract({
      abi: marketABI,
      contractAddress: marketAddress,
      functionName: "getStaked",
      params: {
          account: account,
      },
  })

  const { runContractFunction: getEarned } = useWeb3Contract({
      abi: marketABI,
      contractAddress: marketAddress,
      functionName: "earned",
      params: {
          account: account,
      },
  })

  useEffect(() => {
    if (account && isWeb3Enabled) {
        updateUIValues()
    }
  }, [account, isWeb3Enabled])

  async function updateUIValues() {
    const gtBalanceFromContract = (
        await getRtBalance({ onError: (error) => console.log(error) })
    ).toString()
    const formatttedGtBalanceFromContract = ethers.utils.formatUnits(
        gtBalanceFromContract,
        "ether"
    )
    setRtBalance(formatttedGtBalanceFromContract)

    const stakedFromContract = (
        await getStakedBalance({ onError: (error) => console.log(error) })
    ).toString()
    const formatttedstakedFromContract = ethers.utils.formatUnits(stakedFromContract, "ether")
    setStakedBalance(formatttedstakedFromContract)

    const earnedFromContract = (
        await getEarned({ onError: (error) => console.log(error) })
    ).toString()

    console.log(`Earned: ${earnedFromContract}`)

    const formatttedEarnedFromContract = ethers.utils.formatUnits(earnedFromContract, "ether")
    setEarned(formatttedEarnedFromContract)
}

  return (
    <div className='mx-4 mt-5'>
      <div>GT Token Balance: {gtBalance}</div>
      <div>Staked Balance: {stakedBalance}</div>
      <div>Earned Balance: {earnedBalance}</div>
    </div>
  )
}

// 50:00
