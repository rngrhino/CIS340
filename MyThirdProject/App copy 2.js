import React from 'react';
import {Text, View, TextInput, Image } from 'react-native';

export default function MyDog() {
  let pic = {
    uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg'};
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image source={pic}
      style={{width: 200, height: 200}}
      />
      <Text>Hello, here is my dog</Text>

     
    </View>
  );
}

