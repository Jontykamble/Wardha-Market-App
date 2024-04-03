import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from '../Screen/HomeScreen'
import ExpolerScreen from '../Screen/ExpolerScreen'
import AddPostscreen from '../Screen/AddPostscreen'
import { FontAwesome } from '@expo/vector-icons';
import ProfileScreen from '../Screen/ProfileScreen'


import { Ionicons } from '@expo/vector-icons';
import Homescreeennav from './Homescreeennav'


const Tab=createBottomTabNavigator()
export default function TabNavigation() {
  return (

    <Tab.Navigator screenOptions={{headerShown:false,
        }}>

        <Tab.Screen name='home-tab'component={Homescreeennav}
         options={{tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,marginBottom:3}} >Home</Text>
         ),
         tabBarIcon:({color,size})=>(
            <FontAwesome name="home" size={size} color={color} />
         )
        }}
        />
        <Tab.Screen name='explore'component={ExpolerScreen}
        options={{tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,marginBottom:3}} >Explore</Text>
         ),
         tabBarIcon:({color,size})=>(
            <FontAwesome name="search" size={size} color={color} />
         )
        }}/>
        <Tab.Screen name='addpost'component={AddPostscreen}
        options={{tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,marginBottom:3}} >Add Post</Text>
         ),
         tabBarIcon:({color,size})=>(
            <FontAwesome name="camera-retro" size={size} color={color
            } />
         )
        }}/>
        <Tab.Screen name='profile'component={ProfileScreen} 
        options={{tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,marginBottom:3}} >Profile</Text>
         ),
         tabBarIcon:({color,size})=>(
            <Ionicons name="person-circle" size={size} color={color} />
         )
        }}/>


    </Tab.Navigator>
  )
}