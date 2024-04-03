import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDoc, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore'
import { app } from '../../firebaseConfig'
import NewItem from '../Componets/Lasstest'
export default function ExpolerScreen() {
  const db=getFirestore(app)

  const [productList,setProduct]=useState([])

  useEffect(()=>{

getAllProduct()


  },[])
  const getAllProduct=async()=>{
    setProduct([])

    const q=query(collection(db,'UserPost'),orderBy('createdAt','desc'))

    const snapshot=await getDocs(q)
    snapshot.forEach((doc)=>{

      setProduct(productList=>[...productList,doc.data()])


    })
  }
  return (
    <ScrollView className="p-5 py-8">
      <Text className="text-[30px] font-bold">Explore More</Text>
      <NewItem  latestItem={productList}/>
    </ScrollView>
  )
}