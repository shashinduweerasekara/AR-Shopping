import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import Config from '../assets/Config';
import Onboarding from 'react-native-onboarding-swiper';

export default function OnBoardingScreen({navigation}) {
  return (
    <Onboarding
      onSkip={() => navigation.replace('SignIn')}
      onDone={() => navigation.replace('SignIn')}
      pages={[
        {
          backgroundColor: Config.s2,
          image: (
            <Image
              source={require('../assets/logo.png')}
              style={styles.image}
            />
          ),
          title: 'Onboarding 1',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: Config.s3,
          image: (
            <Image
              source={require('../assets/logo.png')}
              style={styles.image}
            />
          ),
          title: 'Onboarding 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: Config.s2,
          image: (
            <Image
              source={require('../assets/logo.png')}
              style={styles.image}
            />
          ),
          title: 'Onboarding 3',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
}

const {height, width} = Dimensions.get('window');
const logo_dim = height * 0.4;

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    width: logo_dim,
    height: logo_dim,
  },
});
