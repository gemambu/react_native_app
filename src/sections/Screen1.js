import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Screen1 extends React.Component {

    _goScreen2() {
        Actions.screen2({ texto: 'Texto de prueba'})
    }

    render() {
        return (
            <View>
                <Text>ESTA ES LA SCREEN 1</Text>
                <Button
                    onPress={() => this._goScreen2() }
                    title="Ir a la pantalla 2"
                />
            </View>
        )
    }
}