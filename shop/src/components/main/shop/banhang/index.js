/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity
} from 'react-native';

import icSearch from '../../../../media/appIcon/search.png';
import icArrow from '../../../../media/appIcon/chevron-right.png';

const data = [
  { id: '1', name: 'Điện tử(AV)' },
  { id: '2', name: 'Điện lạnh(HV)' },
  { id: '3', name: 'Điện gia dụng' }
];

export default class BanHang extends Component {
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
              placeholder="Tìm kiếm sản phẩm..."
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
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15 }}>
                <Text style={{ fontSize: 20, marginLeft: 15 }}>{item.name}</Text>
                <Image source={icArrow} style={{ width: 48, height: 48 }} />
              </View>
              <View style={{ height: 1, backgroundColor: '#F1F1F1' }} />
            </TouchableOpacity>
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
  }
});
