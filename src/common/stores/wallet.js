import { action, observable } from 'mobx';

const initialState = {
    balance: 0,
    contractBalance: 0,
    contract: null,
    loading: false,
    wallet: null
};

class WalletStore {

    @observable balance = initialState.balance;
    @observable contractBalance = initialState.contractBalance;
    @observable contract = initialState.contract;
    @observable loading = initialState.loading;
    @observable wallet = initialState.wallet;

    @action isLoading(state) {
        this.loading = Boolean(state);
    }
    
    @action setBalance(balance) {
        this.balance = balance.toString();
    }
    
    @action setContractBalance(balance) {
        this.contractBalance = balance.toString();
    }

    @action setContract(contract) {
        this.contract = contract;
    }
    
    @action setWallet(wallet) {
        this.wallet = wallet;
    }

    @action reset() {
        this.balance = initialState.balance;
        this.contractBalance = initialState.contractBalance;
        this.contract = initialState.contract;
        this.loading = initialState.loading;
        this.wallet = initialState.wallet;
    }

}

export default new WalletStore();