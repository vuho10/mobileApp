import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Text, View } from 'react-native'
import styles from '../../styles';
import React from 'react'


export default function Maps() {

  return (
    <View style={styles.containerViewMap}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 16.060046722288888,
          longitude: 108.24350179376482,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation={false}
        zoomEnabled={true}
        zoomControlEnabled={true}
      >
        <Marker 
          coordinate={{ latitude: 16.060046722288888, longitude:108.24350179376482 }}  
           
          description={"Vị trí của bạn ở đây nè!!!"}         
        >
          
        </Marker>
      </MapView>
    </View>
  )
}