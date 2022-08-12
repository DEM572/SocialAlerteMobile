import { Text, StyleSheet, View } from 'react-native'
import React from 'react';

function SignUpScreen(){
    return (
      <View style={styles.container}  >
        <Text> textInComponent </Text>
      </View>
    )
}
export default SignUpScreen;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'red'
  }
})
