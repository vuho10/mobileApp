import {
  View,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  ListViewBase,
  Button,
  TouchableOpacity,
} from 'react-native';
import styles from '../../styles';

const Product = (props, navigation) => {

  return (
    <SafeAreaView>
      {/* <Text>{leght.length}</Text> */}
      <ScrollView style={styles.card}>
        <View style={styles.card__image}>
          <Image
            source={{
              uri: `${props.img}`,
            }}
            style={styles.product_img}
          />
        </View>
        <View style={styles.card__copy}>
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <Text style={styles.title1}>{props.products_name}</Text>
          </TouchableOpacity>

          <Text style={styles.title2}>{props.products_title}</Text>
          <Text>{props.prices} Vnđ</Text>
          {/* <Button title="DELETE" onPress={handelDelete} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Product;
