/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';

import icClock from '../../../../media/appIcon/clock-fast.png';
import icCalendar from '../../../../media/appIcon/calendar-range.png';
import icAddress from '../../../../media/appIcon/map-marker.png';

const data = [
  { id: '1', time: '06:30-18:00', date: '21/04/2018', address: 'Điện Máy Xanh, 185 CMT8, Q10' },
  { id: '2', time: '13:30-18:00', date: '21/04/2018', address: 'Điện Máy Chợ Lớn, 185 CMT8, Q10' },
  { id: '3', time: '09:30-18:00', date: '21/04/2018', address: 'Điện Máy Trần Hưng Đạo, 185 Trần Hưng Đạo, Q1' },
  { id: '4', time: '08:45-18:00', date: '21/04/2018', address: 'Điện Máy Chợ Lớn, 185 CMT8, Q10' },
  { id: '5', time: '13:30-18:00', date: '21/04/2018', address: 'Điện Máy Xanh, 185 CMT8, Q10' },
  { id: '6', time: '09:30-18:00', date: '21/04/2018', address: 'Điện Máy Trần Hưng Đạo, 185 Trần Hưng Đạo, Q1' },
  { id: '7', time: '08:45-18:00', date: '21/04/2018', address: 'Điện Máy Xanh, 185 CMT8, Q10' },
  { id: '8', time: '08:45-18:00', date: '21/04/2018', address: 'Điện Máy Chợ Lớn, 185 CMT8, Q10' },
  { id: '9', time: '09:30-18:00', date: '21/04/2018', address: 'Điện Máy Xanh, 185 CMT8, Q10' },
  { id: '10', time: '13:30-18:00', date: '21/04/2018', address: 'Điện Máy Chợ Lớn, 185 CMT8, Q10' },
  { id: '11', time: '08:45-18:00', date: '21/04/2018', address: 'Điện Máy Xanh, 185 CMT8, Q10' },
  { id: '12', time: '06:30-18:00', date: '21/04/2018', address: 'Điện Máy Xanh, 185 CMT8, Q10' },

];

export default class LichLamViec extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity style={styles.wrapper}>
                <View style={styles.row1}>
                  <View style={styles.block1}>
                    <Image source={icClock} style={styles.icon} />
                    <Text style={{ fontSize: 12, color: '#707070' }}>{item.time}</Text>
                  </View>
                  <View style={styles.block2}>
                    <Image source={icCalendar} style={styles.icon} />
                    <Text style={{ fontSize: 12, color: '#707070' }}>{item.date}</Text>
                  </View>
                </View>
                <View style={styles.row2}>
                  <Image source={icAddress} style={styles.icon} />
                  <Text>{item.address}</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.sepator} />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  wrapper: {
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  row1: {
    flexDirection: 'row',
    paddingVertical: 5
  },
  row2: {
    flexDirection: 'row'
  },
  block1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  block2: {
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 5
  },
  sepator: {
    height: 1,
    backgroundColor: '#E8E8E8'
  }
});
