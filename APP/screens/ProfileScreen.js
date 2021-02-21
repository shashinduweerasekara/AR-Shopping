import React, {useContext} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Head from '../components/Head';
import {AuthContext} from '../navigation/AuthProvider';
import OrderItem from '../components/OrderItem';
export default function ProfileScreen() {
  const {user, logout} = useContext(AuthContext);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Head />
      <ScrollView>
        <View style={styles.userInfo}>
          <Image
            style={styles.userImg}
            source={require('../images/shashidu.jpg')}
          />
          <Text style={styles.userName}>User Name</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => logout()}>
              <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.myOrders}>My Orders</Text>
        <View style={styles.orderContainer}>
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  userInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderColor: 'black',
    borderWidth: 0.7,
  },
  userName: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  orderContainer: {
    marginBottom: 30,
  },
  button: {
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    fontWeight: '900',
    fontSize: 20,
  },
  myOrders: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 20,
  },
});
