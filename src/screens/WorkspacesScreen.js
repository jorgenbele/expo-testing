import React from "react";
import { StyleSheet, Text, View } from "react-native";

import PopupInfoBanner from "../components/PopupInfoBanner";

export default class WorkspacesScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {workspaces: this.props.workspaces}
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
        {this.state.workspaces.length <= 0 &&
          <PopupInfoBanner visible={true} 
              message={'You are currently without a workspace'} 
              confirmLabel={'Add a workspace'} 
              confirmAction={() => {this.state.workspaces = ['test']}}
              ignoreLabel={'Not now'}/> 
        }
      </>
    );
  }
}

WorkspacesScreen.defaultProps = {
  workspaces: [],
}