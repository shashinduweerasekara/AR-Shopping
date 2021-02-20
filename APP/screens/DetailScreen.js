import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Config from '../assets/Config';

export default function DetailScreen({route, navigation}) {
  const {title, price, img, measure, unit, value, description} = route.params;
  return (
    <SafeAreaView style={styles.productViewScreen}>
      
      <ScrollView style={styles.productViewContainer}>
        <View style={styles.productViewContent}>
          <View style={styles.productImgContainer}>
            <Image source={img} style={styles.productImg} />
          </View>
          <View style={styles.productDetails}>
            <View style={styles.titleNprice}>
              <Text style={styles.productTitle}>{title}</Text>
              <Text style={styles.productPrice}>$ {price}</Text>
            </View>
            <View style={styles.productDescriptionContainer}>
              <Text style={styles.productDescription}>{description}</Text>
            </View>
            <View>
              <View style={styles.productWnQRow}>
                <Text style={styles.productWnQ}>{measure}:</Text>
                <Text style={styles.productWnQvalue}>
                  {value} {unit}
                </Text>
              </View>
              <View style={styles.productWnQRow}>
                <Text style={styles.productWnQ}>Quantity:</Text>
                <TouchableOpacity style={styles.productQIconContainer}>
                  <FontAwesome5 name={'minus'} style={styles.productQIcon} />
                </TouchableOpacity>
                <Text style={styles.productWnQvalue}>01</Text>
                <TouchableOpacity style={styles.productQIconContainer}>
                  <FontAwesome5 name={'plus'} style={styles.productQIcon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.mainBtns}>
            <TouchableOpacity
              style={styles.addCartBtn}
              
            >
              <Text style={styles.btnText}>Add to cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buyNowBtn}
              onPress={() => console.log('Buy Now')}>
              <Text style={styles.btnText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productViewScreen: {
    flex: 1,
    backgroundColor:Config.w ,
    height: '100%',
  },

  

  productImgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
   
    
  },

  productImg: {
    resizeMode: 'contain',
    height: 200,
    width: 300,
    
  },

  productDetails: {
    marginLeft: 10,
    marginRight: 20,
  },

  titleNprice: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  productTitle: {
    fontSize: 21,
    fontWeight: 'bold',

  },
  productPrice: {
    fontSize: 21,
    color :Config.St
  },

  productDescriptionContainer: {
    marginTop: 10,
  },

  productDescription: {
    fontSize: 16,
    textAlign:'justify'
  },

  productWnQRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  productWnQ: {
    fontSize: 16,
    fontWeight: 'bold',
    
  },

  productWnQvalue: {
    fontSize: 16,
    
    marginLeft: 10,
  },

  productQIcon: {
    fontSize: 16,
    backgroundColor : Config.s1 ,
    borderRadius :Config.br,
    padding:1,
  },

  productQIconContainer: {
    
    borderRadius: 100,
    alignSelf: 'center',
    marginLeft: 10,
    padding: 5,
  },

  mainBtns: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },

  addCartBtn: {
   
    borderWidth: 2,
    borderRadius:Config.br ,
    width: 150,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },

  buyNowBtn: {
    
    borderWidth: 2,
    borderRadius:Config.br ,
    width: 150,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    backgroundColor:Config.p1
  },

  btnText: {
    fontSize: 21,
    fontWeight: 'bold',
    
  },
});