import React from "react";
import { View,ScrollView } from "react-native";
import styles from './styles';
import Banner from './components/Banner';
import Title from './components/Title';
import Products from './components/Products';

const App = () => (

  <View style={styles.container}>
  <Banner 
    img={require('./img/bg.png')}
    title="Lorem ipsum dolor sit amet consectetur."
    desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, dicta."
    />
  <Title title="Diabetic Diet" />
  <ScrollView horizontal={true} style={styles.slider}>
    <Products img={require('./img/MaskGroup.png')} starNumber={'⭐' + 4} price={234} name='what you know about' sale={true}/>
    <Products img={require('./img/MaskGroup.png')} starNumber={'⭐' + 4} price={234} name='what you know about' sale={true}/>
    <Products img={require('./img/MaskGroup.png')} starNumber={'⭐' + 4} price={234} name='what you know about' sale={true}/>
    <Products img={require('./img/MaskGroup.png')} starNumber={'⭐' + 4} price={234} name='what you know about' sale={true}/>
  </ScrollView>
</View>
  // <View style={styles.container}>
  //   <View style={styles.pathContent}>
  //     <ImageBackground
  //       source={require('./img/Group1156.png')}
  //       style={styles.pathImg}
  //     >
  //     </ImageBackground>
  //     <Text style={styles.pathText}>Diabetes Care</Text>
  //   </View>

  //   <View style={styles.banner}>
  //     <ImageBackground source={require('./img/bg.png')} style={styles.bannerImg}>
  //       <Text style={styles.text}>Save extra on every order</Text>
  //       <Text>Etiam mollis metus non fauggggggffffgggggcibus sollicitudin. </Text>
  //     </ImageBackground>
  //   </View>

  //   <Text>  Diabetic Diet</Text>

  //   <View style={styles.contentDiet}>
  //     <ImageBackground
  //       source={require('./img/MaskGroup.png')}
  //       style={styles.dietImage}
  //     >
  //     </ImageBackground>

  //     <ImageBackground
  //       source={require('./img/MaskGroup.png')}
  //       style={styles.dietImage}
  //     >

  //     </ImageBackground>

  //     <ImageBackground
  //       source={require('./img/MaskGroup.png')}
  //       style={styles.dietImage}

  //     >

  //     </ImageBackground>
  //   </View>
  //   <View>

  //   </View>
  // </View>



);

// const styles = StyleSheet.create({
//   container: {
//     padding: 25,
//   },
//   pathContent: {
//     flexDirection: "row",

//   },
//   pathText: {
//     marginLeft: 10,
//   },
//   pathImg: {
//     width: 24,
//     height: 24,

//   },
//   banner: {

//     justifyContent: 'center',
//     alignContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     overflow: 'hidden',
//   },

//   bannerImg: {
//     position: 'relative',
//     width: "100%",
//     minHeight: 140,

//   },
//   contentDiet: {
//     flexDirection: "row",
//     justifyContent: "center",

//   },
//   dietImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 15,
//     marginRight: 20,
//     overflow: "hidden"
//   },

//   // 'dietImage:last-child':{
//   //   marginRight:0,

//   // }

// });

export default App;