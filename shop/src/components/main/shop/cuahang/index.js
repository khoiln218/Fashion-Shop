/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Text
} from 'react-native';

import icSearch from '../../../../media/appIcon/search.png';
import icAddress from '../../../../media/appIcon/map-marker.png';

const data = [
  { id: '1', name: 'Nguyễn Kim Trần Hưng Đạo', address: '60-61-62 Trần Hưng Đạo, Q1' },
  { id: '2', name: 'Điện Máy Xanh CMT8', address: '60-61-62 CMT8, Q3' },
  { id: '3', name: 'Điện Máy Chợ Lớn CMT8', address: '158 CMT8, Q3' },
  { id: '4', name: 'Điện Máy Xanh CMT8', address: '185 CMT8, Q3' },
  { id: '5', name: 'Điện Máy Chợ Lớn CMT8', address: '158 CMT8, Q3' },
  { id: '6', name: 'Điện Máy Xanh CMT8', address: '185 CMT8, Q3' },
  { id: '7', name: 'Nguyễn Kim Trần Hưng Đạo', address: '60-61-62 Trần Hưng Đạo, Q1' },
  { id: '8', name: 'Điện Máy Xanh CMT8', address: '60-61-62 CMT8, Q3' },
  { id: '9', name: 'Điện Máy Xanh CMT8', address: '185 CMT8, Q3' },
  { id: '10', name: 'Nguyễn Kim Trần Hưng Đạo', address: '60-61-62 Trần Hưng Đạo, Q1' },
  { id: '11', name: 'Điện Máy Xanh CMT8', address: '185 CMT8, Q3' },
  { id: '12', name: 'Điện Máy Xanh CMT8', address: '60-61-62 CMT8, Q3' },
];

export default class CuaHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ''
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.searchRound}>
            <TextInput
              style={styles.searchTxt}
              onChangeText={(key) => this.setState({ key })}
              placeholder="Tìm kiếm cửa hàng..."
              underlineColorAndroid="transparent"
              value={this.state.key}
            />
            <Image source={icSearch} style={styles.icon} />
          </View>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity style={styles.wrapper}>
                <View style={styles.row1}>
                  <Image source={icAddress} style={styles.icon2} />
                  <Text>{item.name}</Text>
                </View>
                <Text style={{ marginLeft: 20 }}>{item.address}</Text>
              </TouchableOpacity>
              <View style={styles.sepator} />
            </View>
          )}
        />
      </View>
    );
  }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  searchContainer: {
    height: height / 15,
    backgroundColor: '#444444'
  },
  searchRound: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#DEDEDE',
    borderColor: 'white',
    borderRadius: 20,
    margin: 7
  },
  searchTxt: {
    width: width - 60,
    fontSize: 12,
    padding: 0
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5
  },
  icon2: {
    width: 15,
    height: 15,
    marginRight: 5
  },
  sepator: {
    height: 1,
    backgroundColor: '#E8E8E8'
  },
  wrapper: {
    paddingVertical: 15,
    paddingHorizontal: 15
  }
});
