import React from "react";
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { View, ScrollView } from "react-native";
// import styles from './styles';
// import Path from "./components/Path";
// import Banner from './components/Banner';
// import Title from './components/Title';
// import Products from './components/Products';
// import TitlePopular from './components/TitlePopular';
// import PopularProduct from "./components/PopularProduct";
import Tabs from "./components/TabNavigation";

const App = () => (
  <NavigationContainer>
    <Tabs/>
  </NavigationContainer>

);


export default App;