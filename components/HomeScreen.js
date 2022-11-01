import { View, Text,Button, ScrollView } from 'react-native';
import styles from '../styles';
import Banner from './Banner';
import Path from './Path';
import Title from './Title';
import Products from './Products';
import PopularProduct from './PopularProduct';
import TitlePopular from './TitlePopular';


const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Banner
                img={require('../img/bg.png')}
                title="Lorem ipsum dolor sit amet consectetur."
                desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, dicta."
            ></Banner>
            <Title title="Diabetic Diet" ></Title>
            <ScrollView horizontal={true} >

                <Products img={require('../img/p1.png')} starNumber={'⭐'} name='Sugar Substitute' sale={true} />
                <Products img={require('../img/p2.png')} price={580} name='Juices & Vinegars' sale={true} />
                <Products img={require('../img/p3.png')} starNumber={'⭐'} name='Vitamins Medicines' sale={true} />
                <Products img={require('../img/p1.png')} starNumber={'⭐'} name='Sugar ' sale={true} />
            </ScrollView>
            <TitlePopular title="All Products" />
            <ScrollView horizontal={true}>
                <PopularProduct img={require('../img/image21.png')} />
                <PopularProduct img={require('../img/image22.png')} />
                <PopularProduct img={require('../img/image23.png')} />
                <PopularProduct img={require('../img/image20.png')} />
               
            </ScrollView>
            <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Detail')}
                />
        </View>
    );
}

export default Home;

