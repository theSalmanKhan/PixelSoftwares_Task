import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CostomButton = ({onPress, title, buttonStyle, titelStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, buttonStyle]}
      activeOpacity={0.7}>
      <Text style={[styles.text, titelStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    height: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginVertical: 10,
  },
  text: {fontSize: 14, color: '#fff', fontWeight: '500'},
});
export default CostomButton;
