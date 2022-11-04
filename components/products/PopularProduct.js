import react from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "../../styles";
const PopularProduct = (props) => {
    return (
        <ScrollView>
            <View style={styles.popularPr}>
                <View style={styles.sales}>
                    <Text style={styles.textSale}>
                        Sale
                    </Text>
                </View>

                <View style={styles.card}>
                    <Image source={props.img} style={styles.product__img} />
                </View>

                <Text>
                    Accu-check Active
                </Text>
                <View>
                    <Text style={styles.p_prices}>
                        590
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}
export default PopularProduct;