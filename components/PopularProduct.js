import react from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "../styles";
const PopularProduct = (props) => {
    return (
        <ScrollView>
            <View style={styles.popularPr}>
                <Text style={styles.sales}>
                    Sale
                </Text>
                <Image source={props.img} style={styles.product__img} />

                <Text>
                    Accu-check Active
                </Text>
                <View>
                    <Text style={styles.p_prices}>
                        590
                    </Text>
                    <Text>

                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}
export default PopularProduct;