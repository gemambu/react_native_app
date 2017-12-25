import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import { AsyncCalls, Colors } from 'react_native_app/src/commons'
import HousesCell from './HousesCell'
import { Actions } from 'react-native-router-flux'

// Redux
import { connect } from 'react-redux'
import * as HousesActions from 'react_native_app/src/redux/actions/houses'

class HousesList extends Component {

    componentWillMount() {

        this.props.fetchHousesList()
    } 

    renderHeader() {
        if(this.props.isFetching){
            return (
                <View>
                    <ActivityIndicator
                    animating={this.props.isFetching}
                    size='large'
                    color='#FABADA'
                    style={{ marginVertical: 20 }} />
                </View>
            )
        } else {
            return null
        }
        
    }

    onSelect(house) {

        this.props.updateSelected(house)
    }

    renderItem(item, index) {
        return (
            <HousesCell
                item={item}
                onSelect={(house) => this.onSelect(house)}
            />
        )
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={{ color: 'white' }}>Selected: {this.props.item ? this.props.item.nombre : ''}</Text>
                <FlatList
                
                    data={this.props.list}
                    ListHeaderComponent={() => this.renderHeader()}
                    renderItem={({ item, index }) => this.renderItem(item, index)}
                    keyExtractor={(item, index) => item.id}
                    extraData={this.props}
                    numColumns={2}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state: ', state)
    return {

        list: state.houses.list,
        isFetching: state.houses.isFetching
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchHousesList: () => {
            dispatch(HousesActions.fetchHousesList())
        },
        updateSelected: (house) => {
            dispatch(HousesActions.updateHouseSelected(house))
            Actions.CharactersList( { title: house.nombre } )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HousesList)

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingVertical: 30,
        paddingTop: 40 
    }

})