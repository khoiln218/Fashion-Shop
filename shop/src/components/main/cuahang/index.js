/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class CuaHang extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the CuaHang component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E54279'
  },
});
