import axios from 'axios';
import ethers from 'ethers';
import { wallet as WalletStore } from 'common/stores';
import { Contract, General, Transaction } from 'common/constants';
import { Wallet as WalletUtils } from 'common/utils';

export async function getTransactionHistory(walletAddress) {
    const { status, data } = await axios.get(`${General.API}?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&sort=asc`);
    if (status == 200 && data.status == 1) return data.result;
    else throw new Error('No results');
}

export async function getContractTransactionHistory(walletAddress) {
    walletAddress = WalletUtils.padStartHex(walletAddress).toLowerCase();
    const { status, data } = await axios.get(`${General.API}?module=logs&action=getLogs&fromBlock=0&toBlock=earliest&address=${Contract.ADDRESS}&topic0=${Transaction.OPERATION_TRANSFER_HASH}&topic1=${walletAddress}&topic2=${walletAddress}&topic1_2_opr=or`);
    if (status == 200 && data.status == 1) return data.result;
    else throw new Error('No results');
}

export async function transfer(to, value) {
    value = ethers.utils.parseEther(String(value));
    return WalletStore.wallet.sendTransaction({ ...Transaction.OPTIONS, to, value });
}

export async function withdraw() {
    await WalletStore.contract.functions.withdrawalInitiate();
    console.log("Withdraw initiated");
    console.log("Waiting for 3 minutes");
    return new Promise(resolve => setTimeout(async function() {
        console.log("Requesting the withdraw");
        const result = await WalletStore.contract.functions.withdrawalComplete();
        console.log(result);
        console.log("Money withdrawn");
        resolve(result);
    }, 240000));
}