

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

import { View } from 'react-native'
import styles from './styles';
import React from 'react'


export default function App(){
  return (
    <View style={styles.containerViewMap}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
    </MapView>
  </View>
  )
}