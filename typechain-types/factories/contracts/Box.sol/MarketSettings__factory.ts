/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MarketSettings,
  MarketSettingsInterface,
} from "../../../contracts/Box.sol/MarketSettings";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newFee",
        type: "uint256",
      },
    ],
    name: "FeeChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieveFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newFee",
        type: "uint256",
      },
    ],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6103008061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806369fe0e2d1461005c578063715018a6146100715780638c4b47a1146100795780638da5cb5b1461008f578063f2fde38b146100aa575b600080fd5b61006f61006a36600461027c565b6100bd565b005b61006f61012b565b6001546040519081526020015b60405180910390f35b6000546040516001600160a01b039091168152602001610086565b61006f6100b836600461024c565b610161565b6000546001600160a01b031633146100f05760405162461bcd60e51b81526004016100e790610295565b60405180910390fd5b60018190556040518181527f6bbc57480a46553fa4d156ce702beef5f3ad66303b0ed1a5d4cb44966c6584c39060200160405180910390a150565b6000546001600160a01b031633146101555760405162461bcd60e51b81526004016100e790610295565b61015f60006101fc565b565b6000546001600160a01b0316331461018b5760405162461bcd60e51b81526004016100e790610295565b6001600160a01b0381166101f05760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016100e7565b6101f9816101fc565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561025e57600080fd5b81356001600160a01b038116811461027557600080fd5b9392505050565b60006020828403121561028e57600080fd5b5035919050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fea26469706673582212209bb88eda90869b859f1313fd5582dee193f705d4a4821c88fde5f3eb68e27fa964736f6c63430008070033";

type MarketSettingsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketSettingsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MarketSettings__factory extends ContractFactory {
  constructor(...args: MarketSettingsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MarketSettings> {
    return super.deploy(overrides || {}) as Promise<MarketSettings>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MarketSettings {
    return super.attach(address) as MarketSettings;
  }
  override connect(signer: Signer): MarketSettings__factory {
    return super.connect(signer) as MarketSettings__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketSettingsInterface {
    return new utils.Interface(_abi) as MarketSettingsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarketSettings {
    return new Contract(address, _abi, signerOrProvider) as MarketSettings;
  }
}