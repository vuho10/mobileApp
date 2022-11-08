import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from '../../styles';
// import Banner from '../Banner';
import Banner from '../Banner'
import Products from '../products/Products';
import PopularProduct from '../products/PopularProduct';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* <FontAwesome5 name='home' size={40}/> */}
            <Banner
                img={require('../../img/bg.png')}
                title="Lorem ipsum dolor sit amet consectetur."
                desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, dicta."
            />
            <Text style={styles.titlePo}>Popular Product</Text>
            <ScrollView horizontal={true} >
                <TouchableOpacity onPress={() => navigation.navigate('Detail')} >
                    <Products img={require('../../img/p1.png')} starNumber={'⭐'} name='Sugar Substitute' sale={true} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                    <Products img={require('../../img/p3.png')} starNumber={'⭐'} name='Vitamins Medicines' sale={true} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                    <Products img={require('../../img/p2.png')} price={580} name='Juices & Vinegars' sale={true} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                    <Products img={require('../../img/p1.png')} starNumber={'⭐'} name='Sugar Vinegars' sale={true} />
                </TouchableOpacity>
            </ScrollView>
            <Text style={styles.allProduct}>All Products</Text>
            <ScrollView horizontal={true} >
                <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                    <PopularProduct img={require('../../img/image21.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                    <PopularProduct img={require('../../img/image22.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                    <PopularProduct img={require('../../img/image23.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Detail')}


                >
                    <PopularProduct img={require('../../img/image20.png')} />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default Home;

