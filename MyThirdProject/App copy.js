import React from 'react';
import {Text, View, TextInput } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hi My name is {props.name}, I am a student in CIS 340!</Text>
    </View>
  );
}

export default function MultiComp(){
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}> 
      <Text>
        Welcome to CIS 340
      </Text>
      <Student name="ryan"/>
      <Student name="john"/>
      <Student name="bob"/>
      <Student name="adam"/>

    </View>
  );
}