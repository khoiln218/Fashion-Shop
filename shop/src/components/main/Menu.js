/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

import icMenu from '../../media/appIcon/ic_menu.png';
import icCuaHang from '../../media/appIcon/map-marker.png';
import icLichLamViec from '../../media/appIcon/calendar-text.png';
import icSelfie from '../../media/appIcon/camera.png';
import icBanHang from '../../media/appIcon/cart-outline.png';
import icKiemHang from '../../media/appIcon/checkbox-marked.png';
import icSanPhamKhac from '../../media/appIcon/dropbox.png';
import profileIcon from '../../media/asset/profile.png';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { highlight: this.props.page };
  }
  getStyleText(name) {
    const { highlight } = this.state;
    if (name === highlight) {
      return { color: 'white' };
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
    const { wrapper, row1, left, iconStyle, titleStyle, profile, profileContainer } = styles;
    return (
      <View style={styles.container}>
        <View style={wrapper}>
          <View style={row1}>
            <View style={left}>
              <Image source={icMenu} style={iconStyle} />
              <Text style={titleStyle}>MENU</Text>
            </View>
          </View>
        </View>
        <View style={profileContainer}>
          <Image source={profileIcon} style={profile} />
          <Text style={{ color: 'white' }}>MS.90998</Text>
        </View>
        <TouchableOpacity style={styles.item} onPress={this.gotoBanHang.bind(this)}>
          <Image source={icCuaHang} style={styles.imageStyle} />
          <Text style={this.getStyleText('BanHang')}>BÁN HÀNG</Text>
        </TouchableOpacity>
        <View style={{ height: 1, backgroundColor: '#1B1B1B' }} />
        <TouchableOpacity style={styles.item} onPress={this.gotoCuaHang.bind(this)}>
          <Image source={icBanHang} style={styles.imageStyle} />
          <Text style={this.getStyleText('CuaHang')}>CỬA HÀNG</Text>
        </TouchableOpacity>
        <View style={{ height: 1, backgroundColor: '#1B1B1B' }} />
        <TouchableOpacity style={styles.item} onPress={this.gotoSelfie.bind(this)}>
          <Image source={icSelfie} style={styles.imageStyle} />
          <Text style={this.getStyleText('Selfie')}>SELFIE</Text>
        </TouchableOpacity>
        <View style={{ height: 1, backgroundColor: '#1B1B1B' }} />
        <TouchableOpacity style={styles.item} onPress={this.gotoKiemHang.bind(this)}>
          <Image source={icKiemHang} style={styles.imageStyle} />
          <Text style={this.getStyleText('KiemHang')}>KIỂM HÀNG</Text>
        </TouchableOpacity>
        <View style={{ height: 1, backgroundColor: '#1B1B1B' }} />
        <TouchableOpacity style={styles.item} onPress={this.gotoSanPhamKhac.bind(this)}>
          <Image source={icSanPhamKhac} style={styles.imageStyle} />
          <Text style={this.getStyleText('SanPhamKhac')}>SẢN PHẨM KHÁC</Text>
        </TouchableOpacity>
        <View style={{ height: 1, backgroundColor: '#1B1B1B' }} />
        <TouchableOpacity style={styles.item} onPress={this.gotoLichLamViec.bind(this)}>
          <Image source={icLichLamViec} style={styles.imageStyle} />
          <Text style={this.getStyleText('LichLamViec')}>LỊCH LÀM VIỆC</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818'
  },
  buttonText: {
    color: '#4C4C4C'
  },
  wrapper: {
    height: height / 15,
    backgroundColor: '#E11933',
    padding: 10,
    justifyContent: 'space-around'
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  left: {
    flexDirection: 'row',
  },
  titleStyle: {
    color: '#FFF',
    fontSize: 12,
    marginLeft: 10
  },
  iconStyle: {
    width: 20,
    height: 20
  },
  profileContainer: {
      backgroundColor: '#E11933',
      alignItems: 'center',
      paddingVertical: 30
  },
  profile: {
      width: 100,
      height: 100,
      borderRadius: 60,
      marginBottom: 10
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 15,
    marginLeft: 8
  },
  imageStyle: {
    height: 25,
    width: 25,
    marginRight: 12
  }
});
