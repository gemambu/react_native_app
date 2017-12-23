/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import * as webservices from 'react_native_app/src/webservices/webservices'
import { Colors } from 'react_native_app/src/commons'

/********************** COMPONENTS **********************/
import HousesList from 'react_native_app/src/sections/houses/HousesList'
import CharactersList from 'react_native_app/src/sections/characters/CharactersList'

/********************** REDUX **********************/
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from 'react_native_app/src/redux/reducers' //nuestros reducers
const reducer = combineReducers(reducers) // combinamos nuestros reducers
const store = createStore( // creamos el store  con:
  reducer, // nuestros reducer
  applyMiddleware(thunk) // nuestro middleware redux-thunk
)
/***************************************************/


export default class App extends Component {

  componentWillMount() {
    webservices.configureAxios()
    StatusBar.setBarStyle('light-content')
  }

  render() {

    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene
              key={'HousesList'}
              component={HousesList}
              hideNavBar
            />
            <Scene
              key={'CharactersList'}
              component={CharactersList}
              navigationBarStyle={styles.navBar}
              navBarButtonColor={'white'}
            />
          </Scene>
        </Router>
      </Provider>
    );
  }

}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: Colors.navBar,
  }
});