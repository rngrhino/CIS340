import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.containerButton}>

      <Button
        onPress={() => {
            alert("You tapped button 1");
          }}
          title="Press Button 1"
        ></Button>

      </View>


        <View style={styles.containerLayoutButton}>

        <Button
        onPress={() => {
            alert("You tapped button 2");
          }}
          title="Press Button 2"
          color='green'
        ></Button>

        <Button
        onPress={() => {
            alert("You tapped button 3");
          }}
          title="Press Button 3"
          color='red'
        ></Button>
        </View>

       <View style={styles.containerButton}>
       <Button
        onPress={() => {
            alert("You tapped button 4");
          }}
          title="Press Button 4"
          color='black'
        ></Button>




       </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

containerButton: {
  margin: 30,
  backgroundColor: 'yellow'
},

containerLayoutButton: {
  margin: 30,
  flexDirection: 'row',
  justifyContent: 'space-between',
}


});
