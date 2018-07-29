/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class KiemHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soLuong: '12',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wraper}>
          <Text>TỔNG SỐ LƯỢNG</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(soLuong) => this.setState({ soLuong })}
            underlineColorAndroid="transparent"
            value={this.state.soLuong}
          />
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={{ color: 'white' }}>Quay Lại</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={{ color: 'white' }}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  wraper: {
    flex: 90,
    marginTop: 30,
    alignItems: 'center'
  },
  textInput: {
    margin: 15,
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 0,
    backgroundColor: '#F1F1F1'
  },
  bottom: {
    paddingVertical: 10,
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  backButton: {
    marginHorizontal: 15,
    borderRadius: 5,
    backgroundColor: '#494949',
    paddingVertical: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  saveButton: {
    marginHorizontal: 15,
    borderRadius: 5,
    backgroundColor: '#E11933',
    paddingVertical: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
