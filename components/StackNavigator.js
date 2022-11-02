import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

function StackDetail() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home}/>
      <HomeStack.Screen name="Details" component={Detail}/>
    </HomeStack.Navigator>
  );
}
export default StackDetail;
