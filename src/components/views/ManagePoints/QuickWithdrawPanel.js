import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import { measures } from 'common/styles';
import { Button, ExpandablePanel, SelectInput } from 'components/widgets';
import { wallet as WalletStore } from 'common/stores';
import { Wallet as WalletUtils } from 'common/utils';
import { General } from 'common/constants';
import ExchangeInput from './ExchangeInput';

@inject('transaction', 'wallet')
@observer
export default class QuickWithdrawPanel extends React.Component {
    
    state = { amount: '' };

    get balance() {
        return WalletUtils.tokenDecimals(this.props.wallet.contractBalance);
    }

    @autobind
    async onPress() {
        await WalletStore.contract.functions.withdrawalComplete();
    }

    render() {
        return (
            <ExpandablePanel title="Saque instantâneo">
                <View style={styles.container}>
                    <Text>Saldo da poupança (ETH): {this.balance}</Text>
                    <Button title="Sacar" onPress={this.onPress} />
                </View>
            </ExpandablePanel>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'stretch',
        minHeight: 100
    },
    input: {
        height: 40,
        fontSize: 25
    }
});