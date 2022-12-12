import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ScrollViewBase,
  FlatList,
  Alert,
  Button,
  Image,
} from 'react-native';

import axios from 'axios';
import Product from '../Product';
import styles from '../../../styles';
import React, {useEffect, useState} from 'react';

const Home = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState({
    isLoaded: false,
    data: [],
  });

  const getProducts = () => {
    axios
      .get(`https://61bc10c2d8542f001782453f.mockapi.io/Products-axios`)
      .then(res => {
        setProducts({
          isLoaded: true,
          data: res.data,
        });
      })

      .catch(err => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const searchFilterFunction = text => {
    const newData = products.data;
    if (text !== '') {
      const data = newData.filter(item =>
        item.productName
          .toUpperCase()
          .includes(text.toUpperCase().trim().replace(/\s/g, '')),
      );
      setProducts({isLoaded: products.isLoaded, data: data});
      console.log(data);
    } else {
      getProducts();
    }
    setSearch(text);
    // console.log(products.data.filter((item)=>item.productName === text))
  };

  const renderItem = ({item, index}) => (
    <View>
      <ScrollView>
        <TouchableOpacity>
          {/* <Product
            index={index}
            id={item.id}
            products_name={item.productName}
            products_title={item.rating}
            prices={item.productPrice}
            img={item.productImage}
          /> */}

          <SafeAreaView key={index}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Details', {
                  name: item.productName,
                })
              }>
              <ScrollView style={styles.card}>
                <View style={styles.card__image}>
                  <Image
                    source={{
                      uri: `${item.productImage}`,
                    }}
                    style={styles.product_img}
                  />
                </View>
                <View style={styles.card__copy}>
                  <Text style={styles.title1}>{item.productName}77</Text>

                  <Text style={styles.title2}>{item.rating}</Text>
                  <Text>{item.productPrice} Vnđ</Text>
                </View>
              </ScrollView>
            </TouchableOpacity>
          </SafeAreaView>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Search Here"
      />
      {/* <Button
        title="Go back"
        name="Shop"
        onPress={() => navigation.navigate('Details')}
      /> */}
      <ScrollView horizontal={true} style={styles.content}>
        {products.isLoaded ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            numColumns={2}
            keyExtractor={item => item.id}
            data={products.data}
            renderItem={renderItem}
          />
        ) : (
          <Text>LOading...</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
