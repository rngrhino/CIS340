
import React from 'react';
import {  Text, View, SectionList} from 'react-native';



export default myStatesApp = () =>  {
  return(
    <View style={{flex: 1, paddingTop: 22}}>

    <SectionList
     sections={[
      {title: 'A', data: ['Alabama', 'Alaska', 'Arkansas','Arizona']},
      {title: 'C', data: ['California', 'Colorado','Connecticut',]},
      {title: 'D', data: ['Delaware']},
      {title: 'F', data: ['Florida']}


     ]}
renderItem={({item}) => <Text style={{padding: 80, fontSize: 40, height: 44}}> {item} </Text>}
renderSectionHeader={({section}) => <Text style={{paddingTop: 5, paddingLeft: 10, 
paddingRight: 10, paddingBottom: 5, fontSize: 15, fontWeight: 'bold', backgroundColor: 'red'}}>
{section.title}</Text>}
keyExtractor={(item,index) => index}

/>
</View>
 
  )
};


