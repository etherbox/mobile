import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'components/widgets';
import { colors, measures } from 'common/styles';

export const LoyaltyClubBox = () => (
    <View style={styles.container}>
        <Text style={styles.title}>Poupança EtherBox</Text>
        <Text style={styles.description}>Com o EtherBox você é recompensado por poupar o seu dinheiro. Tudo isso de uma forma segura e transparente.</Text>
        <Button style={styles.button} borderless title="Veja como funciona" onPress={() => {}} />
    </View>
);



const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.antique,
        paddingHorizontal: measures.defaultPadding * 2,
        justifyContent: 'space-around',
        height: 140
    },
    title: {
        color: colors.white,
        fontSize: measures.fontSizeLarge - 4
    },
    description: {
        color: colors.white,
        fontSize: measures.fontSizeMedium - 4
    },
    button: {
        alignSelf: 'flex-end'
    }
});