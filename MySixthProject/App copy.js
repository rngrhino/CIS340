import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

const csuLogo = {
  uri: "https://i.pinimg.com/originals/f1/53/5f/f1535f79f6e5868f6284048755f86139.gif",
};


  return (
    <View style={styles.container}>
     
      <Image
        style={styles.localCSULogo}
        source={require('./assets/logo.png')}
      />

      <Image
        style={styles.urlCSULogo}
        source={{uri:
       "https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-375-768x768.jpg"}}
      />

      <Image 
      style= {styles.stretchLogo}
        source={csuLogo}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 paddingTop: 60
  },

localCSULogo:{
  width: 55,
  height: 65,

},


urlCSULogo:{
  width: 50,
  height: 50,
},

stretchLogo: {
  
  height: 200,
  resizeMode: 'center'
}


});
