import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import autobind from 'autobind-decorator';
import { measures } from 'common/styles';
import { Button, ExpandablePanel, SelectInput } from 'components/widgets';
import { General } from 'common/constants';
import ExchangeInput from './ExchangeInput';

export default class QuickWithdrawPanel extends React.Component {
    
        state = { amount: '' };
    
        @autobind
        onPress() {
            console.log(this.state.amount);
        }
    
        render() {
            return (
                <ExpandablePanel title="Saque rápido">
                    <View style={styles.container}>
                        <Text>Valor (ETH)</Text>
                        <TextInput
                            value={this.state.amount}
                            style={styles.input}
                            onChangeText={amount => this.setState({ amount })}
                            keyboardType="numeric"
                            placeholder="Valor (ETH)" />
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
        height: 100
    },
    input: {
        height: 40,
        fontSize: 25
    }
});