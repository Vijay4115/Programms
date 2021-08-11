import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";


import DrawerNavigator from "./StackNavigator/DrawerNavigator";

const App = () =>{
  return(
    <NavigationContainer>
<DrawerNavigator />

    </NavigationContainer>
  );
}
export default App;