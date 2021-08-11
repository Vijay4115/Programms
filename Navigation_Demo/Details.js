import React from "react"
import { View,Text,Button,StyleSheet } from "react-native"

const Details =({navigation})=>{
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>

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
export default Details;