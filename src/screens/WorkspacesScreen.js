import React from "react";
import { StyleSheet, Text, View } from "react-native";

import PopupInfoBanner from "../components/PopupInfoBanner";

import { Avatar, List } from "react-native-paper";

export default class WorkspacesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { workspaces: this.props.workspaces };
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

    const WORKSPACES = [
      { name: "Kollektiv", isOwner: true },
      { name: "Hjemme", isOwner: false }
    ];

    const isWorkspaceOwner = workspace => workspace.isOwner;

    const managingWorkspaces = WORKSPACES.filter(isWorkspaceOwner);
    const joinedWorkspaces = WORKSPACES.filter(w => !isWorkspaceOwner(w));

    //const iconicon = makeIcon(true, 'list');
    return (
      <>
        {
          //this.state.workspaces.length <= 0 ? (
          // <PopupInfoBanner
          //   visible={true}
          //   message={"You are currently without a workspace"}
          //   confirmLabel={"Add a workspace"}
          //   confirmAction={() => {
          //     this.state.workspaces.add(["test"]);
          //   }}
          //   ignoreLabel={"Not now"}
          //   icon="exclamation"
          // />
          // ) : (
          <List.Section>
            {managingWorkspaces.length > 0 && (
              <>
                <List.Subheader>Workspaces you manage</List.Subheader>
                {managingWorkspaces.map((workspace, index) => {
                  return <List.Item
                    key={workspace + index.toString()}
                    title={'test'}
                    left={() => <List.Icon icon="folder" />}
                  />;
                })}
              </>
            )}

            <List.Subheader>Workspaces you are part of</List.Subheader>
            {joinedWorkspaces.map((workspace, index) => {
              return <List.Item
                key={workspace + index.toString()}
                title={workspace.name}
                left={() => <List.Icon icon="folder" />}
              />;
            })}
          </List.Section>
          //)
        }
      </>
    );
  }
}

WorkspacesScreen.defaultProps = {
  workspaces: [
    { name: "Kollektiv", isOwner: true },
    { name: "Hjemme", isOwner: false }
  ]
};
