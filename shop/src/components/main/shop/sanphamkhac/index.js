/* @flow */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Home from './Home';
import Product from './Product';
import Sharp from '../selfie/Sharp';

const AppStack = createStackNavigator({
  Home,
  Product,
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
