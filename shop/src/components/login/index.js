/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class LogIn extends Component {
  gotoHome() {
    const { navigation } = this.props;
    navigation.navigate('Home');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the LogIn component</Text>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={this.gotoHome.bind(this)}
          >
            <Text>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#71AE30'
  },
});
