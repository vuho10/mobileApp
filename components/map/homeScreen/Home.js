import { View, Text, TextInput, SafeAreaView, TouchableOpacity, ScrollView, ScrollViewBase, FlatList } from 'react-native';

import axios from 'axios';

import Products from '../Products';
import styles from '../../../styles';
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


    const handelDelete = (item) =>{
        axios.delete('https://61bc10c2d8542f001782453f.mockapi.io/Products-axios/'+item.productId)
        .then((res) => {
            setProducts({
                isLoaded: true,
                data: res.data
            })
        })

        .catch((err) => console.log(err))
    }
    const renderItem = ({ item }) => (
        <View>
            <ScrollView >

                <TouchableOpacity onPress={() => { navigation.navigate('Shop') }}>
                    <Products products_name={item.productName} products_title={item.rating} prices={item.productPrice} img={item.productImage} />

                </TouchableOpacity>

            </ScrollView>
        </View>

    )

    return (
        <ScrollView horizontal={true}>

            {products.isLoaded ?

                <FlatList
                    showsVerticalScrollIndicator={false}

                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    // data={dataLocation}
                    numColumns={2}
                    // renderItem={renderItem}
                    keyExtractor={item => item.id}


                    data={products.data}
                    renderItem={renderItem}
                />
                : <Text>LOading...</Text>
            }



        </ScrollView>
    )
}

export default Home;