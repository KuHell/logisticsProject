import React, { Component } from "react";
import { Text, View } from "react-native";
import { RNCamera } from "react-native-camera";

class Camera extends Component {
  constructor(props) {
    super(props);
    this.camera = null;
    this.state = {
      barcodeType: "",
      barcodeData: "",
    };
  }

  onBarCodeRead(scanResult) {
    console.log(scanResult.type);
    console.log(scanResult.data);
    if (scanResult.data !== null) {
      this.setState({
        barcodeType: scanResult.type,
        barcodeData: scanResult.data,
      });
    }
    return;
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          captureAudio={false}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          type={RNCamera.Constants.Type.back}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
          style={styles.preview}
        ></RNCamera>
        <View>
          <Text> Type : {this.state.barcodeType}</Text>
          <Text> Data : {this.state.barcodeData}</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  preview: {
    flex: 0.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
};

export default Camera;
