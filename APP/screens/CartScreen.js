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
import CartItem from '../components/CartItem';
import Head from '../components/Head';

const DATA = [
  {
    key: 'P1',
    title: 'Product1',
    price: 5.0,
    measure: 'Weight',
    unit: 'g',
    value: '500',
    rate: 4.9,
    img: require('../images/dot10.jpg'),
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium maxime, architecto dolorem saepe rerum, magni assumenda suscipit dolore consequuntur dolorum doloremque praesentium, porro qui.',
  },
  {
    key: 'P2',
    title: 'Product2',
    price: 4.0,
    measure: 'Weight',
    unit: 'g',
    value: '500',
    rate: 4.9,
    img: require('../images/dot8.jpg'),
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium maxime, architecto dolorem saepe rerum, magni assumenda suscipit dolore consequuntur dolorum doloremque praesentium, porro qui.',
  },
  {
    key: 'P3',
    title: 'Product3',
    price: 8,
    measure: 'Weight',
    unit: 'g',
    value: '500',
    rate: 4.9,
    img: require('../images/dot7.jpg'),
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium maxime, architecto dolorem saepe rerum, magni assumenda suscipit dolore consequuntur dolorum doloremque praesentium, porro qui.',
  },
];

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Head />
      <View style={styles.upperText}>
        <Text style={styles.itemCount}>Items ( 03 )</Text>
        <View style={styles.checkOutBtn}>
          <Text style={styles.checkOutText}> Check Out </Text>
        </View>
      </View>

      <FlatList
        data={DATA}
        renderItem={({item}) => {
          return <CartItem item={item} />;
        }}
        keyExtractor={({key}) => key}
      />
    </SafeAreaView>
  );
};
export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  upperText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  itemCount: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  checkOutBtn: {
    backgroundColor: 'darkslategrey',
    padding: 5,
    borderRadius: 10,
    marginRight: 5,
  },
  checkOutText: {
    color: 'darkseagreen',
    fontWeight: 'bold',
  },
});
