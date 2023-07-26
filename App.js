// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=57f5e40ae422cd00febe207f962ef40e
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView,View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <Text>Ilhéus</Text>

      <View style={{flexDirection:'row', columnGap: 10}}>
      <Text >Monday </Text>  
      <Text>7:00 AM</Text>
      </View>
     
      <Feather style={ { paddingTop: 50}} name="sun" size={150} color="black" />

      <View style={{rowGap: 10,  alignItems: 'center'}}> 
        <Text style={ { paddingTop: 50}}>22 °C</Text>
        <Text >Good Morning</Text>
      </View>

      <View style={{flexDirection:'row', columnGap: 10}}>
      <Feather name="sunset" size={24} color="black" />
      <Feather name="droplet" size={24} color="black" />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap:10,
  },
});

{/* <Text>Just me!!</Text>
      <Image style={{width: '100%', height: 350}} source={{uri:'https://github.com/tawanalves.png'}} />
      <AntDesign name="hearto" size={24} color="black" />
      <AntDesign name="heart" size={24} color="black" />
      <StatusBar style="auto" /> */}
