import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyMap from './homeScreen/My';
import ShopMap from './homeScreen/Shop';
import HomeMap from './homeScreen/Home';

const HomeStack = createNativeStackNavigator();

function StackDetail() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home}/>
      <HomeStack.Screen name="Shop" component={Shop}/>
      <HomeStack.Screen name="My" component={My}/>
    </HomeStack.Navigator>
  );
}
export default StackDetail;
