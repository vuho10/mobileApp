import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../screen/HomeScreen';
import Home from '../screen/HomeScreen';
import Profile from '../screen/ProfileScreen';
import Detail from '../detail/Detail';
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
                    } else if (route.name === 'Profile') {
                        return (
                            <FontAwesome5
                                name="user"
                                size={size}
                                color={color}
                                style={styles.bTabIcon}
                            />
                        );
                    }else if (route.name === 'Detail') {
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

                // <FontAwesomeIcon icon="fa-sharp fa-solid fa-asterisk" />
                // tabBarInactiveTintColor:'gray',
                // tabBarActiveTintColor: 'tomato',
            })}
           
        >
             <Tab.Screen name="Home"component={Home}
             
             
             >

             </Tab.Screen>
            {/* <Tab.Screen name="Home"  /> */}
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Detail" component={Detail} />
        </Tab.Navigator>

    );
}

export default Tabs;
