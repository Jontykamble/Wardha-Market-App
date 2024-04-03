import { View, Text, FlatList,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Postitem from './Postitem'
import { useNavigation } from '@react-navigation/native'

export default function NewItem({latestItem,heading}) {
  const navigation=useNavigation()
  return (
    <View className="mt-3">
      <Text className="font-bold text-[20px]">{heading}</Text>
      <FlatList data={latestItem} numColumns={2} renderItem={({item,index})=>{

        return (
          <TouchableOpacity className="flex-1 m-2 p-2 rounded-lg border-[1px] border-slate-200 " onPress={()=>navigation.navigate('product-de',{
            product:item
          })}>
          <Image source={{uri:item.image}} 
          className="w-full h-[140px] rounded-lg"/>
          <View>
            
            <Text className="text-[15px] font-bold mt-2">{item.title}</Text>
            <Text className="text-[20px] font-bold  text-blue-500">$ {item.price}</Text>
            <Text className="text-blue-500 bg-blue-200 p-[2px] text-center mt-1 rounded-full px-1 text-[10px] w-[70px]">{item.category}</Text>
          </View>
        </TouchableOpacity>
        )}
      }/>
    </View>
  )
}