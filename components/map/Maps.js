import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {Text, TextInput, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import styles from '../../styles';
import React from 'react';
import {SearchBar} from 'react-native-screens';

export default function Maps({route,navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  const { name } = route.params;
  console.log(name);
  const INITIAL_REGION = {
    latitude: 16.073403,
    longitude: 108.231151,
    latitudeDelta: 0.04,
    longitudeDelta: 0.025,
  };

  const MARKER_DATA = [
    {
      title: name,
      description: name,
      coordinate: {latitude: 16.067757, longitude: 108.230098},
    },
    {
      title: 'Store 2',
      description: 'FPT store',
      coordinate: {latitude: 16.074139, longitude: 108.231343},
    },
  ];
  return (
    <View style={styles.containerViewMap}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={INITIAL_REGION}>
        {MARKER_DATA.map(item => {
          return (
            <Marker
              key={item.title}
              title={item.title}
              description={item.description}
              coordinate={item.coordinate}
              onPress={() => {
                // navigation.navigate('ProductDetail', {headerTitle: item.title});
              }}>
              <View style={styles.marker}>
                <Text style={styles.label}>{item.title}</Text>
              </View>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
}
