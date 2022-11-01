import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './HomeScreen';
import Profile from './ProfileScreen';
import Detail from './Detail';
// import styles from '../styles';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>            
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Profile" component={Profile}/>
            <Tab.Screen name="Detail" component={Detail} />
        </Tab.Navigator>
     
    );
}

export default Tabs;
