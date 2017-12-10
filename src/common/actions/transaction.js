import { Transaction as TransactionService } from 'common/services';
import { transaction as TransactionStore, wallet as WalletStore } from 'common/stores';
import { Contract } from 'common/constants';

export async function transfer(to, amount) {
    return TransactionService.transfer(to, amount);
}

export async function saveValue(amount) {
    return TransactionService.transfer(Contract.ADDRESS, amount);
}

export async function loadHistory(walletAddress) {
    const history = await TransactionService.getTransactionHistory(walletAddress);
    TransactionStore.setHistory(history.reverse());
}

export async function isLoading(loading) {
    TransactionStore.isLoading(loading);
}