/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StatusBar
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from '../redux/store';

import Main from './main';
import LogIn from './login';
import Home from './home';

StatusBar.setHidden(true);

const AppStack = createStackNavigator({
  Main,
  LogIn,
  Home
},
{
  initialRouteName: 'LogIn',
  navigationOptions: {
    header: null
  }
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppStack />
      </Provider>
    );
  }
}
