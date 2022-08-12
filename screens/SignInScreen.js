import { Dimensions, TouchableOpacity, TextInput, Text, StyleSheet, View, Platform } from 'react-native'
import React from 'react';

import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

function SignInScreen(){
    return (
      <View style={styles.container}  >
        <View style={styles.header} >
          <Text style={styles.text_header} >Bienvenue!</Text>
        </View>
        <View style={styles.footer} >
          <Text style={styles.text_footer} >Numero</Text>
          <View style={styles.action} >
              <FontAwesome 
                name='user-o'
                color='#05375a'
                size={20}
              />
              <TextInput placeholder='votre contact' autoCapitalize='none'  style={styles.textInput} />
              <Feather 
                name='check-circle'
                color='green'
                size={2}
              />
          </View>

          <Text style={[styles.text_footer, {marginTop:35}]} >Mot de passe</Text>
          <View style={styles.action} >
              <FontAwesome 
                name='lock'
                color='#05375a'
                size={20}
              />
              <TextInput placeholder='votre password' secureTextEntry={true} autoCapitalize='none'  style={styles.textInput} />
              <Feather 
                name='eye-off'
                color='grey'
                size={2}
              />
          </View>
        </View>
      </View>
    )
}
export default SignInScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#009387"
  },
  header:{
    flex:1,
    justifyContent:"flex-end",
    paddingHorizontal:20,
    paddingBottom:50
  },
  footer:{
    flex:3,
    backgroundColor:"#fff",
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingHorizontal:20,
    paddingVertical:30
  },
  text_header:{
    color:'#fff',
    fontWeight:"bold",
    fontSize:18
  },
  text_footer:{
    color:"#05375a",
    fontSize:18
  },
  action:{
    flexDirection:"row",
    marginTop:10,
    borderBottomWidth:1,
    borderBottomColor:'#f2f2f2',
    paddingBottom:5
  },
  textInput:{
    flex:1,
    marginTop:Platform.OS === 'android' ? -12 : 0,
    paddingLeft:10,
    color:"#05375a"
  },
  button:{
    alignItems:'center',
    marginTop:50
  },
  signIn:{
    width:"100%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  textSign:{
    fontSize:18,
    fontWeight:"bold"
  }
})
