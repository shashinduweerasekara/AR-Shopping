import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProductScreen from '../screens/ProductScreen';
import DetailScreen from '../screens/DetailScreen';
import DetailS from '../screens/DetailS';
import ProductS from '../screens/ProductS';

const Stack = createStackNavigator();


const AppStack = () => {
    
return(
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Products" component={ProductScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Product" component={ProductS} />
        <Stack.Screen name="Details" component={DetailS} />
    </Stack.Navigator>
    );

};

export default AppStack;