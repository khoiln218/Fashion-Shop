/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import ToolBar from './ToolBar';
import CuaHang from './cuahang/';
import BanHang from './banhang/';
import KiemHang from './kiemhang';
import Selfie from './selfie';
import SanPhamKhac from './sanphamkhac';
import LichLamViec from './lichlamviec';

export default class MainPage extends Component {
  getTitle(name) {
    switch (name) {
      case 'CuaHang':
        return 'CỬA HÀNG';
      case 'BanHang':
        return 'BÁN HÀNG';
      case 'KiemHang':
        return 'KIỂM HÀNG';
      case 'Selfie':
        return 'SELFIE';
      case 'SanPhamKhac':
        return 'SẢN PHẨM KHÁC';
      default:
        return 'LỊCH LÀM VIỆC';
    }
  }
  getScreen(name) {
    switch (name) {
      case 'CuaHang':
        return <CuaHang />;
      case 'BanHang':
        return <BanHang />;
      case 'KiemHang':
        return <KiemHang />;
      case 'Selfie':
        return <Selfie />;
      case 'SanPhamKhac':
        return <SanPhamKhac />;
      default:
        return <LichLamViec />;
    }
  }
  render() {
    const { page } = this.props;
    return (
      <View style={styles.container}>
        <ToolBar onOpen={this.props.openMenu} title={this.getTitle(page)} />
        {this.getScreen(page)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
