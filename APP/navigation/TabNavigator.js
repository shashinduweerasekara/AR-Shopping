import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import AppStack from './AppStack' ;
import CartScreen from '../screens/CartScreen' ;
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from '../screens/HomeScreen' ;



const Tab = createMaterialBottomTabNavigator()

export default function TabNavigator() {
    return (
        <Tab.Navigator 
        barStyle={{
            backgroundColor: '#455a64',
            margin: 0,
            padding: 3,
            
          }}>
            <Tab.Screen
                        name="Home"
                        component={AppStack}
                        options={{
                         
                            tabBarIcon: ({ color }) => (
                                <FontAwesome5 name="camera" color='black' size={20} />
                            ),
                        }} />
                    <Tab.Screen
                        name="Cart"
                        component={CartScreen}
                        options={{
                         
                            tabBarIcon: ({ color }) => (
                                <FontAwesome5 name="cart-plus" color='black' size={20} />
                            ),
                        }} />

                        <Tab.Screen
                        name="Profile"
                        component={ProfileScreen}
                        options={{
                         
                            tabBarIcon: ({ color }) => (
                                <FontAwesome5 name="users" color='black' size={20} />
                            ),
                        }} />
                
                    
                        
                        
        </Tab.Navigator>
    )
}