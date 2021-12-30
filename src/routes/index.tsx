// In App.js in a new project

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Question from '../screens/Question';
import Answer from '../screens/Answer';

const {Navigator, Screen} = createNativeStackNavigator();

function Routes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Question" component={Question} />
      <Screen name="Answer" component={Answer} />
    </Navigator>
  );
}

export default Routes;
