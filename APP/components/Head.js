
import React ,{Component} from "react";
import {View, TouchableOpacity, StyleSheet,StatusBar} from 'react-native';
import Config from "../assets/Config";


export default class Head extends React.Component {
    render(){
  return (
    <View style={styles.topBar}>
     <StatusBar backgroundColor={Config.St} barStyle="light-content"/>
    </View>
  );
}
}
const styles = StyleSheet.create({
  topBar: {
    backgroundColor: Config.s1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    height:50
  }
});