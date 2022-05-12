import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={styles.signIn}>
      <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>SIGN IN</Text>
      <TextInput placeholder='  E-mail' style={styles.email}></TextInput>
      <TextInput placeholder='  password' style={styles.password}></TextInput>
      <Text style={{ color: '#BDBDBD', paddingLeft: 90, marginBottom: 5 }}>Forgot password?</Text>
    
    </View>  
  
  )
}

const styles = StyleSheet.create({
  signIn: {

    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 670,
  },
  email: {
    borderWidth: 5,
    borderColor: '#666',
    backgroundColor: '#424242',
    width: 300,
  },
  password: {
    marginVertical: 10,
    borderWidth: 5,
    borderColor: '#666',
    backgroundColor: '#424242',
    width: 300,
  },

    
})