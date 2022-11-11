import { View, Image, Text } from "react-native";
import styles from "../../styles";

const Products = (props) => {
    return (
        <View style={styles.products_container}>
            <View style={styles.product_content}>
                <Image source={{
                    uri: `${props.img}`,
                }} style={styles.product_img} />
            </View>
            <View>
                <Text>
                    {props.products_name}
                </Text>
                <Text>
                    {props.products_title}
                </Text>
            </View>
            <Text style={styles.products_prices}>
                {props.prices}
            </Text>
        </View>
    )
}
export default Products;