import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Config from '../assets/Config';
import FormInput from '../components/FormInput';
import FormPrimaryBtn from '../components/FormPrimaryBtn';
import GoogleBtn from '../components/GoogleBtn';
import {AuthContext} from '../navigation/AuthProvider';

export default function SignInScreen({navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register, googleLogin} = useContext(AuthContext);
  return (
    <View>
      <StatusBar backgroundColor={Config.w} barStyle="dark-content" />
      <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
        <View style={styles.form}>
          <Text
            style={{
              color: Config.p2,
              fontSize: 18.72,
            }}>
            Email
          </Text>
          <FormInput
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            placeholderText="Your Email"
            iconType="mail-outline"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text
            style={[
              {
                color: Config.p2,
                marginTop: 20,
                fontSize: 18.72,
              },
            ]}>
            Password
          </Text>
          <FormInput
            labelValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            placeholderText="Your Password"
            iconType="lock-outline"
            eyeoff="eye-off"
            eye="eye"
          />
          <Text
            style={[
              {
                color: Config.p2,
                marginTop: 20,
                fontSize: 18.72,
              },
            ]}>
            Confirm Password
          </Text>
          <FormInput
            labelValue={confirmPassword}
            onChangeText={(userConfirmPassword) =>
              setConfirmPassword(userConfirmPassword)
            }
            placeholderText="Confirm Password"
            iconType="lock-outline"
            eyeoff="eye-off"
            eye="eye"
          />
        </View>
        <View style={styles.buttons}>
          <FormPrimaryBtn
            btnTitle="Sign Up"
            onPress={() => register(email, password)}
          />
          <Text
            style={{
              alignSelf: 'center',
              color: Config.s4,
              fontSize: 16,
              marginVertical: 10,
              fontStyle: 'italic',
            }}>
            or
          </Text>
          {Platform.OS === 'android' ? (
            <GoogleBtn btnTitle="Sign Up with " onPress={() => googleLogin()} />
          ) : null}
        </View>
        <View style={styles.authFooter}>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text
              style={{
                alignSelf: 'center',
                color: Config.p2,
                fontSize: 18.72,
              }}>
              Have an account? <Text style={{color: Config.p1}}>Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const {height, width} = Dimensions.get('window');
const logo_dim = height * 0.2;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: Config.w,
    height: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: height * 0.05,
  },
  logo: {
    resizeMode: 'contain',
    width: logo_dim,
    height: logo_dim,
  },

  userOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  buttons: {
    marginVertical: 30,
  },
  authFooter: {
    alignItems: 'center',
  },
});
