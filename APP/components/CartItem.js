import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  FlatList,
  StatusBar,
  Button,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const CartItem = ({item}) => (
  <View style={styles.container}>
    <View style={{flexDirection: 'row'}}>
      <Image
        style={{width: 50, height: 50}}
        source={{
          uri: item.imageUrl,
        }}
      />
      <View style={{flexDirection: 'column'}}>
        <Text style={styles.itemText}>{item.name}</Text>
        <View style={styles.deleteBtn}>
          <Icon name="trash" size={20} color="darkgreen" />
        </View>
      </View>
    </View>

    <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
      <Text style={styles.itemText}>
        {item.currency} {item.price}
      </Text>

      <View style={{flexDirection: 'row-reverse'}}>
        <Text style={styles.icon}>
          <Icon name="plus-circle" size={20} color="darkgreen" />
        </Text>
        <Text style={styles.icon}>01</Text>
        <Text style={styles.icon}>
          <Icon name="minus-circle" size={20} color="darkgreen" />
        </Text>
      </View>
    </View>
  </View>
);
export default CartItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 5,
    borderColor: 'dimgray',
    borderWidth: 0.7,
  },
  itemText: {
    fontWeight: 'bold',
    marginLeft: 15,
  },
  deleteBtn: {
    paddingLeft: 10,
    marginLeft: 20,
    marginTop: 10,
  },
  icon: {
    padding: 2,
  },
});
