import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TouchableButton extends Component {


    onPressButton(){
      alert("You tapped a button")
    }


  render(){
  return (
    <View style={styles.container}>
      
      <View style={styles.containerButton}>

      <Button
        onPress={this.onPressButton}
          title="Press Button 1"
        ></Button>

      </View>


        <View style={styles.containerLayoutButton}>

        <Button
       onPress={this.onPressButton}
          title="Press Button 2"
          color='green'
        ></Button>

        <Button
         onPress={this.onPressButton}
          title="Press Button 3"
          color='red'
        ></Button>
        </View>

       <View style={styles.containerButton}>
       <Button
    onPress={this.onPressButton}
          title="Press Button 4"
          color='black'
        ></Button>




       </View>


    </View>
  );
}
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
