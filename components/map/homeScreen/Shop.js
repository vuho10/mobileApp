import react from 'react';
import { View, Text, Image, Button } from 'react-native';

import styles from '../../../styles';
import Maps from '../Maps';


function Shop({ route, navigation, props }) {

  return (
    <View>
      <Maps/>
      <View style={styles.shop_details}>
      </View>     
      <Text>
        hello so lau ly
      </Text>
      
      
    </View>
  );
}

export default Shop;