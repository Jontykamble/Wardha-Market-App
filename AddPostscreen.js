import { View, Text, TextInput,StyleSheet, Button, TouchableOpacity,Image, ToastAndroid, Alert, ActivityIndicator, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { app } from '../../firebaseConfig'
import {addDoc, collection, getDocs, getFirestore} from "firebase/firestore"
import {getDownloadURL, getStorage,ref,uploadBytes}from "firebase/storage"
import { Formik } from 'formik'
import { Picker } from '@react-native-picker/picker'
import * as ImagePicker from 'expo-image-picker'
import { useUser } from '@clerk/clerk-expo'
     

export default function AddPostscreen() {


  const[categoryyList,setCategoryList]=useState([])
 const [image,setImage]=useState(null)
 const[loading,setLoading]=useState(false)
  const db=getFirestore(app)
  const storage=getStorage()

  const {user}=useUser()

 

 useEffect(()=>{


  getCategoryList()
 },[])



 const getCategoryList=async()=>{
  setCategoryList([])

  const querySnapshot=await getDocs(collection(db,'Category'))
  
  querySnapshot.forEach((doc)=>{
  console.log("Docs:",doc.data())
  setCategoryList(categoryyList=>[...categoryyList,doc.data()])
 })}


 //use to pick image from gallery
 const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }
};
 
const onSubmitMethod=async(value)=>{

  setLoading(true)

   
 
  //Convert uri to blob file
  const res= await fetch(image)
  const blob=await res.blob()
  value.image=image
  const storageRef=ref(storage,'communityPost/'+Date.now()+'.jpeg')

  
  uploadBytes(storageRef, blob).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  }).then((resp)=>{
    getDownloadURL(storageRef).then(async(downloadUrll)=>{
      console.log(downloadUrll)
      value.image=downloadUrll

      value.userEmail=user.primaryEmailAddress.emailAddress;
      value.userName=user.fullName;
      value.userImage=user.imageUrl;
      const docRef=await addDoc(collection(db,"UserPost"),value)
      if(docRef.id){
        setLoading(false)
       Alert.alert('Success!!!','Post Added Successfully.' )
      }
    })
  })
      
      
      



}

 return (

  <KeyboardAvoidingView>
    <ScrollView className="p-10 bg-white ">

<Text className="text-[27px] font-bold">Add New Post</Text>
<Text className="text-[16px] text-gray-500 mb-7">Create New Post and Start Selling</Text>

<Formik initialValues={{title:'',desc:'',category:'',address:'',price:'',image:'',userName:'',userEmail:'',userImage:'',createdAt:Date.now()}} onSubmit={value=>onSubmitMethod(value)}
validate={(values)=>{
const errors={}
if(!values.title){
console.log("Title not present")
ToastAndroid.show('Title Must Be There',ToastAndroid.BOTTOM)
errors.name="Title Must be there"

}
return errors
}}
>{({handleChange,handleBlur,handleSubmit,values,errors})=>(
<View>
<TouchableOpacity onPress={pickImage}>

{image? 
<Image source={{uri:image}} style={{width:100,height:100,borderRadius:15}}/>:<Image source={require('./../../assets/images/download.png')} style={{width:100,height:100,borderRadius:15}}/>}


</TouchableOpacity>

<TextInput style={styles.input} placeholder='Title'  
value={values.title}
onChangeText={handleChange('title')}/>

<TextInput style={styles.input} placeholder='Description'
value={values.desc}
numberOfLines={5}
onChangeText={handleChange('desc')}/>

<TextInput style={styles.input} placeholder='Price'
value={values.price}
onChangeText={handleChange('price')}

keyboardType='number-pad'/>
<TextInput style={styles.input} placeholder='Address'
value={values.address}
onChangeText={handleChange('address')}/>

<View style={{borderWidth:1,borderRadius:10,marginTop:15}}>
<Picker selectedValue={values?.category} onValueChange={handleChange('category')}
>
  {categoryyList&&categoryyList.map((jk,index)=>{
    return (
     <Picker.Item  key={index}label={jk.name} value={jk.name}/>
    )
  })}
 
  

</Picker>


</View>






<TouchableOpacity  onPress={handleSubmit} style={{backgroundColor:loading?'#ccc':'#007BFF'}}disabled={loading}className="p-4 bg-blue-500 rounded-full mt-10">

{loading?<ActivityIndicator color='#fff'/>:  <Text className="text-white text-center text-[16px]">

Submit
</Text>}


</TouchableOpacity>


</View>
)}
</Formik>
</ScrollView>

  </KeyboardAvoidingView>

  
)

  } 

  const styles = StyleSheet.create({
    input:{
      borderWidth:1,
      borderRadius:10,
      marginTop:10,marginBottom:5,
      padding:10,
      padding:10,
      paddingHorizontal:17,
      

    }
  }) 
