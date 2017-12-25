import React, { Component } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

export default class Input extends Component {

    static defaultProps = {
        labelStyle: {},
        inputStyle: {},
        errorStyle: {},
        label: '',
        value: '',
        error: '',
        placeHolder: '',
        onChangeText: () => { }

    }

    render() {
        return (

            <View style={styles.container}>
                <Text style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
                <TextInput
                    style                   = { [styles.input, this.props.inputStyle] }
                    onChangeText            = { (v) => this.props.onChangeText(v) }
                    placeholder             = { this.props.placeHolder }
                    placeholderTextColor    = { 'grey' }
                    value                   = { this.props.value }
                    underlineColorAndroid   = { 'transparent' }
                />

                { this.props.error ? <Text style={[styles.error, this.props.errorStyle]}>{this.props.error}</Text> : null }
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {

    },

    error: {
        color: 'white',
        textAlign: 'right',
        marginTop: 4,
    },

    input: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
        fontSize: 16,
        color: 'white',
    },

    label: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10,
        fontWeight: '600',
    },
})