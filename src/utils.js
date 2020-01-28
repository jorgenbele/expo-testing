import React from "react";

import Iconicon from './components/Iconicon'

export const makeIcon = (name, focused) => {
  return (
    <Iconicon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-${name}${focused ? "" : "-outline"}`
          : `md-${name}`
      }
    />
  );
};
