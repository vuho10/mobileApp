import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles';
import Banner from './Banner';
import Products from './Products';
import PopularProduct from './PopularProduct';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Banner
                img={require('../img/bg.png')}
                title="Lorem ipsum dolor sit amet consectetur."
                desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, dicta."
            />
           <Text style={styles.titlePo}>Popular Product</Text>
            <ScrollView horizontal={true} >
                <TouchableOpacity onPress={() => navigation.navigate('Detail')} >
                    <Products img={require('../img/p1.png')} starNumber={'⭐'} name='Sugar Substitute' sale={true} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                    <Products img={require('../img/p3.png')} starNumber={'⭐'} name='Vitamins Medicines' sale={true} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                    <Products img={require('../img/p2.png')} price={580} name='Juices & Vinegars' sale={true} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                    <Products img={require('../img/p1.png')} starNumber={'⭐'} name='Sugar Vinegars' sale={true} />
                </TouchableOpacity>
            </ScrollView>
            <Text style={styles.allProduct}>All Products</Text>
            <ScrollView horizontal={true} >
                <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                    <PopularProduct img={require('../img/image21.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                    <PopularProduct img={require('../img/image22.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                    <PopularProduct img={require('../img/image23.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                    <PopularProduct img={require('../img/image20.png')} />
                </TouchableOpacity>
            </ScrollView>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Detail')}
            />
        </View>
    );
}

export default Home;

