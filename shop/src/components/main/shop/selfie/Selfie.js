/* @flow */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { connect } from 'react-redux';

import { updateAvatar } from '../../../../redux/action';

import saveAvatar from '../../../../api/saveAvatar';

class Selfie extends React.Component {
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.2, base64: true };
      const data = await this.camera.takePictureAsync(options);
      saveAvatar(data.base64);
      this.props.updateAvatar(data.base64);
    }
  };
  goBack() {
    const { navigation } = this.props;
    navigation.goBack();
  }
  render() {
      return (
      <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
      >
        <View style={styles.wraper} />
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.backButton} onPress={this.goBack.bind(this)}>
            <Text style={{ color: 'white' }}>Quay Lại</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={this.takePicture.bind(this)}>
            <Text style={{ color: 'white' }}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </RNCamera>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
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

export default connect(null, { updateAvatar })(Selfie);
