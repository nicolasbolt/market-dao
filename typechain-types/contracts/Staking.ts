/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface StakingInterface extends utils.Interface {
  functions: {
    "s_balances(address)": FunctionFragment;
    "s_stakingToken()": FunctionFragment;
    "s_totalSupply()": FunctionFragment;
    "stake(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "s_balances"
      | "s_stakingToken"
      | "s_totalSupply"
      | "stake"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "s_balances", values: [string]): string;
  encodeFunctionData(
    functionFragment: "s_stakingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "s_totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "s_balances", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "s_stakingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "s_totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;

  events: {};
}

export interface Staking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StakingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    s_balances(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    s_stakingToken(overrides?: CallOverrides): Promise<[string]>;

    s_totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  s_balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  s_stakingToken(overrides?: CallOverrides): Promise<string>;

  s_totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  stake(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    s_balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    s_stakingToken(overrides?: CallOverrides): Promise<string>;

    s_totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    stake(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    s_balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    s_stakingToken(overrides?: CallOverrides): Promise<BigNumber>;

    s_totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    s_balances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    s_stakingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    s_totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}