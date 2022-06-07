import React from 'react'
import { useWeb3Contract } from 'react-moralis'
import { governanceTokenABI, governanceTokenAddress, marketABI, marketAddress } from '../constants'
import { Form } from 'web3uikit'
import { ethers } from 'ethers'

export default function StakeForm() {
  const { runContractFunction } = useWeb3Contract()
  let approveOptions = {
      abi: governanceTokenABI,
      contractAddress: governanceTokenAddress,
      functionName: 'approve',
  }

  let marketOptions = {
    abi: marketABI,
    contractAddress: marketAddress,
    functionName: 'stake',
  }

  const handleStakeSubmit = async data => {
    const amountToAprrove = data.data[0].inputResult
    approveOptions.params = {
        amount: ethers.utils.parseUnits(amountToAprrove, 'ether').toString(),
        spender: marketAddress,
    }

    const tx = await runContractFunction({
        params: approveOptions,
        onError: error => console.log(error),
        onSuccess: () => {
            handleApproveSuccess(approveOptions.params.amount)
        }
    })
  }

  const handleApproveSuccess = async amount => {
      marketOptions.params = {
          amount
      }
      const tx = await runContractFunction({
          params: marketOptions,
          onError: error => console.log(error)
      })
    //   await tx.wait(1)
  }


  return (
    <div>
        <Form
            onSubmit={handleStakeSubmit}
            data={
                [
                    {
                        inputWidth: '50%',
                        name: 'Amount to stake (in ETH)',
                        type: 'number',
                        value: '',
                        key: 'amountToStake'
                    }
                ]
            }
            title='Stake Tokens'
        ></Form>
    </div>
  )
}
