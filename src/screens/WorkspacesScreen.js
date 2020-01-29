import React from "react";
import { StyleSheet, Text, View } from "react-native";

import PopupInfoBanner from "../components/PopupInfoBanner";

import { Avatar, List, FAB } from "react-native-paper";

import { makeListItem } from '../utils';

export default class WorkspacesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { workspaces: this.props.workspaces };
  }

  render() {
    const styles = StyleSheet.create({
      fab: {
        position: "absolute",
        margin: 16,
        right: 0,
        bottom: 0
      }
    });

    const isWorkspaceOwner = workspace => workspace.isOwner;

    const managingWorkspaces = this.state.workspaces.filter(isWorkspaceOwner);
    const joinedWorkspaces = this.state.workspaces.filter(
      w => !isWorkspaceOwner(w)
    );

    //const iconicon = makeIcon(true, 'list');
    return (
      <>
        {this.state.workspaces.length <= 0 ? (
          // Display a banner when no workspaces are added
          <PopupInfoBanner
            visible={true}
            message={"You are currently without a workspace"}
            confirmLabel={"Add a workspace"}
            confirmAction={() => {
              this.state.workspaces.add(["test"]);
            }}
            ignoreLabel={"Not now"}
            icon="exclamation"
          />
        ) : (
          <List.Section>
            {managingWorkspaces.length > 0 && (
              <>
                <List.Subheader>Workspaces you manage</List.Subheader>
                {managingWorkspaces.map((workspace, index) => {
                  return (
                    makeListItem(workspace.name, workspace.name)
                    //<List.Item
                    //  key={workspace + index.toString()}
                    //  title={workspace.name}
                    //  left={() => <List.Icon icon={this.props.workspaceIcon} />}
                    ///>
                  );
                })}
              </>
            )}

            <List.Subheader>Workspaces you are part of</List.Subheader>
            {joinedWorkspaces.map((workspace, index) => {
              return (
                //<List.Item
                //  key={workspace + index.toString()}
                //  title={workspace.name}
                //  left={() => <List.Icon icon={this.props.workspaceIcon} />}
                ///>
                    makeListItem(workspace.name, workspace.name)
              );
            })}
          </List.Section>
        )}

        <FAB
          style={styles.fab}
          medium 
          icon="plus"
          onPress={() => console.log("Pressed")} // FIXME: Add authentication/creation of workspace
        />
      </>
    );
  }
}

WorkspacesScreen.defaultProps = {
  workspaceIcon: "folder",
  workspaces: [
    { name: "Kollektivet", isOwner: true },
    { name: "Hjemme", isOwner: false },
    { name: "Jobb", isOwner: false }
  ]
};
