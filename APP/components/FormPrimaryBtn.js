import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Config from '../assets/Config';

export default function FormPrimaryBtn({btnTitle, ...rest}) {
  return (
    <TouchableOpacity style={styles.signIn} {...rest}>
      <Text
        style={[
          styles.textSign,
          {
            color: Config.p2,
          },
        ]}>
        {btnTitle}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Config.br,
    backgroundColor: Config.p1,
  },
  textSign: {
    fontSize: 18.72,
    fontWeight: 'bold',
  },
});
