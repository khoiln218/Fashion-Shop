/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';

import icLogo from '../../media/appIcon/ic-logo.png';
import icBanHang from '../../media/appIcon/map-marker_white.png';
import icLichLamViec from '../../media/appIcon/calendar-text_white.png';
import icSelfie from '../../media/appIcon/camera_white.png';
import icCuaHang from '../../media/appIcon/cart-outline_white.png';
import icKiemHang from '../../media/appIcon/checkbox-marked_white.png';
import icSanPhamKhac from '../../media/appIcon/dropbox_white.png';

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
  logout() {
    const { navigation } = this.props;
    navigation.goBack();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={icLogo} style={styles.logoStyle} />
        </View>
        <View style={styles.body}>
          <TouchableOpacity style={styles.itemTL} onPress={this.gotoCuaHang.bind(this)}>
            <Image source={icCuaHang} style={styles.imageStyle} />
            <Text style={{ color: 'white' }}>Cửa hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemTR} onPress={this.gotoBanHang.bind(this)}>
            <Image source={icBanHang} style={styles.imageStyle} />
            <Text style={{ color: 'white' }}>Bán hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={this.gotoKiemHang.bind(this)}>
            <Image source={icKiemHang} style={styles.imageStyle} />
            <Text style={{ color: 'white' }}>Kiểm hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={this.gotoSelfie.bind(this)}>
            <Image source={icSelfie} style={styles.imageStyle} />
            <Text style={{ color: 'white' }}>Selfie</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemBL} onPress={this.gotoSanPhamKhac.bind(this)}>
            <Image source={icSanPhamKhac} style={styles.imageStyle} />
            <Text style={{ color: 'white' }}>Sản phẩm khác</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemBR} onPress={this.gotoLichLamViec.bind(this)}>
            <Image source={icLichLamViec} style={styles.imageStyle} />
            <Text style={{ color: 'white' }}>Lịch làm việc</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.logoutBtn} onPress={this.logout.bind(this)}>
          <Text style={styles.logoutText}>ĐĂNG XUẤT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');
const itemWidth = (width - 22) / 2;
const itemHeight = (height - 200) / 3;
const scale = 382 / 132;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  body: {
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginHorizontal: 10
  },
  item: {
    width: itemWidth,
    height: itemHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E11933',
    borderWidth: 0.5,
    borderColor: '#FFFFFF'
  },
  itemTL: {
    width: itemWidth,
    height: itemHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E11933',
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    borderTopLeftRadius: 10
  },
  itemTR: {
    width: itemWidth,
    height: itemHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E11933',
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    borderTopRightRadius: 10
  },
  itemBL: {
    width: itemWidth,
    height: itemHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E11933',
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    borderBottomLeftRadius: 10
  },
  itemBR: {
    width: itemWidth,
    height: itemHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E11933',
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    borderBottomRightRadius: 10
  },
  logoutBtn: {
    margin: 10,
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#494949'
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5
  },
  logo: {
    alignItems: 'center',
    padding: 20
  },
  logoStyle: {
    padding: 10,
    margin: 5,
    height: 50,
    width: scale * 50,
    resizeMode: 'stretch',
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center'
  }
});
