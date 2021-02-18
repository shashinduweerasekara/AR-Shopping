import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Config from '../assets/Config';

export default function FormInput({
  labelValue,
  placeholderText,
  iconType,
  eyeoff,
  eye,
  ...rest
}) {
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  return (
    <View style={styles.action}>
      <Icon name={iconType} color={Config.p1} size={22} />
      <TextInput
        secureTextEntry={data.secureTextEntry ? true : false}
        value={labelValue}
        placeholder={placeholderText}
        numberOfLines={1}
        {...rest}
        placeholderTextColor={Config.s4}
        style={[
          styles.textInput,
          {
            color: Config.p2,
            fontSize: 16,
          },
        ]}
      />
      <TouchableOpacity onPress={updateSecureTextEntry}>
        {data.secureTextEntry ? (
          <Feather name={eyeoff} color="grey" size={18} />
        ) : (
          <Feather name={eye} color={Config.p1} size={18} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: Config.s4,
  },
  textInput: {
    flex: 1,
    marginTop: -12,
    paddingLeft: 10,
    color: Config.p2,
  },
});
