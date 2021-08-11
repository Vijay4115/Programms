import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import {DetailsNavigator} from "./MainStackNavigator"
import TabNavigator from "./TabNavigator"
import Home from "../Screens/Home";

const Drawer=createDrawerNavigator();
const DrawerNavigator=()=>{

    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator}/>
            <Drawer.Screen name="Details" component={DetailsNavigator}/>

        </Drawer.Navigator>
    );
}
export default DrawerNavigator;