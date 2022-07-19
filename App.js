import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';
import splash from './assets/757889.jpeg';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 280,
    height: 420,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

class DisplayAnImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{uri: splash}}
        />
        <Image
          style={styles.tinyLogo}
          source={{uri: 'https://kinsta.com/wp-content/uploads/2020/09/imag-file-types-1024x512.png'}}
        />
        <Image
          style={styles.logo}
          source={{uri: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
        />
      </View>
    );
  }
}

export default DisplayAnImage;