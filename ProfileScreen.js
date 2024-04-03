import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { FlatList } from 'react-native'
import Logout from "./../../assets/Logout.png"


export default function ProfileScreen() {

  const {user}=useUser()
  const menuList=[
{
    id:1,
    name:'My Products',
    icon:'https://cdn-icons-png.flaticon.com/128/10748/10748360.png'},
    {
      id:2,
      name:'Explore',
      icon:'https://cdn-icons-png.flaticon.com/128/13011/13011179.png'},
     
        {
          id:3,
          name:'Logout',
          icon:Logout}
  ]
  return (
    <View className="p-5">
      <View className="items-center mt-14">
        <Image source={{uri:user?.imageUrl}} className="w-[100px] h-[100px] rounded-full "/>
        <Text className="font-bold text-[25px] mt-2">{user?.fullName}</Text>
        <Text className="text-[18px] mt-2 text-gray-500">{user?.primaryEmailAddress?.emailAddress}</Text>
      </View>

      

          

      

        
      
    </View>
  )
}