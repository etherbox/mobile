import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, TextInput } from 'react-native';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import { measures } from 'common/styles';
import { Button, ExpandablePanel, SelectInput } from 'components/widgets';
import { Transaction } from 'common/actions';
import { General } from 'common/constants';
import ExchangeInput from './ExchangeInput';

@inject('transaction', 'wallet')
@observer
export default class DepositPanel extends React.Component {

    state = { amount: '', success: false, error: false };

    @autobind
    async onPress() {
        try {
            await Transaction.isLoading(true);
            await Transaction.saveValue(this.state.amount);
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
            <ExpandablePanel title="Depositar na poupança">
                <View style={styles.container}>
                    <Text>Valor (ETH)</Text>
                    <TextInput
                        value={this.state.amount}
                        style={styles.input}
                        onChangeText={amount => this.setState({ amount })}
                        keyboardType="numeric"
                        placeholder="Valor (ETH)" />
                    <Button title="Depositar" onPress={this.onPress} />
                    {this.props.transaction.loading && <ActivityIndicator animating />}
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