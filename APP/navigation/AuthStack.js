import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-community/google-signin';

import OnBoardingScreen from '../screens/OnBoardingScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });

    GoogleSignin.configure({
      webClientId:
        '327203487112-e8bb8legh5db1bce4lfnf9eq1be6n6fg.apps.googleusercontent.com',
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'OnBoarding';
  } else {
    routeName = 'SignIn';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="OnBoarding"
        component={OnBoardingScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{header: () => null}}
      />
      <Stack.Screen name="Home" component={CartScreen} />
    </Stack.Navigator>
  );
}
