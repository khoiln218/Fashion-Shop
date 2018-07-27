/* @flow */

import React, { Component } from 'react';
import Drawer from 'react-native-drawer';

import Menu from './Menu';
import Shop from './shop';

export default class Main extends Component {
  closeControlPanel = () => {
      this.drawer.close();
  };
  openControlPanel = () => {
    this.drawer.open();
  };
  render() {
    const { navigation } = this.props;
    const page = navigation.getParam('page', 'NotFoud');
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={
          <Menu
            navigation={this.props.navigation}
            closeMenu={this.closeControlPanel} page={page}
          />
        }
        openDrawerOffset={0.3}
        type="overlay"
        tapToClose
      >
        <Shop navigation={this.props.navigation} openMenu={this.openControlPanel} page={page} />
      </Drawer>
    );
  }
}
