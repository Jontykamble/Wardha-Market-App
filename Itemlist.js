import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { app } from '../../firebaseConfig'
import NewItem from '../Componets/Lasstest'

export default function Itemlist() {
    const {params}=useRoute()
    const db=getFirestore(app)
    const [itemList,setItem]=useState([])
    const [loading,setLoading]=useState(false)

    useEffect(()=>{

        params&&getItemList()

    

    },[params])

    const getItemList=async()=>{

setItem([])
setLoading(true)
        const q=query(collection(db,'UserPost'),where('category','==',params.category))
        const snapshot=await getDocs(q)
        setLoading(false)
        snapshot.forEach(doc=>{
            console.log(doc.data())
            setItem(itemList=>[...itemList,doc.data()])
            setLoading(false)
        })
    }
  return (
    <View className="p-2">
      {loading?
      <ActivityIndicator size={'large'} color={'#3b82f6'}/>:
      itemList?.length>0?<NewItem latestItem={itemList}
  heading={''}/>:<Text className="p-5 text-[20px] mt-24 justify-center">No post found</Text>}
  

    </View>
  )
}