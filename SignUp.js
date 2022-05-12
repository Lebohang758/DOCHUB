import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function SignUp() {
  return (
    <View style={styles.signUp}>
      <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>SIGN UP</Text>
      <TextInput placeholder='   First name' style={styles.name}></TextInput>
      <TextInput placeholder='   Last name' style={styles.surname}></TextInput>
      <TextInput placeholder='   Id' style={styles.id}></TextInput>
      <TextInput placeholder='   Phone No' style={styles.phone}></TextInput>
      <TextInput placeholder='   password' style={styles.password1}></TextInput>
      

    </View>
    
  )
}

const styles = StyleSheet.create({
  signUp: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 670,
    marginVertical: 10,

  },
  name: {
    marginVertical: 10,
    borderWidth: 5,
    borderColor: '#666',
    backgroundColor: '#424242',
    width: 300,
  },
  surname: {
    marginVertical: 10,
    borderWidth: 5,
    borderColor: '#666',
    backgroundColor: '#424242',
    width: 300,
  },
  id: {
    marginVertical: 10,
    borderWidth: 5,
    borderColor: '#666',
    backgroundColor: '#424242',
    width: 300,
  },
  phone: {
    marginVertical: 10,
    borderWidth: 5,
    borderColor: '#666',
    backgroundColor: '#424242',
    width: 300,
  },
  password1: {
    marginVertical: 10,
    borderWidth: 5,
    borderColor: '#666',
    backgroundColor: '#424242',
    width: 300,
  
  },



})