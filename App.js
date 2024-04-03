import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Apps/Screen/LoginScreen';
import LoginSccreen from './Apps/Screen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import TabNavigation from './Apps/Navigation/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {  
  return (

    <ClerkProvider publishableKey='pk_test_Y2VudHJhbC1jaGltcC0zOS5jbGVyay5hY2NvdW50cy5kZXYk'>
    <View className="flex-1 bg-white">
      <StatusBar style="auto" />

      <SignedIn>
        <NavigationContainer>
        <TabNavigation/>
        </NavigationContainer>
       
      </SignedIn>
      <SignedOut>
        <LoginSccreen/>
      </SignedOut>
    </View>
    </ClerkProvider>
  );
}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: 'blue',
//    alignItems: 'center',
//    justifyContent: 'center',//use to text in center this two line 
//  },
//});
//