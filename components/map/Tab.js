import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import styles from '../../styles';

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'Home') {
                        return (
                            <FontAwesome5
                                name="house-user"
                                size={size}
                                color={color}
                                style={styles.bTabIcon}

                            />

                        );
                    } else if (route.name === 'Shop') {
                        return (
                            <FontAwesome5
                                name="user"
                                size={size}
                                color={color}
                                style={styles.bTabIcon}
                            />
                        );
                    } else if (route.name === 'My') {
                        return (
                            <FontAwesome5
                                name="asterisk"
                                size={size}
                                color={color}
                                style={styles.bTabIcon}
                            />
                        );
                    }
                },

            })}
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Shop" component={Shop}/>
            <Tab.Screen name="My" component={My}/>
        </Tab.Navigator>

    );
}

export default Tabs;
