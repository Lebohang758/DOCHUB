import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';




export default function App() {
const[signed, setsigned]=useState(false);
  function Sign_in(){
    if(signed===false){
      setsigned(true)
    }
    else{
      setsigned(false)
    }
  }
  return (
  <View style={styles.container}>
  <StatusBar hidden/>
  {signed? <Login/> :<SignUp/>}
  <TouchableOpacity onPress={Sign_in}>
  <View style={{ backgroundColor:'blue',borderRadius:5,marginBottom:22}}>
  <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>Sign_in</Text>
  </View>
  </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
