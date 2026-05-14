import {StyleSheet, View, Text, Image, Linking, Button, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
export default function Presentacion() {
  const Instagram=()=>{
    Linking.openURL("https://www.instagram.com/leo_ibanez_011/")
  }
  return (
    <SafeAreaView>
    <ScrollView>
    
    <View style={styles.informacion}>
       <Text style={styles.yo}>Nombre: Leonardo Javier</Text>
       <Text style={styles.yo}>Apellido: Ibañez</Text>
        <Text style={styles.yo}>Edad: 17 Años</Text>
        <Text style={styles.yo}>Fecha de Nacimiento: 08/11/2008</Text>
        <Text style={styles.yo}>Localidad: Las Varillas</Text>
      </View>
      <View style={styles.container}>
        <Image source={require("./Foto.jpeg")} style={styles.image}/>
        <Button 
          onPress={Instagram}
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
    height:200,
    borderRadius:20,
    marginBottom:30
  },
  yo:{
    fontSize:20,
    color:"light-blue"
  },
  informacion:{
    fontWeight:"bold",
    padding: 20,
    fontFamily:"Arial",
    flex:1,
    justifyContent:"left",
  },
})