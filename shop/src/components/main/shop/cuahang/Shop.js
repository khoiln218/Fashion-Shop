/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Shop extends Component {
  goBack() {
    const { navigation } = this.props;
    navigation.goBack();
  }
  render() {
    const { navigation } = this.props;
    const shop = navigation.getParam('shop', {});
    return (
      <View style={styles.container}>
        <View style={{ flex: 88 }}>
          <View style={styles.formContainer}>
            <Icon style={{ padding: 25 }} name='warning' size={65} color='#FFFFFF' />
            <Text style={styles.text}>VUI LÒNG XÁC NHẬN</Text>
            <Text style={styles.text}>BẠN SẼ LÀM VIỆC TẠI CỬA HÀNG</Text>
            <View style={styles.sepator} />
            <Text style={styles.name}>{shop.name}</Text>
            <Text style={styles.text}>{shop.address}</Text>
          </View>
          <TouchableOpacity style={styles.startBtn} >
            <Text style={styles.startText}>BẮT ĐẦU LÀM VIỆC</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 12 }}>
          <TouchableOpacity style={styles.backBtn} onPress={this.goBack.bind(this)}>
            <Text style={styles.backText}>QUAY LẠI</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    marginHorizontal: 10,
    marginTop: 50,
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#E11933',
    alignItems: 'center'
  },
  sepator: {
    margin: 20,
    height: 1,
    width: width - 150,
    backgroundColor: '#FFFFFF'
  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  name: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  startBtn: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#E11933'
  },
  startText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5
  },
  backBtn: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#474747'
  },
  backText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5
  }
});
