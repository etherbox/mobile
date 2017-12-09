export async function updateBalance(wallet) {
    const balance = await wallet.getBalance();
    return balance.toString();
}

export async function updateContractBalance(contract, wallet) {
    const result = await contract.functions.balanceOf(wallet.getAddress());
    return result[0].toString();
}