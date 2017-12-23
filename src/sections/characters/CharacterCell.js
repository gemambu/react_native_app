import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'

export default class CharacterCell extends Component {
    static defaultProps = {
        item        : {},
        onSelect    : () => {}
    }

    render(){
        const { item, onSelect } = this.props

        const nombre = item.nombre ? item.nombre : ''
        const edad = item.edad ? item.edad : ''
        const image = item.image_dir ? { uri: item.image_dir } : null   

        return(
            <TouchableOpacity onPress={ () => onSelect(item) }>
                <Image source={ image } style={ styles.image } resizeMode={'cover'}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    image: {
        width: '100%',
        height: 200,
    }
})