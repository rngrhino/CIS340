import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'//import

export default function App() {

  let openImagePickerAsync = async () => {

    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false){
      alert("Permission Required");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

  }

//end of new code

  return (
    <View style={styles.container}>

      <Image source={{uri: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-375-768x768.jpg'}}
          style = {styles.logo}>
          </Image>
  
      <Text style={styles.insts}>
        Press the button below to select an image on your phone

      </Text>

    <TouchableOpacity 
    style={styles.button}
    onPress={openImagePickerAsync}
    >

      <Text style={styles.buttonText}>Pick Image</Text>


    </TouchableOpacity>



    </View>


    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
    backgroundColor: "gray",
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#F08F99',
    padding: 20,
    borderRadius: 5
  },



  insts: {
    fontSize: 18,
    color: "#880088",
    marginHorizontal: 15,
    marginBottom: 10,


  },

  logo: {
    width: 305,
    height: 300,
    marginBottom: 20
  },

  buttonText: {
fontSize: 20,
color: "#fff"


  }



});
