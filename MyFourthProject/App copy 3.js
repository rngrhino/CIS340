
import React from 'react';
import {  Text, Image, ScrollView} from 'react-native';

const dog = {
  uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg',
  width: 64,
  height: 64
};




export default myScrollViewApp = () =>  (

    <ScrollView>
      <Text style={{padding: 80, fontSize: 80}}>Try to Scroll Down</Text>
      <Image source={dog} style = {{padding: 80}}/>
     
      <Image source={require('./assets/squirrel.jpg')} style={{padding: 80}}/>
      <Image source={require('./assets/squirrel.jpg')} style={{padding: 80}}/>
      <Image source={require('./assets/squirrel.jpg')} style={{padding: 80}}/>
      <Image source={require('./assets/squirrel.jpg')} style={{padding: 80}}/>
      <Image source={require('./assets/squirrel.jpg')} style={{padding: 80}}/>
      <Image source={require('./assets/squirrel.jpg')} style={{padding: 80}}/>
      <Image source={require('./assets/squirrel.jpg')} style={{padding: 80}}/>
      <Image source={require('./assets/squirrel.jpg')} style={{padding: 80}}/>
      <Image source={require('./assets/squirrel.jpg')} style={{padding: 80}}/>
      <Image source={require('./assets/squirrel.jpg')} style={{padding: 80}}/>
      <Image source={require('./assets/squirrel.jpg')} style={{padding: 80}}/>


      <Image source={dog} style = {{padding: 80}}/>
      <Image source={dog} style = {{padding: 80}}/>
      <Image source={dog} style = {{padding: 80}}/>
      <Image source={dog} style = {{padding: 80}}/>
      <Image source={dog} style = {{padding: 80}}/>
      <Image source={dog} style = {{padding: 80}}/>
      <Image source={dog} style = {{padding: 80}}/>
      <Image source={dog} style = {{padding: 80}}/>

      <Text style={{padding: 80, fontSize: 80}}>Try to Scroll Up</Text>
    </ScrollView>

);


