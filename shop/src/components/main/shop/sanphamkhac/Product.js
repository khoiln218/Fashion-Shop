/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Picker,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p1: 'tivi',
      p2: 'noi_com_dien',
      p3: 'tu_lanh',
      count1: 12,
      count2: 2,
      count3: 5
    };
  }
  goBack() {
    const { navigation } = this.props;
    navigation.goBack();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wraper}>
          <View style={styles.table}>
            <Text style={styles.headerText}>TÊN SẢN PHẨM</Text>
            <Text style={styles.headerText}>SỐ LƯỢNG</Text>
          </View>
          <View style={styles.table}>
            <View style={styles.rowL}>
              <Picker
                style={{ padding: 0, height: 40 }}
                mode="dropdown"
                selectedValue={this.state.p1}
                onValueChange={(itemValue) => this.setState({ p1: itemValue })}
              >
                <Picker.Item label="Tivi" value="tivi" />
                <Picker.Item label="Nồi cơm điện" value="noi_com_dien" />
                <Picker.Item label="Tủ lạnh" value="tu_lanh" />
              </Picker>
            </View>
            <View style={styles.rowR}>
              <Icon name='minus-circle-outline' size={30} color='#CACACA' onPress={() => this.setState({ count1: this.state.count1 - 1 })} />
              <Text>{this.state.count1}</Text>
              <Icon name='plus-circle-outline' size={30} color='#CACACA' onPress={() => this.setState({ count1: this.state.count1 + 1 })} />
            </View>
          </View>
          <View style={styles.table}>
            <View style={styles.rowL}>
              <Picker
                style={{ padding: 0, height: 40 }}
                selectedValue={this.state.p2}
                mode="dropdown"
                onValueChange={(itemValue) => this.setState({ p2: itemValue })}
              >
                <Picker.Item label="Tivi" value="tivi" />
                <Picker.Item label="Nồi cơm điện" value="noi_com_dien" />
                <Picker.Item label="Tủ lạnh" value="tu_lanh" />
              </Picker>
            </View>
            <View style={styles.rowR}>
              <Icon name='minus-circle-outline' size={30} color='#CACACA' onPress={() => this.setState({ count2: this.state.count2 - 1 })} />
              <Text>{this.state.count2}</Text>
              <Icon name='plus-circle-outline' size={30} color='#CACACA' onPress={() => this.setState({ count2: this.state.count2 + 1 })} />
            </View>
          </View>
          <View style={styles.table}>
            <View style={styles.rowL}>
              <Picker
                style={{ padding: 0, height: 40 }}
                mode="dropdown"
                selectedValue={this.state.p3}
                onValueChange={(itemValue) => this.setState({ p3: itemValue })}
              >
                <Picker.Item label="Tivi" value="tivi" />
                <Picker.Item label="Nồi cơm điện" value="noi_com_dien" />
                <Picker.Item label="Tủ lạnh" value="tu_lanh" />
              </Picker>
            </View>
            <View style={styles.rowR}>
              <Icon name='minus-circle-outline' size={30} color='#CACACA' onPress={() => this.setState({ count3: this.state.count3 - 1 })} />
              <Text>{this.state.count3}</Text>
              <Icon name='plus-circle-outline' size={30} color='#CACACA' onPress={() => this.setState({ count3: this.state.count3 + 1 })} />
            </View>
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addText}>THÊM SẢN PHẨM</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.backButton} onPress={this.goBack.bind(this)}>
            <Text style={{ color: 'white' }}>Quay Lại</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} >
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
  table: {
    flexDirection: 'row',
    padding: 5
  },
  headerText: {
    margin: 10,
    marginTop: 20,
    textAlign: 'center',
    flex: 65,
    fontWeight: 'bold'
  },
  rowL: {
    margin: 8,
    flex: 65,
    backgroundColor: '#F1F1F1',
    borderRadius: 30
  },
  rowR: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 8,
    flex: 45,
    backgroundColor: '#F1F1F1',
    borderRadius: 30
  },
  addBtn: {
    margin: 10,
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#E11933'
  },
  addText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5
  },
  wraper: {
    flex: 90
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
