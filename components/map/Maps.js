import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Text, TextInput, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import styles from '../../styles';
import React from 'react'
import { SearchBar } from 'react-native-screens';


export default function Maps() {


  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.containerViewMap}>

      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 16.033531404445885,
          longitude: 108.2206544489649,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation={false}
        zoomEnabled={true}
        zoomControlEnabled={true}
      >

        
        <Marker
          coordinate={{ latitude: 16.033531404445885, longitude: 108.2206544489649 }}
          description={"Vị trí của bạn ở đây nè!!!"}
        />
        



        
      </MapView>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search here"
          placeholderTextColor="#000"
          autoCapitalize="none"
          style={{ flex: 1, padding: 0 }}
        />
        <FontAwesome5
          name="search"
          size={20}
          // style={styles.bTabIcon}
        />
      </View>

      <SearchBar
       placeholder="Search"
       onChangeText={onChangeSearch}
       value={searchQuery}     
      >
      </SearchBar>
    </View>
  )
}