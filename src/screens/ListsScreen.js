import React from "react";
import { StyleSheet, Text, View } from "react-native";

import PopupInfoBanner from "../components/PopupInfoBanner";

export default class ListsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {lists: this.props.lists}
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      }
    });

    return (
      <>
        {this.state.lists.length <= 0 &&
          <PopupInfoBanner visible={true} 
              message={'You have no lists'} 
              confirmLabel={'Add a list'} 
              confirmAction={() => {this.state.lists = ['test']}}
              ignoreLabel={'Not now'}/> 
        }
      </>
    );
  }
}

ListsScreen.defaultProps = {
  lists: [],
}