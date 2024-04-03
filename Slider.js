import { View, Text, FlatList,Image } from 'react-native'
import React from 'react'

const data = [
  {
    id: 1,
    img: "https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-second-hand-flea-market-event_23-2149553352.jpg?t=st=1711639335~exp=1711642935~hmac=05afadff6f6bc293c8b3fdd2b1825f3ea9fb13233a3a527ecc6a666df78d4edc&w=1060"
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-vector/flat-design-second-hand-template_23-2150537683.jpg?t=st=1711639289~exp=1711642889~hmac=c92d520bdd1c21ca59a236727ae895202771693122e49c8d4feca9d56306bcfc&w=1060"
  },
  {
    id:3,
    img:"https://img.freepik.com/free-vector/flat-second-hand-flea-market-social-media-promo-template_23-2149656743.jpg?w=1060&t=st=1711693378~exp=1711693978~hmac=1bd929ec088496d0b5686d927cd9c11c7082362789d7f7eaacd3753abd361736"
  },
  {
    id: 4,
    img: "https://img.freepik.com/free-vector/flat-second-hand-flea-market-sale-banner-template_23-2149656655.jpg?t=st=1711692872~exp=1711693472~hmac=dff1b3a8303ba59581a2fd5e13c3c5aea21649529b149da243341c40eb0426bf"
  },
  
];


export default function Sliderr() {
  return (
    <View className="mt-5">
       <FlatList
       horizontal={true}
       showsHorizontalScrollIndicator={false}

    data={data}
    
    renderItem={({item}) => <View>
    
    <Image source={{uri:item.img}}className="  h-[112px] w-[250px] mr-3 rounded-lg  object-contain "
    />
   </View>}
    
  />
    </View>
   
  )
}



    
 