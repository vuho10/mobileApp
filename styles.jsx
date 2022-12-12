import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingHorizontal: 24,
  },
  pathContent: {
    paddingTop: 10,
    flexDirection: 'row',
  },
  pathText: {
    marginLeft: 10,
    fontWeight: '700',
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
    width: '100%',
  },
  banner__img: {
    width: '100%',
  },
  banner__content: {
    position: 'absolute',
    top: 28,
    left: 24,
    maxWidth: 124,
    color: 'FFC000',
  },
  banner__content__title: {
    color: '#1987FB',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21,
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
    color: '#FFFFFF',
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
    height: 100,
  },

  black: {
    color: 'black',
  },

  titlePo: {
    marginTop: 20,
    marginBottom: 10,
  },
  popularPr: {
    marginRight: 20,
    // backgroundColor:"yellow",
    borderRadius: 10,
    position: 'relative',
  },

  allProduct: {
    marginTop: -120,
    marginBottom: 10,
  },
  // PopularProduct
  sales: {
    backgroundColor: '#ff5a5a',
    marginTop: -30,
    marginLeft: -30,
    height: 70,
    width: 80,

    transform: [{rotate: '-45deg'}],
  },
  textSale: {
    marginTop: 40,
    marginLeft: 25,
  },
  bTabIcon: {
    fontSize: 18,
  },
  // ----------------------------------midterm-test/map

  containerViewMap: {
    ...StyleSheet.absoluteFillObject,
    height: 300,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container__Home: {
    padding: 20,
  },

  header: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_text: {
    marginRight: 290,
    fontSize: 20,
  },
  header__icon: {
    fontSize: 20,
  },
  header__form: {
    flexDirection: 'row',
  },
  header__search: {},
  header__input: {},

  // -------------------------------category
  // Category_container_scr:{
  //   marginBottom:30,
  // },
  Category_container: {
    marginTop: 15,
    marginBottom: 130,
    alignItems: 'center',
    marginRight: 35,
  },
  Category_name: {
    fontSize: 15,
    marginBottom: 10,
    // alignItems:'center',
  },
  Category_content: {
    backgroundColor: '#a0b74f',
    borderRadius: 40,
    overflow: 'hidden',
    height: 140,
    alignItems: 'center',
  },
  Category_name_product: {
    marginTop: 10,
    fontSize: 14,
  },

  Category_img: {
    width: 140,
    resizeMode: 'contain',
    height: 100,
  },

  text_buy: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  // products
  product_content: {
    borderRadius: 30,
    alignItems: 'center',
    marginRight: 20,
  },
  products_container: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    marginBottom: 20,
  },
  products_name: {
    marginTop: 50,
    fontSize: 40,
    color: 'black',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  products_prices: {
    fontSize: 15,
    marginLeft: 80,
    fontWeight: 'bold',
  },

  // product_img: {
  //   width: 90,
  //   resizeMode: 'cover',
  //   borderRadius:20,
  //   height: 100
  // },
  product_scroll: {
    marginTop: 30,
  },

  details_color: {
    backgroundColor: '#a0b74f',
    // marginTop:-60,
  },
  products_detail: {
    width: 300,
    resizeMode: 'contain',
    height: 500,
  },
  shop_details: {
    // backgroundColor: "#a0b74f",
    alignItems: 'center',
    marginTop: 100,
  },
  name_detail: {
    marginTop: -200,
    marginLeft: 30,
    fontSize: 20,
    color: '#ffa0a0',
  },

  btn_add_to_cart: {
    backgroundColor: '#ffa0a0',
    borderRadius: 40,
    // overflow: 'hidden',
    width: 100,
    height: 30,
    alignItems: 'center',
    alignSelf: 'flex-end',
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },

  searchBox: {
    // position:'absolute',
    marginBottom: -250,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  // -------------new
  title_card: {
    fontSize: 20,
  },
  title1: {
    margin: 0,
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'left',
    fontSize: 20,
  },
  title2: {
    margin: 0,
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'left',

    color: '#9E9E9E',
    fontStyle: 'italic',
    fontSize: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    margin: 15,
    maxWidth: 300,
    textAlign: 'center',
    borderRadius: 10,
    // box-shadow: 10px 10px 30px #BDBDBD;

    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },

  product_img: {
    width: 200,
    // resizeMode: 'cover',
    // borderTopRightRadius: 10,
    // borderTopLeftRadius: 10,
    height: 100,
  },
  // card__image: {
  //   width: 200,
  //   borderRadius: 20,
  // },
  card__copy: {
    margin:10,
  },
// card_image:{
//   padding: 20,

// },
  // 
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    // paddingBottom:50,
    // marginBottom:50,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  content:{
   
    // backgroundColor: '#8BC34A'
  }
});
export default styles;
