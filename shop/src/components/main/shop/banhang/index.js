/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Dimensions
} from 'react-native';

import icSearch from '../../../../media/appIcon/search.png';

export default class BanHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ''
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.searchRound}>
            <TextInput
              style={styles.searchTxt}
              onChangeText={(key) => this.setState({ key })}
              placeholder="Tìm kiếm sản phẩm"
              underlineColorAndroid="transparent"
              value={this.state.key}
            />
            <Image source={icSearch} style={styles.icon} />
          </View>
        </View>
        <Text>I'm the BanHang component</Text>
      </View>
    );
  }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#295381'
  },
  searchContainer: {
    height: height / 15,
    backgroundColor: '#444444'
  },
  searchRound: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#DEDEDE',
    borderColor: 'white',
    borderRadius: 20,
    margin: 7
  },
  searchTxt: {
    width: width - 60,
    fontSize: 12,
    padding: 0
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10
  }
});
