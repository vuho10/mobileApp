import react from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles";
const PopularProduct = (props) => {
    return (
        <View style={styles.popularPr}>
            <Text style={styles.sales}>
                Sale
            </Text>
            <Image source={props.img} style={styles.product__img} />

            <Text>
                Accu-check Active
                Test Strip
            </Text>
            <View>
                <Text style={styles.p_prices}>
                    590
                </Text>
                <Text>

                </Text>
            </View>
        </View>
    )
}
export default PopularProduct;