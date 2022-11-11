import react from 'react';
import { View, Text, Image, Button } from 'react-native';
// import { SearchBar } from 'react-native-screens';
// import { Button } from 'react-native-material-design';
import styles from '../../../styles';
import Maps from '../Maps';
import Products from '../Products';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Shop({ route, navigation, props }) {

  const { image } = route.params;
  const { name } = route.params;

  return (
    <View>
      <Maps/>
      <View style={styles.shop_details}>
        <Image source={image} style={styles.products_detail} />
      </View>
      <Text style={styles.name_detail}>{name}</Text>
      
      
    </View>
  );
}

export default Shop;