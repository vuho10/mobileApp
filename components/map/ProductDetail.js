import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// const ProductDetail = ({route, navigation}) => {
//   console.log('💩: ProductDetail -> route', route?.params);

//   // useEffect(() => {
//   //   // set lại 1 số thuộc tính của màn hình đó (vd title)
//   //   navigation.setOptions({title: 'new title'});
//   // }, []);

//   return (
//     <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
//       <Text style={{fontSize: 24}}>ProductDetail</Text>
//     </View>
//   );
// };

// export default ProductDetail;

function ProductDetail({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        {/* <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Details')}
        /> */}
      </View>
    );
  }

  export default ProductDetail;
const styles = StyleSheet.create({});
