/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { highlight: this.props.page };
  }
  getStyleText(name) {
    const { highlight } = this.state;
    if (name === highlight) {
      return { color: 'white', fontWeight: 'bold' };
    }
    return styles.buttonText;
  }
  gotoCuaHang() {
    this.props.closeMenu();
    const { navigation } = this.props;
    navigation.navigate('Main', { page: 'CuaHang' });
    this.setState({ highlight: 'CuaHang' });
  }
  gotoBanHang() {
    this.props.closeMenu();
    const { navigation } = this.props;
    navigation.navigate('Main', { page: 'BanHang' });
    this.setState({ highlight: 'BanHang' });
  }
  gotoKiemHang() {
    this.props.closeMenu();
    const { navigation } = this.props;
    navigation.navigate('Main', { page: 'KiemHang' });
    this.setState({ highlight: 'KiemHang' });
  }
  gotoSelfie() {
    this.props.closeMenu();
    const { navigation } = this.props;
    navigation.navigate('Main', { page: 'Selfie' });
    this.setState({ highlight: 'Selfie' });
  }
  gotoSanPhamKhac() {
    this.props.closeMenu();
    const { navigation } = this.props;
    navigation.navigate('Main', { page: 'SanPhamKhac' });
    this.setState({ highlight: 'SanPhamKhac' });
  }
  gotoLichLamViec() {
    this.props.closeMenu();
    const { navigation } = this.props;
    navigation.navigate('Main', { page: 'LichLamViec' });
    this.setState({ highlight: 'LichLamViec' });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Menu component</Text>
        <View style={{ flex: 1, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={this.gotoCuaHang.bind(this)}>
            <Text style={this.getStyleText('CuaHang')}>Cửa hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gotoBanHang.bind(this)}>
            <Text style={this.getStyleText('BanHang')}>Bán hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gotoKiemHang.bind(this)}>
            <Text style={this.getStyleText('KiemHang')}>Kiểm hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gotoSelfie.bind(this)}>
            <Text style={this.getStyleText('Selfie')}>Selfie</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gotoSanPhamKhac.bind(this)}>
            <Text style={this.getStyleText('SanPhamKhac')}>Sản phẩm khác</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gotoLichLamViec.bind(this)}>
            <Text style={this.getStyleText('LichLamViec')}>Lịch làm việc</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0078D7'
  },
  buttonText: {
    color: '#232323'
  }
});
