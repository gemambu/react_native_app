import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { AsyncCalls, Colors } from 'react_native_app/src/commons'
import HousesCell from './HousesCell'

// Redux
import { connect } from 'react-redux'
import * as HousesActions from 'react_native_app/src/redux/actions/houses'

class HousesList extends Component {

    componentWillMount() {

        this.props.fetchHousesList()
    }

    onSelect(house){

         this.props.updateSelected(house)
    }

    renderItem(item, index) {
        return (
            <HousesCell 
                item = { item }
                onSelect={ (house) => this.onSelect(house)}
            />
        )
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={{color: 'white'}}>Selected: { this.props.item ? this.props.item.nombre : '' }</Text>
                <FlatList
                    numColumns={2}
                    data={this.props.list}
                    renderItem={({ item, index }) => this.renderItem(item, index)}
                    keyExtractor={(item, index) => item.id}
                    extraData={this.state}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state: ', state)
    return {
        list: state.houses.list,
        item: state.houses.item
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchHousesList: () => {
            dispatch(HousesActions.fetchHousesList())
        },
        updateSelected: (house) => {
            dispatch(HousesActions.updateSelected(house))
        }
    }
} 

export default  connect(mapStateToProps, mapDispatchToProps)(HousesList)

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'rgb(42,42,42)',
        paddingVertical: 30
    }

})