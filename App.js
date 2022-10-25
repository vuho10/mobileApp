import React from "react";
import { View, ScrollView } from "react-native";
import styles from './styles';
import Path from "./components/Path";
import Banner from './components/Banner';
import Title from './components/Title';
import Products from './components/Products';
import TitlePopular from './components/TitlePopular';
import PopularProduct from "./components/PopularProduct";

const App = () => (

  <View style={styles.container}>
    <Path img={require('./img/Group1156.png')} />
    <Banner
      img={require('./img/bg.png')}
      title="Lorem ipsum dolor sit amet consectetur."
      desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, dicta."
    />
    <Title title="Diabetic Diet" />
    <ScrollView horizontal={true}>
      <Products img={require('./img/p1.png')} starNumber={'⭐'} name='Sugar Substitute' sale={true} />
      <Products img={require('./img/p2.png')} price={580} name='Juices & Vinegars' sale={true} />
      <Products img={require('./img/p3.png')} starNumber={'⭐'} name='Vitamins Medicines' sale={true} />
      <Products img={require('./img/p1.png')} starNumber={'⭐'}  name='Sugar ' sale={true} />
    </ScrollView>
    <TitlePopular title="All Products"/>
    <ScrollView>
      <PopularProduct img={require('./img/image21.png')}/>
      <PopularProduct img={require('./img/image22.png')}/>
      <PopularProduct img={require('./img/image23.png')}/>
      <PopularProduct img={require('./img/image20.png')}/>
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