/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Home extends Component {
  gotoCuaHang() {
    const { navigation } = this.props;
    navigation.navigate('Main', { page: 'CuaHang' });
  }
  gotoBanHang() {
    const { navigation } = this.props;
    navigation.navigate('Main', { page: 'BanHang' });
  }
  gotoKiemHang() {
    const { navigation } = this.props;
    navigation.navigate('Main', { page: 'KiemHang' });
  }
  gotoSelfie() {
    const { navigation } = this.props;
    navigation.navigate('Main', { page: 'Selfie' });
  }
  gotoSanPhamKhac() {
    const { navigation } = this.props;
    navigation.navigate('Main', { page: 'SanPhamKhac' });
  }
  gotoLichLamViec() {
    const { navigation } = this.props;
    navigation.navigate('Main', { page: 'LichLamViec' });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Home component</Text>
        <View style={{ flex: 1, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={this.gotoCuaHang.bind(this)}>
            <Text>Cửa hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gotoBanHang.bind(this)}>
            <Text>Bán hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gotoKiemHang.bind(this)}>
            <Text>Kiểm hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gotoSelfie.bind(this)}>
            <Text>Selfie</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gotoSanPhamKhac.bind(this)}>
            <Text>Sản phẩm khác</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gotoLichLamViec.bind(this)}>
            <Text>Lịch làm việc</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8080'
  },
});
