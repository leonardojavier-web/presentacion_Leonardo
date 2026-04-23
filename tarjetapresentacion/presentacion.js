import {StyleSheet, View, Text, Image, Linking, Button, ScrollView} from 'react-native';
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
        <Image source={require("../assets/Foto.jpeg")} style={styles.image}/>
        <Button 
          onPress={link}
          title="Instagram"
        />
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
  }
})