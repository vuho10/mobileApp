import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import styles from '../../styles';
import Home from './homeScreen/Home';
import My from './homeScreen/My';
import Shop from './homeScreen/Shop';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          if (route.name === 'Home') {
            return (
              <FontAwesome5
                name="house-user"
                size={size}
                color={color}
                style={styles.bTabIcon}
              />
            );
          } else if (route.name === 'Details') {
            return (
              <FontAwesome5
                name="shopping-bag"
                size={size}
                color={color}
                style={styles.bTabIcon}
              />
            );
          } else if (route.name === 'My') {
            return (
              <FontAwesome5
                name="user-shield"
                size={size}
                color={color}
                style={styles.bTabIcon}
              />
            );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Details" component={Shop} />
      <Tab.Screen name="My" component={My} />
    </Tab.Navigator>
  );
}

export default Tabs;
