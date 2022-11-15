import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spinner from 'react-native-loading-spinner-overlay';

import {productlist} from '../ApiService';
import CostomHeader from '../Common/CostomHeader';
import {useStore} from '../store';

const HomeScreen = ({navigation}) => {
  const {setLocalData} = useStore();

  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    setLoading(true);
    productlist(onResponse, onError);
  }, []);

  const onResponse = response => {
    setListData(response);
    setLoading(false);
  };
  const onError = error => {
    setLoading(false);
  };

  const navigationHandler = item => {
    setLocalData(item);
    navigation.navigate('ProductDetails');
  };

  const renderItem = ({item}) => {
    return (
      <Pressable
        onPress={() => navigationHandler(item)}
        style={styles.shadowBox}>
        <Image
          resizeMode="contain"
          source={{uri: item?.image}}
          style={styles.image}
        />
        <View style={styles.textView}>
          <View style={styles.Common}>
            <Icon name="star" size={15} color="#E4C863" />
            <Text style={styles.rating}>{item?.rating?.rate}</Text>
          </View>
          <Text style={styles.titleText}>{item?.category}</Text>
          <Text style={styles.detailText} numberOfLines={1}>
            {item?.title}
          </Text>
          <View style={[styles.Common, {justifyContent: 'space-between'}]}>
            <Text style={styles.titleText}>₹ {item?.price}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F8F8FF'}}>
      <CostomHeader onDrawerHendal={() => navigation.toggleDrawer()} />
      <Spinner
        visible={loading}
        color={'#E4C863'}
        overlayColor={'rgba(0,0,0,0.5)'}
      />
      <View style={styles.filterView}>
        <Text style={styles.CommonText}>items</Text>
        <View style={styles.Common}>
          <AntDesign name="filter" size={20} style={{marginRight: 5}} />
          <Text style={styles.CommonText}>Filter</Text>
        </View>
      </View>
      <FlatList
        data={listData}
        numColumns="2"
        renderItem={renderItem}
        contentContainerStyle={{marginHorizontal: 10}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  filterView: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  CommonText: {color: '#000', fontSize: 14, fontWeight: '500'},
  Common: {flexDirection: 'row', alignContent: 'center'},
  shadowBox: {
    marginHorizontal: 5,
    backgroundColor: '#fff',
    elevation: 5,
    flex: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
  textView: {paddingHorizontal: 10, paddingBottom: 10},
  titleText: {color: '#000', fontSize: 15, fontWeight: '700'},
  detailText: {fontSize: 13, fontWeight: '400', color: '#000'},
  rating: {color: '#000', fontSize: 12, marginLeft: 5},
  image:{width: '100%', height: 120,marginTop:15}
});
