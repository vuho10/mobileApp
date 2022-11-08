



import React from "react";
import { NavigationContainer } from '@react-navigation/native';
// import Tabs from './components/tabNavigation/TabNavigation'
import Tab from './components/map/Tab'
import styles from "./styles";

const App = () => (
  <NavigationContainer style={styles.container}>
   <Tab></Tab>
  </NavigationContainer>

);


export default App;