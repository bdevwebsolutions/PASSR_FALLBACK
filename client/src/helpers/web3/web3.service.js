import { AES } from 'crypto-js';
import styled from 'styled-components';
import PasswordVaultContract from '../../contracts/PasswordVault.json';

const createContract = (web3, contract) => {
    return new web3.eth.Contract(PasswordVaultContract.abi, contract);
}

export const getPasswords = async (accounts, web3, contract, setLoadingState) => {
    if(web3 !== undefined){
        setLoadingState(true);
        const CONTRACT = createContract(web3, contract);
        try {
            const data = await CONTRACT.methods.getCompleteVault().call({from: accounts[0]})
            setLoadingState(false);
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
        setLoadingState(false);
    }
    throw new Error("Web3 is not defined");

}

export const addToVault = async (accounts, web3, contract, domain, pass, master, setLoadingState) => {
    if(web3 !== undefined){
        setLoadingState(true);
        const CONTRACT = createContract(web3, contract);
        try {
            const ENCRYPTED = AES.encrypt(pass.toString(), master.toString()).toString()
            await CONTRACT.methods.addToVault(domain, ENCRYPTED).send({from: accounts[0]})
            setLoadingState(false);
        } catch (error) {
            throw new Error(error.message)
        }
    }
    throw new Error('Can not add password to vault');
}

export const removeFromVault = async (accounts, web3, contract, domain, setLoadingState) => {
    if(web3 !== undefined) {
        setLoadingState(true)
        const CONTRACT = createContract(web3, contract);
        try {
            await CONTRACT.methods.removeFromVault('netlog').send({from: accounts[0].toString()});
            setLoadingState(false);
        } catch (error) {
            throw new Error(error.message)
        }
    }
}