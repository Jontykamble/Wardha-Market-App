import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Componets/Header'
import Slider from '../Componets/Slider'
import { collection, getDocs, getFirestore, orderBy } from 'firebase/firestore'
import { app } from '../../firebaseConfig'
import Sliderr from '../Componets/Slider'
import Category from '../Componets/Category'
import NewItem from '../Componets/Lasstest'


export default function HomeScreen() {
  const [categoryyListt,setCategoryList]=useState([])
 const [latestItem,setItem]=useState()
  useEffect(()=>{
     getCategoryList()
     getlastestItem()
  },[])
  const db=getFirestore(app)
  const getCategoryList=async()=>{
    setCategoryList([])
  
    const querySnapshot=await getDocs(collection(db,'Category'))
    
    querySnapshot.forEach((doc)=>{
    console.log("Docs:",doc.data())
    setCategoryList(categoryyListt=>[...categoryyListt,doc.data()])
   })}
  
  
  const getlastestItem=async()=>{

 setItem([])
    const querySnapshot=await getDocs(collection(db,'UserPost'),orderBy('createdAt',
    'desc'))
    querySnapshot.forEach((doc)=>{
      console.log("Docs",doc.data())
      setItem(latestItem=>[...latestItem,doc.data()])
    })



  }

  
  return (
    <ScrollView className="py-8 px-6 bg-white flex-1 ">
<Header/>
<Sliderr />
<Category categoryyListt={categoryyListt}/>

<NewItem latestItem={latestItem} heading={'Latest Items'}/>
    </ScrollView>
  )
}