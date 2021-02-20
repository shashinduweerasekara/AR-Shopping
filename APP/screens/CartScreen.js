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
    id: '6cfa6a89-fb87-476e-b0e7-b17905c545c9',
    name: 'Toy with Bells',
    description: 'Toy with bells and almost whistles!',
    price: 1850,
    currency: 'LKR',
    imageUrl:
      'https://bootcamp-mad.s3-us-west-2.amazonaws.com/product-image-5.png',
  },
  {
    id: '8585226b-0957-468f-a008-568d7ee29d94',
    name: 'Rugged bone toy',
    description: 'Rugged studded bone toy that helps clean teeth',
    price: 250,
    currency: 'LKR',
    imageUrl:
      'https://bootcamp-mad.s3-us-west-2.amazonaws.com/product-image-8.png',
  },
  {
    id: '19951441-83e8-4297-a8e9-e1633f4bf75d',
    name: 'Food Dispensor Toy',
    description: 'Chewing toy with incentive. Include treats in the toy.',
    price: 350,
    currency: 'LKR',
    imageUrl:
      'https://bootcamp-mad.s3-us-west-2.amazonaws.com/product-image-6.png',
  },
];

const CartScreen = () => {
  return (
    
    <SafeAreaView style={styles.container}>
      <Head/>
      <View style={styles.upperText}>
        <Text style={styles.itemCount}>Items ( 03 )</Text>
        <View style={styles.checkOutBtn}>
          <Text style={styles.checkOutText}> Check Out </Text>
        </View>
      </View>

      <FlatList
        data={DATA}
        renderItem={({item}) => <CartItem item={item} />}
        keyExtractor={({id}, index) => id}
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
