import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.yellow}>Just Yellow text</Text>
      <Text style={styles.largeGreen}>Large green text</Text>
      <Text style={[styles.yellow, styles.largeGreen]}>Yellow Text, then Green Text</Text>
      <Text style={[styles.largeGreen, styles.yellow]}>Yellow Text, then Green Text</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({

container: {
  marginTop: 60,
},
 largeGreen:{
   color: 'green',
   fontWeight: 'bold',
   fontSize: 40,
 },

yellow: {
color: 'yellow',
fontSize: 20,
}


});