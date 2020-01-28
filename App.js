import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import Main from "./src/Main";
import store from "./src/redux/store";

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <Main/>
      </PaperProvider>
    </StoreProvider>
  );
}