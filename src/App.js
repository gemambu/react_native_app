/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';

import Screen1 from 'react_native_app/src/sections/Screen1';
import Screen2 from 'react_native_app/src/sections/Screen2';

export default class App extends Component {


  render() {

    return (

      <Router>

        <Scene key="root">

          <Scene
          initial
            key={'screen1'}
            component={Screen1}
          />

          <Scene
            
            key={'screen2'}
            component={Screen2}
          />

        </Scene>
      </Router>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
