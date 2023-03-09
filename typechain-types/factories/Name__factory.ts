/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Name, NameInterface } from "../Name";

const _abi = [
  {
    inputs: [],
    name: "getName",
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
    name: "name",
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
        name: "_name",
        type: "bytes32",
      },
    ],
    name: "setName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061017f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806306fdde031461004657806317d7de7c146100645780635ac801fe14610082575b600080fd5b61004e61009e565b60405161005b91906100d0565b60405180910390f35b61006c6100a4565b60405161007991906100d0565b60405180910390f35b61009c6004803603810190610097919061011c565b6100ad565b005b60005481565b60008054905090565b8060008190555050565b6000819050919050565b6100ca816100b7565b82525050565b60006020820190506100e560008301846100c1565b92915050565b600080fd5b6100f9816100b7565b811461010457600080fd5b50565b600081359050610116816100f0565b92915050565b600060208284031215610132576101316100eb565b5b600061014084828501610107565b9150509291505056fea264697066735822122009f7b8bfdfeb65b92b27eebe3340b63204013a6512059c44eb3fe37eb7a1327b64736f6c63430008110033";

type NameConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NameConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Name__factory extends ContractFactory {
  constructor(...args: NameConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Name> {
    return super.deploy(overrides || {}) as Promise<Name>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Name {
    return super.attach(address) as Name;
  }
  override connect(signer: Signer): Name__factory {
    return super.connect(signer) as Name__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NameInterface {
    return new utils.Interface(_abi) as NameInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Name {
    return new Contract(address, _abi, signerOrProvider) as Name;
  }
}
