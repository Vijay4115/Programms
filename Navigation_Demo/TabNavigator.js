import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { MainStack ,DetailsNavigator} from "./MainStackNavigator";

const Tab=createBottomTabNavigator();



const TabNavigator=()=>{
return(
 <Tab.Navigator  tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }}>
     <Tab.Screen name="Home" component={MainStack}/>
    <Tab.Screen name="Details" component={DetailsNavigator}/>    
  
 </Tab.Navigator>
);
}
export default TabNavigator;