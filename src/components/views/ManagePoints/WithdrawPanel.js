import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import { measures } from 'common/styles';
import { Button, ExpandablePanel, SelectInput } from 'components/widgets';
import { Wallet as WalletUtils } from 'common/utils';
import { Transaction } from 'common/actions';
import { General } from 'common/constants';
import ExchangeInput from './ExchangeInput';

@inject('transaction', 'wallet')
@observer
export default class WithdrawPanel extends React.Component {

    state = { success: false };

    get balance() {
        return WalletUtils.tokenDecimals(this.props.wallet.contractBalance);
    }

    @autobind
    async onPress() {
        try {
            await Transaction.isLoading(true);
            await Transaction.withdraw();
            this.setState({ success: true });
        } catch(e) {
            this.setState({ error: true });
            General.DEBUG && console.error(e);
        } finally {
            await Transaction.isLoading(false);
        }
    }

    render() {
        return (
            <ExpandablePanel title="Saque programado">
                <View style={styles.container}>
                    <Text>Saldo da poupança (ETH): {this.balance}</Text>
                    <Button title="Sacar" onPress={this.onPress} />
                    <Text>* Tempo de espera estimado: 5 minutos</Text>
                    {this.state.success && (
                        <Text>O saldo voltará para sua conta em breve.</Text>
                    )}
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
        fontSize: 25,
        marginTop: 10
    }
});