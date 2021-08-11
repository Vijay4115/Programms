
import React from "react"
import { View,Text,Button,StyleSheet } from "react-native"

const Home =({navigation})=>{
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Go to About" onPress={()=>navigation.navigate("About")}/>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
    }
})
export default Home;