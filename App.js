import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";



// const imageBanner = { uri:'./img/Mask Group.png' };

const App = () => (
  <View>
    <View style={styles.pathContent}>
      <ImageBackground
        source={require('./img/Group1156.png')}
        style={styles.path}
      >
      </ImageBackground>
      <Text style={styles.pathText}>Diabetes Care</Text>

    </View>
    <View style={styles.banner}>
      <ImageBackground source={require('./img/MaskGroup.png')} style={styles.logoBanner}>
        <Text style={styles.text}>Save extra on every order</Text>
        <Text>Etiam mollis metus non faucibus sollicitudin. </Text>
      </ImageBackground>
    </View>
  </View>

);

const styles = StyleSheet.create({
  pathContent: {
    paddingTop: 10,
    flexDirection: "row",

  },
  pathText: {
    marginLeft: 20,
  },
  path: {
    width: 24,
    height: 24,

    padding: 10,
  },
  banner: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,

  },
  logoBanner: {
    width: 380,
    height: 140,
    resizeMode: "cover"

    // flex:1,


  },

});

export default App;