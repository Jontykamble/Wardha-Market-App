import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../Screen/HomeScreen'
import Itemlist from '../Screen/Itemlist'
import ProductDetail from '../Screen/ProductDetail'

const Stack=createStackNavigator()

export default function Homescreeennav() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='home'  component={HomeScreen}
        options={{headerShown:false}}/>
        <Stack.Screen name='item-list' component={Itemlist} 
        options={({route})=>({title:route.params.category,headerStyle:{backgroundColor:'#3b82f6'},headerTintColor:'#fff'})}/>
    <Stack.Screen name='product-de' component={ProductDetail} 
        options={{headerStyle:{backgroundColor:'#3b82f6'},headerTintColor:'#fff',headerTitle:'Detail'}}/>
    
   
    </Stack.Navigator>
  )
}