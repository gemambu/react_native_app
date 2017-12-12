import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Screen2 extends React.Component {

    render() {
        return (
            <View>
                <Text>ESTA ES LA SCREEN 2</Text>
                <Text>{ this.props.texto }</Text>
            </View>
        )
    }
}