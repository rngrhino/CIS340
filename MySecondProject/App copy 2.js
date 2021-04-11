import React from 'react';
import {Text} from 'react-native';

export default function App() {

function getFullName(fname, mname, lname){
  return fname + " " + mname + " " + lname;
}

  const pet = "Dog";
  return (
 
      <Text>
        {"\n\n\n\n\n\n\n\n"}
        hello, I am a student in CIS340! {"\n"}
        My Full name is {getFullName("ryan", "jay", "schemmel")}
        {"\n"}
        I have a {pet}!

      </Text>
     
 
  );
}

