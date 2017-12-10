import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import autobind from 'autobind-decorator';
import { General } from 'common/constants';

export default class ExchangeInput extends React.Component {

    state = { amount: '' };

    @autobind
    onChangeFiat(fiat) {
        const token = String(fiat * General.FIAT_TOKEN_RATE);
        this.setState({ fiat, token }, () => {
            this.props.onChange({ fiat, token });
        });
    }
    
    @autobind
    onChangeToken(token) {
        const fiat = String(token / General.FIAT_TOKEN_RATE);
        this.setState({ fiat, token }, () => {
            this.props.onChange({ fiat, token });
        });
    }

    render() {
        const { fiat, token } = this.state;
        const { inverted } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.divider} children="Valor" />
                <TextInput
                    value={fiat}
                    style={styles.input}
                    onChangeText={this.onChangeFiat}
                    keyboardType="numeric"
                    placeholder="Valor (ETH)" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
    },
    divider: {
        fontWeight: 'bold'
    },
    input: {
        flex: 1,
        textAlign: 'center'
    }
});