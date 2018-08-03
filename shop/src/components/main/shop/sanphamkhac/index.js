/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import icArrow from '../../../../media/appIcon/chevron-right.png';

export default class SanPhamKhac extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.wrapper}>
            <View style={styles.left}>
              <Icon style={{ margin: 12 }} name='camera' size={30} color='#000000' />
              <Text style={{ fontSize: 18 }}>UPLOAD HÌNH ẢNH QUẦY HÀNG</Text>
            </View>
            <Image source={icArrow} style={{ width: 48, height: 48 }} />
          </View>
          <View style={{ height: 1, backgroundColor: '#F1F1F1' }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.wrapper}>
            <View style={styles.left}>
              <Icon style={{ margin: 12 }} name='dropbox' size={30} color='#000000' />
              <Text style={{ fontSize: 18 }}>THÔNG TIN SẢN PHẨM KHÁC</Text>
            </View>
            <Image source={icArrow} style={{ width: 48, height: 48 }} />
          </View>
          <View style={{ height: 1, backgroundColor: '#F1F1F1' }} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
