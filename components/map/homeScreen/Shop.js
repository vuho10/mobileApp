import react from 'react';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';

import styles from '../../../styles';
import Maps from '../Maps';

function Shop({route,navigation}) {
  return (
    <View>
      <Maps route={route} navigation={navigation} />
      <View style={styles.shop_details}></View>
    </View>
    // <TouchableOpacity onPress={() => navigation.goBack()} >

    // </TouchableOpacity>
  );
}

export default Shop;
