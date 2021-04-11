import React from 'react';
import {Text, TextInput, View} from 'react-native';

function MyApp() {
  return (
    <View>
      <Text>
        {"\n\n\n\n\n"}
        Hello, I am a student in CIS340! {"\n"}
      </Text>
      </View>
 
  );
}

export default function Multi(){
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>
        Welcome to my Class 
      </Text>
    <MyApp/>
    <MyApp/>
    <MyApp/>
    <MyApp/>
    <MyApp/>



    </View>



  )
}
