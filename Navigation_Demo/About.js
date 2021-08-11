import React from "react"
import { View,Text,Button,StyleSheet } from "react-native"

const About =({navigation})=>{
    return (
        <View style={styles.container}>
            <Text>About Screen</Text>
            <Button title="Go to Contact" onPress={()=>navigation.navigate("Contact")}/>
            
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
export default About;