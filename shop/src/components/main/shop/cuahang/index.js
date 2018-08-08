/* @flow */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Home from './Home';
import Shop from './Shop';

const AppStack = createStackNavigator({
  Home,
  Shop
},
{
  initialRouteName: 'Home',
  navigationOptions: {
    header: null
  }
});

export default class HomeShop extends Component {
  render() {
    return <AppStack />;
  }
}
