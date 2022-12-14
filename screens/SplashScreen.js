import { Dimensions, TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable'


function SplashScreen({navigation}){
    return (
      <View style={styles.container}>
        <View style={styles.header} >
            <Animatable.Image animation='zoomIn' duration={2000} style={styles.logo} resizeMode='stretch' source={require('../assets/socialalerte.png')}/>
        </View>
        < Animatable.View animation='fadeInUpBig' style={styles.footer} >
            <Text style={styles.title} >Vous pouvez sauver des vies</Text>
            <Text style={styles.text} >Connectez-vous a votre compte</Text>

            <View style={styles.button} >
              <TouchableOpacity onPress={()=>navigation.navigate("Connexion")} >
                  <LinearGradient
                    colors={["#08d4c4", "#01ab9d"]}
                    style={styles.signIn}
                  >
                    <Text style={styles.textSign} >Commencez!</Text>
                  </LinearGradient>
              </TouchableOpacity>
            </View>

        </Animatable.View>
      </View>
    )
}
export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#009387'
    },
    header:{
        flex:2,
        justifyContent:"center",
        alignItems:"center"
    },
    footer:{
        flex:1,
        backgroundColor:"#fff",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30
    },
    logo:{
        width:height_logo,
        height:height_logo
    },
    title:{
        color:'#05375a',
        fontSize:30,
        fontWeight:'bold'
    },
    text:{
        color:'grey',
        marginTop:5
    },
    button:{
        alignItems:'flex-end',
        marginTop:50,
    },
    signIn:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:"center",
        borderRadius:50,
        flexDirection:"row"
    },
    textSign:{
        color:"white",
        fontWeight:"bold"
    },

})