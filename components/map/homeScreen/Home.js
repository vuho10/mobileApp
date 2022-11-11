import { View, Text, TextInput, SafeAreaView, TouchableOpacity, ScrollView, ScrollViewBase, FlatList } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import axios from 'axios';
import styles from '../../../styles';
import Products from '../Products'
import Category from '../Category';
import A from './aa';
import React, { useEffect, useState } from 'react';

const Home = ({ navigation }) => {

    const [products, setProducts] = useState({
        isLoaded: false,
        data: []

    });

    useEffect(() => {
        axios.get('https://61bc10c2d8542f001782453f.mockapi.io/Products-axios')
            .then((res) => {
                setProducts({
                    isLoaded: true,
                    data: res.data
                })
            })
            .catch((err) => console.log(err))
    }, [

    ])

    const renderItem = ({ item }) => (
        <ScrollView>
            <Products products_name={item.productName} products_title={item.rating} prices={item.productPrice} img={item.productImage} />
        </ScrollView>
    )

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {products.isLoaded ?
                <FlatList
                    data={products.data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />

                : <Text>LOading...</Text>}
        </View>
    )
}

export default Home;