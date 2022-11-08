import { View, Image, Text, ScrollView } from "react-native";
import styles from "../../styles";

const Category = (props) => {
    return (
        <View style={styles.Category_container}>
            <Text style={styles.Category_name}>
                {props.Category_name}
            </Text>
            <View style={styles.Category_content}>
                <Image source={props.img} style={styles.Category_img} />
                <Text style={styles.Category_name_product}>
                    {props.Category_name_product}
                </Text>
            </View>
        </View>

    )
}
export default Category;