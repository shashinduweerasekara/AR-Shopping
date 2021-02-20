import React, {useState,Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
  Button,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppStack from "../navigation/AppStack";
import Config from "../assets/Config";


export default function ProductScreen({navigation}) {
  const [products, setProducts] = useState([
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
      price: 4.0,
      measure: 'Weight',
      unit: 'g',
      value: '500',
      rate: 4.9,
      img: require('../images/dot7.jpg'),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium maxime, architecto dolorem saepe rerum, magni assumenda suscipit dolore consequuntur dolorum doloremque praesentium, porro qui.',
    },
    {
      key: 'P4',
      title: 'Product4',
      price: 4.0,
      measure: 'Weight',
      unit: 'g',
      value: '500',
      rate: 4.9,
      img: require('../images/dot9.jpg'),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium maxime, architecto dolorem saepe rerum, magni assumenda suscipit dolore consequuntur dolorum doloremque praesentium, porro qui.',
    },
    {
      key: 'P5',
      title: 'Product5',
      price: 5.0,
      measure: 'Weight',
      unit: 'g',
      value: '500',
      rate: 4.9,
      img: require('../images/dot2.jpg'),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium maxime, architecto dolorem saepe rerum, magni assumenda suscipit dolore consequuntur dolorum doloremque praesentium, porro qui.',
    },
    {
      key: 'P6',
      title: 'Product6',
      price: 4.0,
      measure: 'Weight',
      unit: 'g',
      value: '500',
      rate: 4.9,
      img: require('../images/dot1.jpg'),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium maxime, architecto dolorem saepe rerum, magni assumenda suscipit dolore consequuntur dolorum doloremque praesentium, porro qui.',
    },
    {
      key: 'P7',
      title: 'Product7',
      price: 4.0,
      measure: 'Weight',
      unit: 'g',
      value: '500',
      rate: 4.9,
      img: require('../images/dot3.jpeg'),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium maxime, architecto dolorem saepe rerum, magni assumenda suscipit dolore consequuntur dolorum doloremque praesentium, porro qui.',
    },
    {
      key: 'P8',
      title: 'Product8',
      price: 4.0,
      measure: 'Weight',
      unit: 'g',
      value: '500',
      rate: 4.9,
      img: require('../images/dot4.jpg'),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium maxime, architecto dolorem saepe rerum, magni assumenda suscipit dolore consequuntur dolorum doloremque praesentium, porro qui.',
    },
    {
      key: 'P9',
      title: 'Product8',
      price: 4.0,
      measure: 'Weight',
      unit: 'g',
      value: '500',
      rate: 4.9,
      img: require('../images/dot6.jpg'),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium maxime, architecto dolorem saepe rerum, magni assumenda suscipit dolore consequuntur dolorum doloremque praesentium, porro qui.',
    },
    {
      key: 'P10',
      title: 'Product8',
      price: 4.0,
      measure: 'Weight',
      unit: 'g',
      value: '500',
      rate: 4.9,
      img: require('../images/dot5.jpg'),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium maxime, architecto dolorem saepe rerum, magni assumenda suscipit dolore consequuntur dolorum doloremque praesentium, porro qui.',
    },
  ]);
  const numColumns = 2 ;
  return (
    

   <View   style={styles.backdrop}> 
     <FlatList numColumns = {numColumns}
              data={products}
              renderItem={({item}) => (
                <TouchableOpacity
                  key={item.key}
                  style={styles.allProductItem}
                  onPress={() => navigation.navigate('Detail', item)}>
                  <View style={styles.hotProductImgContainer}>
                    <Image source={item.img} style={styles.hotProductImg} />
                  </View>
                  <Text style={styles.hotProductTitle}>{item.title}</Text>
                  <View style={styles.hotProductPriceNRate}>
                    <Text style={styles.hotProductPrice}>$ {item.price}</Text>
                    <Text style={styles.hotProductRate}>
                      <FontAwesome5
                        name={'star'}
                        style={styles.hotProductRateIcon}
                      />{' '}
                      {item.rate}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            /> 
 </View> )
}

const styles = StyleSheet.create({
  backdrop:{backgroundColor:Config.w},


  hotProductImgContainer: {
    alignItems: 'center',
      
  },

  hotProductImg: {
    resizeMode: 'contain',
    margin: 5,
    width: 130,
    height: 130,
   
  },

  hotProductTitle: {
    
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 4,
    marginRight: 4,
  },

  hotProductPriceNRate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
    marginLeft: 14,
    marginRight: 10,
  },

  hotProductPrice: {
    fontSize: 13,

  },

  hotProductRate: {
    fontSize: 13,
  
  },

  
  

  allProductItem: {
    width: 140,
  
    borderWidth: 1,
    backgroundColor:'white' ,
    width: '45%',
    marginRight :2.5,
    marginLeft:10,
    marginTop :10 ,
    borderRadius: 7.5 
  },
});