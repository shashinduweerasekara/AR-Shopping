import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text ,StyleSheet,Image} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AppStack from "../navigation/AppStack";


const HomeScreen = ({navigation}) => {
 return(
    <View >
        
      
      <View style={styles.container} >
        
        <Image  style={styles.image} source={require('../images/testlast.png')}/>

        <TouchableOpacity onPress={() => navigation.navigate('Products')}>
            <FontAwesome5 name={'qrcode'} style={styles.icon}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Product')}>
            <Text style={styles.text}>Skip for now</Text>
        </TouchableOpacity>

      </View>

    </View>
  );

}
const styles = StyleSheet.create(
{
  container :{ alignItems:"center" ,justifyContent :"center"},
  text :{fontSize:18},
  image:{width:"70%", height: 350, marginTop : 20 ,borderRadius:10 , borderColor:'black',borderWidth :1},
  icon :{fontSize: 50,marginTop:10,marginBottom:10,}
}
);
export default HomeScreen ;