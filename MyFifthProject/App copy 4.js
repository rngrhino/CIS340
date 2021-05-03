import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
   <View style = {{flex: 1, flexDirection: 'column', marginTop: 100}}>
     <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
     <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}></View>
     <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
   </View>
  );
}
 



