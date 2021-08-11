
import React from 'react'
import { SafeAreaView,View,Text,TouchableOpacity,StyleSheet } from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import {decreaseCounter,increaseCounter} from  '../Actions/action'
import { responsiveScreenFontSize,responsiveScreenWidth } from 'react-native-responsive-dimensions'

const CounterApp =()=>{

  const count=useSelector(state=>state.reducer)
  console.log(count)
  
  const dispatch=useDispatch();
  // const increment =dispatch(increaseCounter());
  // const decrement=dispatch(decreaseCounter());
    
        return(
          <SafeAreaView style={{flex:1}}>
            <View style={styles.container}> 
               
              <TouchableOpacity onPress={()=>dispatch(increaseCounter())} style={styles.btnedit}>
              <Text style={styles.btntext}>INCREMENT</Text>
              </TouchableOpacity>
              <Text style={styles.textedit} >{count.counter}</Text>
          
              <TouchableOpacity style={styles.btnedit} onPress={()=>dispatch(decreaseCounter())}>

              <Text style={styles.btntext}> DECREMENT</Text>  
              </TouchableOpacity >
              
            </View>
          </SafeAreaView>
        )
  }

export default CounterApp;
const styles=StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    marginTop:260,
    //width:400
    width:responsiveScreenWidth(100),
  },
    btnedit:{
      backgroundColor:'#CDF0EA',
      //width:150,
      width:responsiveScreenWidth(37.5),
      borderRadius:15,
      color:'black',
      padding:9
    },
    btntext:{
      color:'blue',
      alignSelf:'center',
      fontWeight:'bold',
      
    },
    textedit:{
      //fontSize:25,
      fontSize:responsiveScreenFontSize(4),
      color:'blue',
      fontWeight:'500',
    }

})