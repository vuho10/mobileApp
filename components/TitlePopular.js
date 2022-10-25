import React from "react";
import { View,Text } from "react-native";
import styles from '../styles';
const TitlePopular = (props) => {
    return (
            <Text style={styles.title_popular} >{props.title}</Text>      
    )
}
export default TitlePopular;