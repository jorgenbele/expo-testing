import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
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



const makeNavigationOptions = (label, iconName) => {
  return {
    navigationOptions: {
      tabBarLabel: label,
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
    Lists: { screen: ListsScreen, ...makeNavigationOptions('Lists', 'list')},
    Settings: { screen: SettingsScreen, ...makeNavigationOptions('Settings', 'settings') }
  },
  {
    initialRouteName: "Lists",
    activeColor: "#F44336"
  }
);

const BottomTabContainer = createAppContainer(BottomTabNavigator);
