import React from "react"
import { View,Text,Button,StyleSheet } from "react-native"


const Contact =({navigation})=>{
    return (
        <View style={styles.container}>
            <Text>Contact Screen</Text>
        <Button title="Go to Details" onPress={()=>navigation.navigate("Details")}/>
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
export default Contact;