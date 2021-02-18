import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Config from '../assets/Config';

export default function GoogleBtn({btnTitle, ...rest}) {
  return (
    <TouchableOpacity
      style={[
        styles.signIn,
        {
          borderColor: Config.p2,
          borderWidth: 1,
        },
      ]}
      {...rest}>
      <Text
        style={[
          styles.textSign,
          {
            color: Config.p2,
          },
        ]}>
        {btnTitle}
      </Text>
      <Image
        style={styles.googleIcon}
        source={require('../assets/googleIcon.png')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  signIn: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Config.br,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  googleIcon: {
    resizeMode: 'contain',
    width: 35,
    height: 35,
    marginLeft: 10,
  },
});
