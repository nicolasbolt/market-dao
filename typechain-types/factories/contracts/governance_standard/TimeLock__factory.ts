/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TimeLock,
  TimeLockInterface,
} from "../../../contracts/governance_standard/TimeLock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minDelay",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "proposers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "executors",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CallExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "CallScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "Cancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "MinDelayChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "CANCELLER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXECUTOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROPOSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIMELOCK_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperation",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperationBatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperation",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationDone",
    outputs: [
      {
        internalType: "bool",
        name: "done",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationPending",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationReady",
    outputs: [
      {
        internalType: "bool",
        name: "ready",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "schedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "scheduleBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "updateDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200224a3803806200224a8339810160408190526200003491620003ed565b82828262000052600080516020620021ca8339815191528062000222565b6200007c600080516020620021ea833981519152600080516020620021ca83398151915262000222565b620000a66000805160206200220a833981519152600080516020620021ca83398151915262000222565b620000d06000805160206200222a833981519152600080516020620021ca83398151915262000222565b620000eb600080516020620021ca833981519152336200026d565b62000106600080516020620021ca833981519152306200026d565b60005b82518110156200018c5762000150600080516020620021ea8339815191528483815181106200013c576200013c6200048b565b60200260200101516200026d60201b60201c565b620001796000805160206200222a8339815191528483815181106200013c576200013c6200048b565b620001848162000461565b905062000109565b5060005b8151811015620001d657620001c36000805160206200220a8339815191528383815181106200013c576200013c6200048b565b620001ce8162000461565b905062000190565b5060028390556040805160008152602081018590527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1505050505050620004b7565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6200027982826200027d565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000279576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002d93390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b80516001600160a01b03811681146200033557600080fd5b919050565b600082601f8301126200034c57600080fd5b815160206001600160401b03808311156200036b576200036b620004a1565b8260051b604051601f19603f83011681018181108482111715620003935762000393620004a1565b60405284815283810192508684018288018501891015620003b357600080fd5b600092505b85831015620003e157620003cc816200031d565b845292840192600192909201918401620003b8565b50979650505050505050565b6000806000606084860312156200040357600080fd5b835160208501519093506001600160401b03808211156200042357600080fd5b62000431878388016200033a565b935060408601519150808211156200044857600080fd5b5062000457868287016200033a565b9150509250925092565b60006000198214156200048457634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b611d0380620004c76000396000f3fe60806040526004361061017b5760003560e01c80638065657f116100cc578063bc197c811161007a578063bc197c81146104a5578063c4d252f5146104d1578063d45c4435146104f1578063d547741f1461051e578063e38335e51461053e578063f23a6e6114610551578063f27a0c921461057d57600080fd5b80638065657f146103ba5780638f2a0bb0146103da5780638f61f4f5146103fa57806391d148541461041c578063a217fddf1461043c578063b08e51c014610451578063b1c5f4271461048557600080fd5b8063248a9ca311610129578063248a9ca3146102b95780632ab0f529146102e95780632f2ff15d1461031a57806331d507501461033a57806336568abe1461035a578063584b153e1461037a57806364d623531461039a57600080fd5b806301d5062a1461018757806301ffc9a7146101a957806307bd0265146101de5780630d3cf6fc1461020e578063134008d31461024257806313bc9f2014610255578063150b7a021461027557600080fd5b3661018257005b600080fd5b34801561019357600080fd5b506101a76101a23660046115ee565b610592565b005b3480156101b557600080fd5b506101c96101c4366004611800565b610615565b60405190151581526020015b60405180910390f35b3480156101ea57600080fd5b50610200600080516020611cae83398151915281565b6040519081526020016101d5565b34801561021a57600080fd5b506102007f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca581565b6101a7610250366004611583565b610640565b34801561026157600080fd5b506101c96102703660046117bb565b6106a6565b34801561028157600080fd5b506102a06102903660046114b8565b630a85bd0160e11b949350505050565b6040516001600160e01b031990911681526020016101d5565b3480156102c557600080fd5b506102006102d43660046117bb565b60009081526020819052604090206001015490565b3480156102f557600080fd5b506101c96103043660046117bb565b6000908152600160208190526040909120541490565b34801561032657600080fd5b506101a76103353660046117d4565b6106cc565b34801561034657600080fd5b506101c96103553660046117bb565b6106f6565b34801561036657600080fd5b506101a76103753660046117d4565b61070f565b34801561038657600080fd5b506101c96103953660046117bb565b610792565b3480156103a657600080fd5b506101a76103b53660046117bb565b6107a8565b3480156103c657600080fd5b506102006103d5366004611583565b61084c565b3480156103e657600080fd5b506101a76103f536600461170a565b61088b565b34801561040657600080fd5b50610200600080516020611c8e83398151915281565b34801561042857600080fd5b506101c96104373660046117d4565b6109cb565b34801561044857600080fd5b50610200600081565b34801561045d57600080fd5b506102007ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78381565b34801561049157600080fd5b506102006104a0366004611662565b6109f4565b3480156104b157600080fd5b506102a06104c036600461140f565b63bc197c8160e01b95945050505050565b3480156104dd57600080fd5b506101a76104ec3660046117bb565b610a39565b3480156104fd57600080fd5b5061020061050c3660046117bb565b60009081526001602052604090205490565b34801561052a57600080fd5b506101a76105393660046117d4565b610b0e565b6101a761054c366004611662565b610b33565b34801561055d57600080fd5b506102a061056c36600461151f565b63f23a6e6160e01b95945050505050565b34801561058957600080fd5b50600254610200565b600080516020611c8e8339815191526105aa81610c56565b60006105ba89898989898961084c565b90506105c68184610c63565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a60405161060296959493929190611994565b60405180910390a3505050505050505050565b60006001600160e01b03198216630271189760e51b148061063a575061063a82610d52565b92915050565b600080516020611cae83398151915261065a8160006109cb565b610668576106688133610d87565b600061067888888888888861084c565b90506106848185610deb565b6106938160008a8a8a8a610e87565b61069c81610f9b565b5050505050505050565b6000818152600160205260408120546001811180156106c55750428111155b9392505050565b6000828152602081905260409020600101546106e781610c56565b6106f18383610fd4565b505050565b60008181526001602052604081205481905b1192915050565b6001600160a01b03811633146107845760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61078e8282611058565b5050565b6000818152600160208190526040822054610708565b33301461080b5760405162461bcd60e51b815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201526a62652074696d656c6f636b60a81b606482015260840161077b565b60025460408051918252602082018390527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1600255565b600086868686868660405160200161086996959493929190611994565b6040516020818303038152906040528051906020012090509695505050505050565b600080516020611c8e8339815191526108a381610c56565b8887146108c25760405162461bcd60e51b815260040161077b90611aaf565b8885146108e15760405162461bcd60e51b815260040161077b90611aaf565b60006108f38b8b8b8b8b8b8b8b6109f4565b90506108ff8184610c63565b60005b8a8110156109bd5780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e8581811061093f5761093f611c61565b905060200201602081019061095491906113f4565b8d8d8681811061096657610966611c61565b905060200201358c8c8781811061097f5761097f611c61565b90506020028101906109919190611b3c565b8c8b6040516109a596959493929190611994565b60405180910390a36109b681611c30565b9050610902565b505050505050505050505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60008888888888888888604051602001610a159897969594939291906119d1565b60405160208183030381529060405280519060200120905098975050505050505050565b7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783610a6381610c56565b610a6c82610792565b610ad25760405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e2063616044820152701b9b9bdd0818994818d85b98d95b1b1959607a1b606482015260840161077b565b6000828152600160205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b600082815260208190526040902060010154610b2981610c56565b6106f18383611058565b600080516020611cae833981519152610b4d8160006109cb565b610b5b57610b5b8133610d87565b878614610b7a5760405162461bcd60e51b815260040161077b90611aaf565b878414610b995760405162461bcd60e51b815260040161077b90611aaf565b6000610bab8a8a8a8a8a8a8a8a6109f4565b9050610bb78185610deb565b60005b89811015610c4057610c3082828d8d85818110610bd957610bd9611c61565b9050602002016020810190610bee91906113f4565b8c8c86818110610c0057610c00611c61565b905060200201358b8b87818110610c1957610c19611c61565b9050602002810190610c2b9190611b3c565b610e87565b610c3981611c30565b9050610bba565b50610c4a81610f9b565b50505050505050505050565b610c608133610d87565b50565b610c6c826106f6565b15610cd15760405162461bcd60e51b815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201526e1c9958591e481cd8da19591d5b1959608a1b606482015260840161077b565b600254811015610d325760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e746044820152652064656c617960d01b606482015260840161077b565b610d3c8142611bb2565b6000928352600160205260409092209190915550565b60006001600160e01b03198216637965db0b60e01b148061063a57506301ffc9a760e01b6001600160e01b031983161461063a565b610d9182826109cb565b61078e57610da9816001600160a01b031660146110bd565b610db48360206110bd565b604051602001610dc59291906118f3565b60408051601f198184030181529082905262461bcd60e51b825261077b91600401611a7c565b610df4826106a6565b610e105760405162461bcd60e51b815260040161077b90611af2565b801580610e2c5750600081815260016020819052604090912054145b61078e5760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e6720646570656044820152656e64656e637960d01b606482015260840161077b565b6000846001600160a01b0316848484604051610ea49291906118e3565b60006040518083038185875af1925050503d8060008114610ee1576040519150601f19603f3d011682016040523d82523d6000602084013e610ee6565b606091505b5050905080610f535760405162461bcd60e51b815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e6720746044820152721c985b9cd858dd1a5bdb881c995d995c9d1959606a1b606482015260840161077b565b85877fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b5887878787604051610f8a9493929190611962565b60405180910390a350505050505050565b610fa4816106a6565b610fc05760405162461bcd60e51b815260040161077b90611af2565b600090815260016020819052604090912055565b610fde82826109cb565b61078e576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556110143390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61106282826109cb565b1561078e576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b606060006110cc836002611bca565b6110d7906002611bb2565b6001600160401b038111156110ee576110ee611c77565b6040519080825280601f01601f191660200182016040528015611118576020820181803683370190505b509050600360fc1b8160008151811061113357611133611c61565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061116257611162611c61565b60200101906001600160f81b031916908160001a9053506000611186846002611bca565b611191906001611bb2565b90505b6001811115611209576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106111c5576111c5611c61565b1a60f81b8282815181106111db576111db611c61565b60200101906001600160f81b031916908160001a90535060049490941c9361120281611c19565b9050611194565b5083156106c55760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161077b565b80356001600160a01b038116811461126f57600080fd5b919050565b60008083601f84011261128657600080fd5b5081356001600160401b0381111561129d57600080fd5b6020830191508360208260051b85010111156112b857600080fd5b9250929050565b600082601f8301126112d057600080fd5b813560206001600160401b038211156112eb576112eb611c77565b8160051b6112fa828201611b82565b83815282810190868401838801850189101561131557600080fd5b600093505b8584101561133857803583526001939093019291840191840161131a565b50979650505050505050565b60008083601f84011261135657600080fd5b5081356001600160401b0381111561136d57600080fd5b6020830191508360208285010111156112b857600080fd5b600082601f83011261139657600080fd5b81356001600160401b038111156113af576113af611c77565b6113c2601f8201601f1916602001611b82565b8181528460208386010111156113d757600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561140657600080fd5b6106c582611258565b600080600080600060a0868803121561142757600080fd5b61143086611258565b945061143e60208701611258565b935060408601356001600160401b038082111561145a57600080fd5b61146689838a016112bf565b9450606088013591508082111561147c57600080fd5b61148889838a016112bf565b9350608088013591508082111561149e57600080fd5b506114ab88828901611385565b9150509295509295909350565b600080600080608085870312156114ce57600080fd5b6114d785611258565b93506114e560208601611258565b92506040850135915060608501356001600160401b0381111561150757600080fd5b61151387828801611385565b91505092959194509250565b600080600080600060a0868803121561153757600080fd5b61154086611258565b945061154e60208701611258565b9350604086013592506060860135915060808601356001600160401b0381111561157757600080fd5b6114ab88828901611385565b60008060008060008060a0878903121561159c57600080fd5b6115a587611258565b95506020870135945060408701356001600160401b038111156115c757600080fd5b6115d389828a01611344565b979a9699509760608101359660809091013595509350505050565b600080600080600080600060c0888a03121561160957600080fd5b61161288611258565b96506020880135955060408801356001600160401b0381111561163457600080fd5b6116408a828b01611344565b989b979a50986060810135976080820135975060a09091013595509350505050565b60008060008060008060008060a0898b03121561167e57600080fd5b88356001600160401b038082111561169557600080fd5b6116a18c838d01611274565b909a50985060208b01359150808211156116ba57600080fd5b6116c68c838d01611274565b909850965060408b01359150808211156116df57600080fd5b506116ec8b828c01611274565b999c989b509699959896976060870135966080013595509350505050565b600080600080600080600080600060c08a8c03121561172857600080fd5b89356001600160401b038082111561173f57600080fd5b61174b8d838e01611274565b909b50995060208c013591508082111561176457600080fd5b6117708d838e01611274565b909950975060408c013591508082111561178957600080fd5b506117968c828d01611274565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b6000602082840312156117cd57600080fd5b5035919050565b600080604083850312156117e757600080fd5b823591506117f760208401611258565b90509250929050565b60006020828403121561181257600080fd5b81356001600160e01b0319811681146106c557600080fd5b81835260006020808501808196508560051b810191508460005b878110156118ad5782840389528135601e1988360301811261186557600080fd5b870180356001600160401b0381111561187d57600080fd5b80360389131561188c57600080fd5b61189986828985016118ba565b9a87019a9550505090840190600101611844565b5091979650505050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8183823760009101908152919050565b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b815260008351611925816017850160208801611be9565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611956816028840160208801611be9565b01602801949350505050565b60018060a01b038516815283602082015260606040820152600061198a6060830184866118ba565b9695505050505050565b60018060a01b038716815285602082015260a0604082015260006119bc60a0830186886118ba565b60608301949094525060800152949350505050565b60a0808252810188905260008960c08301825b8b811015611a12576001600160a01b036119fd84611258565b168252602092830192909101906001016119e4565b5083810360208501528881526001600160fb1b03891115611a3257600080fd5b8860051b9150818a602083013781810191505060208101600081526020848303016040850152611a6381888a61182a565b6060850196909652505050608001529695505050505050565b6020815260008251806020840152611a9b816040850160208701611be9565b601f01601f19169190910160400192915050565b60208082526023908201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616040820152620e8c6d60eb1b606082015260800190565b6020808252602a908201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e206973604082015269206e6f7420726561647960b01b606082015260800190565b6000808335601e19843603018112611b5357600080fd5b8301803591506001600160401b03821115611b6d57600080fd5b6020019150368190038213156112b857600080fd5b604051601f8201601f191681016001600160401b0381118282101715611baa57611baa611c77565b604052919050565b60008219821115611bc557611bc5611c4b565b500190565b6000816000190483118215151615611be457611be4611c4b565b500290565b60005b83811015611c04578181015183820152602001611bec565b83811115611c13576000848401525b50505050565b600081611c2857611c28611c4b565b506000190190565b6000600019821415611c4457611c44611c4b565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfeb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63a2646970667358221220e3d58e689a60a31b817df5db50152766ef242643f32466726acd14cd1eea01b864736f6c634300080700335f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63fd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783";

type TimeLockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimeLockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TimeLock__factory extends ContractFactory {
  constructor(...args: TimeLockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    minDelay: BigNumberish,
    proposers: string[],
    executors: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TimeLock> {
    return super.deploy(
      minDelay,
      proposers,
      executors,
      overrides || {}
    ) as Promise<TimeLock>;
  }
  override getDeployTransaction(
    minDelay: BigNumberish,
    proposers: string[],
    executors: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      minDelay,
      proposers,
      executors,
      overrides || {}
    );
  }
  override attach(address: string): TimeLock {
    return super.attach(address) as TimeLock;
  }
  override connect(signer: Signer): TimeLock__factory {
    return super.connect(signer) as TimeLock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimeLockInterface {
    return new utils.Interface(_abi) as TimeLockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimeLock {
    return new Contract(address, _abi, signerOrProvider) as TimeLock;
  }
}
