/* @flow */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Home from './Home';
import Selfie from './Selfie';
import Sharp from './Sharp';

const AppStack = createStackNavigator({
  Home,
  Selfie,
  Sharp
},
{
  initialRouteName: 'Home',
  navigationOptions: {
    header: null
  }
});

export default class HomeSelfie extends Component {
  render() {
    return <AppStack />;
  }
}
