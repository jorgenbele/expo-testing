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

import { ListItem } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
//import LinearGradient from 'react-native-linear-gradient'; // Only if no expo

export const gradientsMap = {
  redOrange: {
      colors: ["#FF9800", "#F44336"],
      start: [1, 0],
      end: [0.2, 0]
  },
  blue: {
      colors: ["#1A6DC4", "#10334B"],
      start: [1, 0],
      end: [0.2, 0]
  },
  green: {
      colors: ["#4CA856", "#235230"],
      start: [1, 0],
      end: [0.2, 0]
  },
  purple: {
      colors: ["#A934C5", "#4B059F"],
      start: [1, 0],
      end: [0.2, 0]
  },
};

export const gradients = Object.keys(gradientsMap).map((k) => gradientsMap[k]);

export const uniqueColor = (title, subtitle) => {
  const c = (title.charCodeAt(0) + subtitle.charCodeAt(0))/2;
  console.log(c);
  return gradients[c % gradients.length];
}

export const makeListItem = (title, subtitle) => (
  // FROM: https://react-native-elements.github.io/react-native-elements/docs/listitem.html
  <ListItem
    key={title+subtitle} // FIXME: make unique 
    Component={TouchableScale}
    friction={90} //
    tension={100} // These props are passed to the parent component (here TouchableScale)
    activeScale={0.95} //
    linearGradientProps={uniqueColor(title, subtitle)}
    //ViewComponent={LinearGradient} // Only if no expo
    leftAvatar={{ rounded: true, title: title[0] }}
    title={title}
    titleStyle={{ color: "white", fontWeight: "bold" }}
    subtitleStyle={{ color: "white" }}
    subtitle={subtitle}
    chevron={{ color: "white" }}
  />
);

export const showMessage = (msg) => {

}