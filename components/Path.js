import { View,Image,Text } from 'react-native';
import React from 'react';
import styles from '../styles';

const Path = (props) => {
    return (
        <View style={styles.pathContent}>
            <Image source={props.img} style={styles.pathImg}/>
          
            <Text style={styles.pathText}> Diabetic Diet</Text>
        </View>
    )
}
export default Path;