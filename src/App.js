/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import HousesList from 'react_native_app/src/sections/houses/HousesList'
import * as webservices from 'react_native_app/src/webservices/webservices'


/********************** REDUX **********************/
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from 'react_native_app/src/redux/reducers' //nuestros reducers
const reducer  = combineReducers(reducers) // combinamos nuestros reducers
const store = createStore( // creamos el store 
  reducer,
  applyMiddleware(thunk)
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
          </Scene>
        </Router>
      </Provider>
    );
  }

}

const styles = StyleSheet.create({

});