import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './src/Screens/HomeScreen';
import ProductDetails from './src/Screens/ProductDetails';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen}  />
      <Drawer.Screen name="ProductDetails" component={ProductDetails}  />
    </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
