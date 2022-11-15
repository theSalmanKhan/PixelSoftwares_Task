import React from 'react';
import {StatusBar, StyleSheet, Text, View,Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CostomHeader = ({onDrawerHendal}) => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#fff' barStyle='dark-content' />
      <View style={{flex: 0.3}}>
        <Pressable onPress={onDrawerHendal}>
        <Entypo name="menu" size={25}  />
        </Pressable>
      </View>
      <Text style={styles.titel}>Home</Text>
      <View style={styles.lastView}>
        <AntDesign name="search1" size={22} />
        <AntDesign name="hearto" size={20} style={{marginHorizontal:10,}} />
        <Icon name="shopping-outline" size={22} />
      </View>
    </View>
  );
};

export default CostomHeader;

const styles = StyleSheet.create({
    container:{flexDirection: 'row', alignContent: 'center', padding: 10,backgroundColor:'#fff',elevation:10},
    titel:{flex: 0.5, color: '#000', fontSize: 16, textAlign: 'center',fontWeight:"700"},
    lastView:{flex: 0.3, flexDirection:'row',justifyContent:'flex-end'}
});
