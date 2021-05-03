import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

const csuLogo = {
  uri: "https://i.pinimg.com/originals/f1/53/5f/f1535f79f6e5868f6284048755f86139.gif",
};


  return (
    <View style={styles.container}>
     <ImageBackground source={csuLogo}
     style={styles.image}>

<Text style={styles.text}>CSU logo</Text>
    
    
     </ImageBackground>

     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
flexDirection: "column",
  },

image:{
  flex: 1,
 resizeMode: "cover",
 justifyContent: "center"

},


text:{
  color: "red",
  fontSize: 40,
  fontWeight: 'bold'
},




});
