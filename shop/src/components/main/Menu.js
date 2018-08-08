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
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { loadAvatar } from '../../redux/action';

import icMenu from '../../media/appIcon/ic_menu.png';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { highlight: this.props.page };
  }
  componentDidMount() {
    this.props.loadAvatar();
  }
  getStyleText(name) {
    const { highlight } = this.state;
    if (name === highlight) {
      return { color: 'white' };
    }
    return styles.buttonText;
  }
  getColorImage(name) {
    const { highlight } = this.state;
    if (name === highlight) {
      return '#FFFFFF';
    }
    return '#4C4C4C';
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
    const { avatar } = this.props;
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
          <Image source={avatar} style={profile} />
          <Text style={{ color: 'white' }}>MS.90998</Text>
        </View>
        <TouchableOpacity style={styles.item} onPress={this.gotoBanHang.bind(this)}>
          <Icon style={{ marginRight: 12 }} name='map-marker' size={25} color={this.getColorImage('BanHang')} />
          <Text style={this.getStyleText('BanHang')}>BÁN HÀNG</Text>
        </TouchableOpacity>
        <View style={{ height: 1, backgroundColor: '#1B1B1B' }} />
        <TouchableOpacity style={styles.item} onPress={this.gotoCuaHang.bind(this)}>
          <Icon style={{ marginRight: 12 }} name='cart-outline' size={25} color={this.getColorImage('CuaHang')} />
          <Text style={this.getStyleText('CuaHang')}>CỬA HÀNG</Text>
        </TouchableOpacity>
        <View style={{ height: 1, backgroundColor: '#1B1B1B' }} />
        <TouchableOpacity style={styles.item} onPress={this.gotoSelfie.bind(this)}>
          <Icon style={{ marginRight: 12 }} name='camera' size={25} color={this.getColorImage('Selfie')} />
          <Text style={this.getStyleText('Selfie')}>SELFIE</Text>
        </TouchableOpacity>
        <View style={{ height: 1, backgroundColor: '#1B1B1B' }} />
        <TouchableOpacity style={styles.item} onPress={this.gotoKiemHang.bind(this)}>
          <Icon style={{ marginRight: 12 }} name='checkbox-marked' size={25} color={this.getColorImage('KiemHang')} />
          <Text style={this.getStyleText('KiemHang')}>KIỂM HÀNG</Text>
        </TouchableOpacity>
        <View style={{ height: 1, backgroundColor: '#1B1B1B' }} />
        <TouchableOpacity style={styles.item} onPress={this.gotoSanPhamKhac.bind(this)}>
          <Icon style={{ marginRight: 12 }} name='dropbox' size={25} color={this.getColorImage('SanPhamKhac')} />
          <Text style={this.getStyleText('SanPhamKhac')}>SẢN PHẨM KHÁC</Text>
        </TouchableOpacity>
        <View style={{ height: 1, backgroundColor: '#1B1B1B' }} />
        <TouchableOpacity style={styles.item} onPress={this.gotoLichLamViec.bind(this)}>
          <Icon style={{ marginRight: 12 }} name='calendar-text' size={25} color={this.getColorImage('LichLamViec')} />
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
    alignItems: 'center',
    justifyContent: 'center'
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
      paddingVertical: 15
  },
  profile: {
      width: 100,
      height: 100,
      borderRadius: 60,
      marginBottom: 10
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    marginLeft: 8
  },
  imageStyle: {
    height: 25,
    width: 25,
    marginRight: 12
  }
});

function mapStateToProps(state) {
  return {
    avatar: state.avatar.avatar
  };
}

export default connect(mapStateToProps, { loadAvatar })(Menu);
