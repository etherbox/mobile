import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Balance, Container } from 'components/widgets';
import { colors, measures } from 'common/styles';
import DepositPanel from './DepositPanel';
import WithdrawPanel from './WithdrawPanel';
import QuickWithdrawPanel from './QuickWithdrawPanel';

export class ManagePoints extends React.Component {

    static navigationOptions = { title: 'Gerenciar saldo' };

    render() {
        return (
            <Container style={styles.container}>
                <Balance />
                <ScrollView style={styles.scrollContainer}>
                    <DepositPanel />
                    <QuickWithdrawPanel />
                    <WithdrawPanel />
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    scrollContainer: {
        margin: measures.defaultMargin,
        flex: 1
    }
});