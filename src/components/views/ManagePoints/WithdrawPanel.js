import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import autobind from 'autobind-decorator';
import { measures } from 'common/styles';
import { Button, ExpandablePanel, SelectInput } from 'components/widgets';
import { General } from 'common/constants';
import ExchangeInput from './ExchangeInput';

export default class WithdrawPanel extends React.Component {

    state = { fiat: 0, token: 0 };

    @autobind
    onPress() {
        const { fiat, token } = this.state;
        console.log(fiat, token);
    }

    render() {
        return (
            <ExpandablePanel title="Saque">
                <View style={styles.container}>
                    <Text>Quantidade</Text>
                    <ExchangeInput
                        fiatUnit="ETH"
                        tokenUnit="ETH"
                        onChange={({ fiat, token }) => this.setState({ fiat, token })} />
                    <Button title="Sacar" onPress={this.onPress} />
                </View>
            </ExpandablePanel>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'stretch'
    }
});