import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import { Button } from 'react_native_app/src/widgets'
import { connect } from 'react-redux'
import { Colors } from 'react_native_app/src/commons'
import * as CharactersAction from 'react_native_app/src/redux/actions/characters'

class CharacterView extends Component {

    onDelete(character) {
        this.props.deleteCharacter(character)
    }

    render(){
        const {character} = this.props
        const nombre = character.nombre ? character.nombre : ''
        const edad = character.edad ? character.edad : ''
        const image = character && character.image_dir ? 
            { uri: character.image_dir } : 
            require('react_native_app/src/resources/placeholder.png')   


        return (
            
            <View style={styles.container}>

                 <Image source={ image } style={ styles.image } resizeMode={'cover'}/>
                 <View style={styles.textContainer}>
                    <Text style={styles.name}>{ nombre }</Text>
                    <Text style={styles.age}>{ 'Edad: ' + edad }</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button label={'Eliminar'} onPress= { () => this.onDelete(character)}/>
                </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        character: state.characters.item,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteCharacter: (character) => {
            character && dispatch(CharactersAction.deleteCharacter(character))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterView)

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },

    name: {
        flex: 1,
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
    },

    edad: {
        fontSize: 16,
        color: 'white',
    },

    image: {
        width: '100%',
        height: 200,
    },

    buttonContainer: {
        margin: 20,
    },
});