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

const OrderItem = ({item}) => (
  <View style={styles.container}>
    <View style={{flexDirection: 'row'}}>
      <Image
        style={{width: 50, height: 50}}
        source={require('../images/dot7.jpg')}
      />
      <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
        <Text style={styles.productName}>Product 01</Text>
        <Text style={styles.itemText}>Qty: 01</Text>
      </View>
    </View>

    <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
      <Text style={styles.itemText}>On the way</Text>
      <Text style={styles.price}>$40</Text>
    </View>
  </View>
);
export default OrderItem;

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
  productName: {
    fontWeight: 'bold',
    marginLeft: 15,
  },
  itemText: {
    fontWeight: '500',
    marginLeft: 15,
  },
  price: {
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
});
