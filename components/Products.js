import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../styles';

const Product = props => {
  return (
    <View style={styles.product}>
      <Image source={props.img} style={styles.product__img} />
      <View style={styles.product__content}>
        <Text
          style={(styles.product__name, styles.black)}
          numberOfLines={2}
          ellipsizeMode="tail">
          {props.name}
        </Text>
        <Text style={props.price ? styles.product__price : styles.none}>
          {props.price || ''}
        </Text>
        <Text style={props.starNumber ? styles.star : styles.none}>
          {props.starNumber || ''}
        </Text>
      </View>
      <Text style={props.sale ? styles.product__sale : styles.none}>
        {props.saleNumber || 'sale'}
      </Text>
    </View>
  );
};

export default Product;