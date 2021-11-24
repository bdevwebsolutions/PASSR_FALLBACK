import React from "react";
import Web3 from "web3";

export type TPasswordList = Array<string[]>;

export type TGetPasswordsFromContract = (setLoading: React.Dispatch<boolean>) => void;

export type TAddPasswordToContract = (setLoading: React.Dispatch<number>, domain: string, pass: string, credential: string) => void;

export type TRemovePasswordFromContract = (setLoading: React.Dispatch<number>, domain: string) => void;

export type TDecryptLocations = () => void;

export interface IStoreContext {
  web3: Web3 | null,
  setWeb3: React.Dispatch<Web3> | React.Dispatch<null>,
  accounts: string[],
  setAccounts: React.Dispatch<string[]>,
  contract: string | null,
  setContract: React.Dispatch<string> | React.Dispatch<null>,
  chainId: number,
  setChainId: React.Dispatch<number>,
  master: string, 
  setMaster: React.Dispatch<string>,
  passwordList: TPasswordList,
  setPasswordList: React.Dispatch<TPasswordList>,
  focusPassword: string[];
  setFocusPassword: React.Dispatch<string[]>,
  locationsCopy: string[],
  locationsAreEncrypted: boolean,
  getPasswordsFromContract: TGetPasswordsFromContract,
  addPasswordToContract: TAddPasswordToContract,
  removeFromContract: TRemovePasswordFromContract,
  decryptLocations: TDecryptLocations
}