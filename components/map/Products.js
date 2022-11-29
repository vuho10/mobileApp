import { View, Image, Text, ScrollView, SafeAreaView, ListViewBase } from "react-native";
import styles from "../../styles";

const Products = (props) => {
    return (
        <SafeAreaView>
            {/* <Text>{leght.length}</Text> */}
            <ScrollView style={styles.card}>
                <View style={styles.card__image}>
                    <Image source={{
                        uri: `${props.img}`,
                    }} style={styles.product_img} />
                </View>
                <View style={styles.card__copy}>
                    <Text style={styles.title1}>
                        {props.products_name}
                    </Text>
                    <Text style={styles.title2}>
                        {props.products_title}
                    </Text>
                    <Text>
                        {props.prices}  Vnđ
                    </Text>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Products;