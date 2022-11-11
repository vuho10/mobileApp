import { View, Text, TextInput, SafeAreaView, TouchableOpacity, ScrollView, ScrollViewBase, FlatList } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from '../../../styles';
import Products from '../Products'
import Category from '../Category';

import React from 'react';

const Home = ({ navigation }) => {

    // const ref = React.useRef(null);

    // useScrollToBôt(ref);
    return (
        <View style={styles.container__Home}>
            <View style={styles.header}>
                <Text style={styles.header_text}>Venus</Text>
                <FontAwesome5 name='bars' style={styles.header__icon} />
            </View>
            <View styles={styles.header__form}>


            </View>
            <ScrollView horizontal={true} style={styles.Category_container_scr}>
                <TouchableOpacity

                    onPress={() => {
                        navigation.navigate('Shop', {
                            image: require('../../../img/sua6.png'),
                            name: "sua tuoi",
                            latitude:'16.067998898767925',
                            longitude:'108.22119872956212',
                            // 16.067998898767925, 108.22119872956212
                            // btn:'ADD TO CART'
                        });
                    }}

                >
                    <Category img={require('../../../img/sua6.png')} Category_name='Sữa' Category_name_product='sữa tươi' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Shop', {
                        image: require('../../../img/sua7.png'),
                        name: "Sữa trân châu",
                        btn:'ADD TO CART'
                    });
                }}>
                    <Category img={require('../../../img/sua7.png')} Category_name='Sữa' Category_name_product='sữa tươi' />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Shop', {
                            image: require('../../../img/sua6.png'),
                            name: "Sữa trân châu",
                            btn:'ADD TO CART'
                        });
                    }}>
                    <Category img={require('../../../img/sua6.png')} Category_name='Sữa' Category_name_product='sữa tươi' />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Shop', {
                            image: require('../../../img/sua7.png'),
                            name: "Sữa trân châu",
                            btn:'ADD TO CART'
                        });
                    }}>
                    <Category img={require('../../../img/sua7.png')} Category_name='Sữa' Category_name_product='sữa tươi' />
                </TouchableOpacity>
            </ScrollView>
            <Text style={styles.text_buy}>WILL BUY</Text>
            <ScrollView>
                <Products img={require('../../../img/sua3.webp')} products_name='Sữa mattcha ' products_title='nguyen chat' prices='250 đ' />
                <Products img={require('../../../img/sua7.png')} products_name='trà sữa trân châu' products_title='nguyen chat' prices='250 đ' />
                <Products img={require('../../../img/sua6.png')} products_name='sữa chân châu' products_title='nguyen chat' prices='250 đ' />
                <Products img={require('../../../img/sua3.webp')} products_name=' Suawx ha lan' products_title='nguyen chat' prices='250 đ' />
                <Products img={require('../../../img/sua6.png')} products_name=' Suawx ha lan' products_title='nguyen chat' prices='250 đ' />
            </ScrollView>

        </View>
    )
}

export default Home;