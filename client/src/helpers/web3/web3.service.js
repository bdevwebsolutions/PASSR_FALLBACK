import { AES } from 'crypto-js';
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
            const filterCredentials = data[2].filter(el => { return el.length > 0 ? true: false});
            const filterLocations = data[1].filter(el => { return el.length > 0 ? true : false});
            const filterHashes = data[0].filter(el => { return el.length > 0 ? true : false});
            return [filterHashes, filterLocations, filterCredentials];
        } catch (error) {
            setLoadingState(false);
            window.alert(error.message);
        }
    }
    window.alert("Web3 is not defined");

}

export const addToVault = async (accounts, web3, contract, domain, pass, credential, master, setLoadingState) => {
    if(web3 !== undefined){
        setLoadingState(1);
        const CONTRACT = createContract(web3, contract);
        try {
            const ENCRYPTED_PASS = AES.encrypt(pass.toString(), master.toString()).toString();
            const ENCRYPTED_CRED = AES.encrypt(credential.toString(), master.toString()).toString();
            await CONTRACT.methods.addToVault(domain.toString(), ENCRYPTED_PASS, ENCRYPTED_CRED).send({from: accounts[0]});
            setLoadingState(2);
        } catch (error) {
            setLoadingState(3);
        }
    }
}

export const removeFromVault = async (accounts, web3, contract, domain, setLoadingState) => {
    if(web3 !== undefined) {
        setLoadingState(1)
        const CONTRACT = createContract(web3, contract);
        try {
            await CONTRACT.methods.removeFromVault(domain).send({from: accounts[0].toString()});
            setLoadingState(2);
        } catch (error) {
            setLoadingState(0)
        }
    }
}

export const getUsageCounter = async (accounts, web3, contract) => {
    if(web3 !== undefined) {
        const CONTRACT = createContract(web3, contract);
        try {
            const data = await CONTRACT.methods.getUsageCount().call({from: accounts[0]});
            return data;
        } catch (error) {
            window.alert(error.message);
        }
    }
}