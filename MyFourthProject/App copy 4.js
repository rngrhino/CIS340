
import React from 'react';
import {  Text, View, FlatList} from 'react-native';



export default myStatesApp = () =>  {
  return(
    <View style={{flex: 1, paddingTop: 22}}>

    <FlatList
      data={[
        {key: "Alabama"},
        {key: "Alaska"},
        {key: "Arkansas"},
        {key: "Arizona"},
        {key: "California"},
        {key: "Colorado"},
        {key: "Deleware"},
        {key: "Flordia"},
        {key: "Ohio"},
        {key: "New York"},
        {key: "Iowa"},
        {key: "Kansas"},
        {key: "Michigan"},
        {key: "Washington"},
        {key: "Nevada"}
       ]}
renderItem={({item}) => <Text style={{padding: 80, fontSize: 40, height: 44}}> {item.key} </Text>}

/>
</View>
 
  )
};


