import {StyleSheet, View, Text, Image, Linking, Pressable, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
export default function Presentacion() {
  const Instagram=()=>{
    Linking.openURL("https://www.instagram.com/leo_ibanez_011/")
  }
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.container}>
       <Text style={styles.yo}>¡Hola! Soy Leonardo Ibañez</Text>
        <Text>Edad: 17 Años</Text>
        <Image source={require("./Foto.jpeg")} style={styles.image}/>
         <Pressable
         style={({ pressed }) => [
        styles.boton,
        pressed && styles.botonPresionado]}
        onPressIn={()  => alert('1. onPressIn  → dedo apoyado')}
        onPressOut={() => alert('2. onPressOut → dedo levantado')}
        onPress={Instagram}
        title="Instagram">
        <Text style={styles.titulo}>Tocame</Text>
      </Pressable>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  image:{
    width:200,
    height:200
  },
  yo:{
    fontSize:40,
    color:"light-blue"
  },
titulo:{
  color: 'light-red', 
  textAlign: 'center'
},
boton: {
    backgroundColor: '#4f9deb',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
botonPresionado: {
    backgroundColor: 'blue',  
    opacity: 0.7,
}
})