import React from "react"

import { createStackNavigator } from "@react-navigation/stack"

import Home from "../Screens/Home"
import About from "../Screens/About"
import Contact from "../Screens/Contact";
import Details from "../Screens/Details";
import TabNavigator from "./TabNavigator";
const Stack=createStackNavigator();
const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Black",
  };
  
const MainStack=()=>
{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="Contact" component={Contact}/>
            {/*  */}
        </Stack.Navigator>
    );
}
const DetailsNavigator=()=>{
  return(
    <Stack.Navigator>
      {/* <Stack.Screen name="Menu" component={TabNavigator}/> */}
      <Stack.Screen name="Details" component={Details}/>
    </Stack.Navigator>
  );
}
export  {MainStack,DetailsNavigator};