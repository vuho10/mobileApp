import React, { useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function My() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={ require('../../../img/p.jpg')}
          />
          <Text style={styles.userInfo}>aunVu@gmail.com</Text>
          <Text style={styles.name}>Aun Vu</Text>
        </View>
        <View style={styles.followers}>
          <View style={styles.follow}>
            <Text style={styles.numberOfFollowers}>746</Text>
            <Text style={styles.text}>Followes</Text>
          </View>
          <View style={styles.follow}>
            <Text style={styles.numberOfFollowers}>706</Text>
            <Text style={styles.text}>Followes</Text>
          </View>
        </View>
      </View>  

      <View>
        <TouchableOpacity
         
        >
          <View style={styles.viewKs}>
            <Text >Privacy Settings</Text>
            <FontAwesome5
                name="tools"
              />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.viewYR}>
            <Text>Notifications</Text>
            <FontAwesome5
                name="bell"
              />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        >
          <View style={styles.viewS1}>
            <Text>Order History</Text>
            <FontAwesome5
                name="history"
              />
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.viewAl}>
            <Text >Payment Details</Text>
            <FontAwesome5
                name="money-check"
              
              />
          </View>
        </TouchableOpacity>
      </View>   
    </View>
  );
}


// Satoshi
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    paddingBottom: 25,
    marginBottom:30,
  },
  headerContent: {
    padding: 5,
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 2,
  },
  name: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
    marginTop: 10,
  },
  userInfo: {
    fontSize: 12,
    color: '#778899',
    fontWeight: '600',
    marginTop: 10,
  },
  follow: {
    textAlign: 'center',
    alignItems: 'center',
  },
  followers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  numberOfFollowers: {
    color: 'black',
    fontSize: 20,
  },
  body: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
  allartists: {
    flex: 2,
  },

  bgListartists: {
    flex: 1,
    flexDirection: 'row',
    width: 157,
    height: 'auto',
    marginRight: 14,
    marginBottom: 16,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  playlistName: {
    marginLeft: 16,
    marginBottom: 8,
    width: 108,
    fontSize: 16,
    color: 'black',
  },
  playlistSong: {
    marginLeft: 16,
    fontSize: 12,
  },
  img: {
    width: 60,
    marginRight: 10,
    height: 60,
    borderRadius: 10,
  },
  timeout: {
    marginRight: 10,
    marginLeft: 80,
  },
  img2: {
    width: 30,
    marginLeft: 0,
    height: 30,
  },
  bothtitle: {
    display: 'flex',
    flexDirection: 'row',
  },
  miniTitle: {
    marginLeft: 240,
    top: 30,
  },
  viewKs: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    // color:'',
    borderBottomWidth:1,
    borderTopWidth:1,
    padding:15,
    borderColor:'#778899'
    // color:"#778899"
    // backgroundColor:'#778899'

  },
  viewYR: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    // borderWidth:1,
    padding:15,
    borderColor:'#778899'
    // color:"#778899"

    // backgroundColor:'#778899'
  },
  viewS1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth:1,
    borderTopWidth:1,
    padding:15,
    // color:""
    borderColor:'#778899'

    // backgroundColor:'#778899'
  },
  viewAl: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    // borderWidth:1,
    // borderBottomWidth:1,
    padding:15,
    // backgroundColor:'#FFFFF'
  },
});