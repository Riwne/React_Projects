import React from 'react';
import { Text, Image, View, TouchableOpacity } from "react-native";
import {image} from './resources'
import { AntDesign } from '@expo/vector-icons'; 
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';


export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  });

  if (!fontsLoaded)
    return <Text>Carregando...</Text>

  function handle(){
    console.log("helllo learniano");
  }
  
  return (
    <View
      style={{
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text
        style={{
          color: "#04BFBF",
          fontFamily: 'Montserrat_600SemiBold',
          fontSize: 18, 
          paddingHorizontal: 50,
          textAlign:'center',
        }}
      >
        Acompanhe a LearninLab de forma fácil
      </Text>
      <Image
        source={image}
        style={{
          height: 200,
          width: 200
        }}
      />
      <Text
        style={{
          fontSize: 24,
          color: "#04BFBF",
          fontSize: 14, 
          fontFamily: 'Montserrat_600SemiBold',
          textAlign:'center',
          paddingHorizontal: 50,
        }}
      >
        Não esqueça de acompanhar nossas redes sociais.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>
      <TouchableOpacity
        onPress={() => handle()}
        style={{
          margin: 20,
          height: 60,
          width: 60,
          alignItems: 'center',
          borderRadius: 10,
          backgroundColor: "#04BFBF",
          justifyContent: 'center',
        }}
      >
      <Text
        style={{
          fontSize: 20,
        }}
      >
        <AntDesign name="arrowright" size={24} color="white" />
      </Text>
      </TouchableOpacity>
    </View>
  );
}
