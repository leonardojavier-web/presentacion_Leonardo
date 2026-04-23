import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Presentacion from './components/presentacion'
export default function App() {
  return (
    <SafeAreaProvider>
    <View style = {styles.container}>
      <Presentacion/>
    </View>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})