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

import Main from './main';
import LogIn from './login';
import Home from './home';
import Selfie from './main/shop/selfie/Selfie';
import Sharp from './main/shop/selfie/Sharp';

StatusBar.setHidden(true);

const AppStack = createStackNavigator({
  Main,
  LogIn,
  Home,
  Selfie,
  Sharp
},
{
  initialRouteName: 'LogIn',
  navigationOptions: {
    header: null
  }
});

export default class App extends Component {
  render() {
    return <AppStack />;
  }
}
