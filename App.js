import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from "./screen/HomeScreen";
import RegionScreen from "./screen/RegionScreen";

const navigator = createStackNavigator(
  {
    Home : HomeScreen,
    Region : RegionScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "COVID MAROC ",
    },
  }
);  



export default createAppContainer(navigator);




