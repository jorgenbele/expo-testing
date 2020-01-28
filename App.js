import React from "react";
import { StyleSheet, Text, View, Platform, ColorPropType } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import store from "./src/redux/store";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";

import TabBarIcon from './src/components/TabBarIcon'

import ListsScreen from "./src/screens/ListsScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <BottomTabContainer />
      </PaperProvider>
    </StoreProvider>
  );
}



const makeNavigationOptions = (label, iconName, color) => {
  return {
    navigationOptions: {
      tabBarLabel: label,
      tabBarColor: color,
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === 'ios'
              ? `ios-${iconName}${focused ? '' : '-outline'}`
              : `md-${iconName}`
          }
        />
      )
    }
  };
};

const BottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Lists: { screen: ListsScreen, ...makeNavigationOptions('Lists', 'list', '#00796b')},
    Settings: { screen: SettingsScreen, ...makeNavigationOptions('Settings', 'settings', '#c51162') }
  },
  {
    initialRouteName: "Lists",
    shifting: true,
    //activeColor: "#F44336"
  }
);

const BottomTabContainer = createAppContainer(BottomTabNavigator);
