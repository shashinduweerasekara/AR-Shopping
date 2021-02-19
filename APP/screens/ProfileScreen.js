import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';

export default function ProfileScreen() {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>User Email: {user.email}</Text>
      <Button title="Log Out" onPress={() => logout()} />
    </View>
  );
}
