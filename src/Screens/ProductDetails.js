import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';

import CostomButton from '../Common/CostomButton';

const ProductDetails = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [dateIs, setDateIs] = useState(false);
  const [dateTo, setDateTo] = useState(new Date());
  const [dateIsTo, setDateIsTo] = useState(false);
  const [open, setOpen] = useState(false);
  const [openTo, setOpenTo] = useState(false);


  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <Text style={styles.boldText}>Offer Name</Text>
        <View style={styles.ellipes} />
        <View style={[styles.comman, {justifyContent: 'space-between'}]}>
          <Text style={styles.lightText}>Offer Reward</Text>
          <Text style={styles.lightText}>Teme Remaining</Text>
        </View>
        <View
          style={[
            styles.comman,
            {justifyContent: 'space-between', marginTop: 5},
          ]}>
          <Text style={styles.boldText}>$ 0.13</Text>
          <Text style={styles.boldText}>00 : 00 00</Text>
        </View>
        <View
          style={[
            styles.comman,
            {justifyContent: 'space-between', marginTop: 5},
          ]}>
          <Text style={styles.lightText}>Status</Text>
          <Text style={[styles.lightText, {fontSize: 10}]}>
            Days : Hours : Minutes
          </Text>
        </View>
        <Text style={styles.greenText}>Claimed</Text>
        <View style={styles.ellipes} />
        <View
          style={[
            styles.comman,
            {justifyContent: 'space-between', marginVertical: 5},
          ]}>
          <Text style={styles.lightText}>No of Direct Required</Text>
          <Text style={styles.boldText}>10</Text>
        </View>
        <View style={styles.prograsBar} />
        <View style={[styles.comman, {justifyContent: 'space-between'}]}>
          <Text style={[styles.lightText, {fontSize: 10}]}>50% Comlete</Text>
          <Text style={[styles.lightText, {fontSize: 10}]}>5/10</Text>
        </View>
        <View style={[styles.prograsBar, {marginTop: 10}]} />
        <View style={[styles.comman, {justifyContent: 'space-between'}]}>
          <Text style={[styles.lightText, {fontSize: 10}]}>50% Comlete</Text>
          <Text style={[styles.lightText, {fontSize: 10}]}>5/10</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#696969" barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() =>navigation.goBack()} style={styles.backButton}>
          <Ionicons name="md-chevron-back" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.heading}>Offers</Text>
      </View>
      <View style={styles.comman}>
        <CostomButton
          buttonStyle={{backgroundColor: 'gray', marginRight: 5}}
          title="Crurrent Offers"
        />
        <CostomButton
          buttonStyle={{marginLeft: 5}}
          titelStyle={{color: 'gray'}}
          title="Offers Claimed"
        />
      </View>

      <View style={[styles.comman, {marginTop: 10}]}>
        <Icon name="filter" size={20} color="gray" />
        <Text style={styles.dateTEXT}>Date</Text>
        <Pressable onPress={() => setOpen(true)} style={styles.dateButton}>
          <DatePicker
            title={null}
            dividerHeight={3}
            textColor="#979797"
            theme="light"
            mode="date"
            modal={true}
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              setDateIs(true);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <Text style={styles.dateTxt}>
            {!dateIs ? 'from' : moment(date).format('DD-MM-YYYY')}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setOpenTo(true)}
          style={[styles.dateButton, {marginLeft: 10}]}>
          <DatePicker
            title={null}
            dividerHeight={3}
            textColor="#979797"
            theme="light"
            mode="date"
            modal={true}
            open={openTo}
            date={dateTo}
            onConfirm={date => {
              setOpenTo(false);
              setDateTo(date);
              setDateIsTo(true);
            }}
            onCancel={() => {
              setOpenTo(false);
            }}
          />
          <Text style={styles.dateTxt}>
            {!dateIsTo ? 'to' : moment(dateTo).format('DD-MM-YYYY')}
          </Text>
        </Pressable>
        <View style={styles.line} />
        <Ionicons name="search" size={20} color="gray" />
      </View>
      <FlatList data={[1, 2]} renderItem={renderItem} />
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container:{flex: 1, backgroundColor: '#696969', paddingHorizontal: 15},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  backButton: {
    backgroundColor: '#696969',
    elevation: 5,
    borderRadius: 50,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {marginLeft: 20, fontSize: 16, fontWeight: '700', color: '#fff'},
  comman: {flexDirection: 'row', alignItems: 'center'},
  dateButton: {
    flex: 1,
    height: 25,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: 'gray',
  },
  dateTxt: {color: '#696969', fontSize: 13},
  line: {
    borderLeftWidth: 2,
    borderLeftColor: 'gray',
    height: 25,
    marginHorizontal: 10,
  },
  dateTEXT: {fontSize: 14, color: 'gray', marginHorizontal: 10},
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 5,
  },
  ellipes: {
    height: 0.5,
    backgroundColor: '#fff',
    elevation: 2,
    width: '100%',
    marginVertical: 7,
  },
  boldText: {color: '#000', fontSize: 15, fontWeight: '900'},
  lightText: {fontSize: 14, fontWeight: '600', color: 'gray'},
  greenText: {color: 'green', fontSize: 14, fontWeight: '700', marginTop: 5},
  prograsBar: {
    width: '100%',
    backgroundColor: 'orange',
    height: 5,
    borderRadius: 50,
    marginVertical: 5,
  },
});
