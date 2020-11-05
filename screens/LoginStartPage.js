import React from 'react';
import { View, StyleSheet, Image} from 'react-native';

import {Button, Text} from 'native-base';

export default function LoginStartPage({navigation}) {

  return (
    <View style={styles.Logincontainer}>
      <View style={styles.container} >
          <View>
        <Image 
        style= {{width:150, height:150}} 
        source={require('./assets/logo.png')}/> 
          <Text style={ styles.manttoText }>Mantto</Text>
            <Text style={ styles.manttoText2}>열정과 재능을 잇다. 만또</Text>
          </View>
          <View style={ styles.loginButton }>
            <Button title="로그인"  color="#80BFD7" style={ styles.loginButton }><Text style={{color: '#ffffff'}}>로그인</Text></Button>
          </View>
          <View style={ styles.signupButton}>
            <Button title="회원가입" 
              color="#FFFFFF" 
              style={ styles.signupButton}
              onPress={()=>navigation.navigate('SignupFirstPage')}
            >
              <Text style={{color: "#80BFD7"}}>회원가입</Text>
            </Button>
          </View>
      </View>
    </View>
  )
};



const styles = StyleSheet.create({
  
  manttoText:{
      color:"#80BFD7",
      fontSize:40,
      margin:10,
      

  },
   manttoText2:{
     marginTop:10,
     marginBottom:30,
     color:"black"
   },
  container: {
    alignItems:'center',
    justifyContent:"center",
    paddingTop : 100
    
  },
  loginButton: {
    width: 277,
    height: 51,
    borderWidth:1,
    borderRadius: 25,
    borderColor:"#80BFD7",
    backgroundColor: "#80BFD7",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10
    
  },
  signupButton: {
    width: 277,
    height: 51,
    borderWidth:1,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    borderColor:"#80BFD7",
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  }
});
 