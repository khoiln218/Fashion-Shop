/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import icPerson from '../../media/appIcon/ic_person.png';
import icPass from '../../media/appIcon/lock-question.png';
import icLogo from '../../media/appIcon/ic-logo.jpg';

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      pass: ''
    };
  }
  gotoHome() {
    const { navigation } = this.props;
    navigation.navigate('Home');
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.logo}>
            <Image source={icLogo} style={styles.logoStyle} />
          </View>
          <View style={styles.formContainer}>
            <View style={styles.formRound}>
              <Image source={icPerson} style={styles.imageStyle} />
              <TextInput
                  style={styles.textInput}
                  onChangeText={(account) => this.setState({ account })}
                  placeholder="SỐ ĐIỆN THOẠI"
                  placeholderTextColor="white"
                  underlineColorAndroid="transparent"
                  value={this.state.account}
              />
            </View>
            <View style={styles.formRoundBot}>
              <Image source={icPass} style={styles.imageStyle} />
              <TextInput
                  style={styles.textInput}
                  onChangeText={(pass) => this.setState({ pass })}
                  placeholder="MẬT KHẨU"
                  placeholderTextColor="white"
                  underlineColorAndroid="transparent"
                  secureTextEntry
                  value={this.state.pass}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={this.gotoHome.bind(this)}
          >
          <Text style={styles.loginText}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  wrapper: {
    flex: 1
  },
  loginBtn: {
    margin: 10,
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#E11933'
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5
  },
  textInput: {
    flex: 1,
    fontSize: 12,
    padding: 0
  },
  formContainer: {
    height: 125,
    backgroundColor: '#E11933',
    borderRadius: 5,
    padding: 15,
    margin: 10
  },
  formRound: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5
  },
  formRoundBot: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5
  },
  imageStyle: {
    marginHorizontal: 8,
    height: 25,
    width: 25
  },
  logo: {
    marginTop: height / 6,
    alignItems: 'center'
  },
  logoStyle: {
    padding: 10,
    margin: 5,
    height: 150,
    width: 150
  }
});
