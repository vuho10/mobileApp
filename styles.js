import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingHorizontal: 24,
  },
  pathContent: {
    paddingTop: 10,
    flexDirection: "row",

  },
  pathText: {
    marginLeft: 10,
    fontWeight: "700",
    fontSize: 16,


  },
  pathImg: {
    width: 24,
    height: 24,

  },
  banner: {
    height: 140,
    overflow: 'hidden',
    borderRadius: 10,
    position: 'relative',
    marginTop: 18,
    width: '100%'
  },
  banner__img: {
    width: '100%',
  },
  banner__content: {
    position: 'absolute',
    top: 28,
    left: 24,
    maxWidth: 124,
    color: "FFC000",

  },
  banner__content__title: {
    color: '#1987FB',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21
  },
  banner__content__desc: {
    color: 'black',
    fontWeight: '300',
  },

  title: {
    marginVertical: 20,
    color: 'black',
    textTransform: 'capitalize',
    textAlign: 'left',
  },
  star: {
    color: '#FFFFFF'

  },

  // Product
  product__price: {
    color: '#090F47',
    fontWeight: '600',
  },
  none: {
    display: 'none',
  },
  product: {
    backgroundColor: '#F5F7FA',
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 16,
    height: 162,
  },
  product__img: {
    width: '100%',
    resizeMode: 'cover',
    // position:"relative",
    height: 100
  },
  black: {
    color: 'black'
  },
  titlePo: {
    marginTop: 20,
    marginBottom: 10,
  },
  popularPr: {
    marginRight: 20,
    // backgroundColor:"yellow",
    borderRadius: 10,
    position:"relative",

  },
  allProduct: {
    marginTop: -120,
    marginBottom: 10,

  },
  // PopularProduct
  sales: {
    backgroundColor: "#ff5a5a",
    marginTop: -30,
    marginLeft: -30,
    height: 70,
    width: 80,
 
    
    transform: [
      { rotate: "-45deg"},

    ]

  },
  textSale: {
    marginTop: 40,
    marginLeft:25,
  },
  bTabIcon:{
    fontSize:18,
  },
// ----------------------------------midterm-test/map
containerViewMap: {
  ...StyleSheet.absoluteFillObject,
  height: 400,
  width: 400,
  justifyContent: 'flex-end',
  alignItems: 'center',
},
map: {
  ...StyleSheet.absoluteFillObject,
},


});
export default styles;