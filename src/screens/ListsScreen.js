import React from "react";
import { StyleSheet, Text, View } from "react-native";

import PopupInfoBanner from "../components/PopupInfoBanner";

import { Avatar, List, FAB } from "react-native-paper";

import { makeListItem } from '../utils';

export default class ListsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lists: this.props.lists };
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

    this.state.lists = [
      { name: "Kollektivfest", workspace: "Kollektivet" },
      { name: "Hjemmefest", workspace: null },
      { name: "Jobbfest", workspace: "Jobb" }
    ];

    const isPersonalList = list => list.workspace === null;
    const personalLists = this.state.lists.filter(isPersonalList);
    const sharedLists = this.state.lists.filter(l => !isPersonalList(l));

    return (
      <>
        {this.state.lists.length <= 0 ? (
          // Display a banner when no lists exists
          <PopupInfoBanner
            visible={true}
            message={
              "You currently have " +
              this.state.lists.length.toString() +
              " lists"
            }
            confirmLabel={"Create a list"}
            confirmAction={() => {
              this.state.lists.push({
                name: "Kollektiv2",
                workspace: "Kollektivet"
              });
            }}
            ignoreLabel={"Not now"}
            icon="exclamation"
          />
        ) : (
          <List.Section>
            {personalLists.length > 0 && (
              <>
                <List.Subheader>Personal lists</List.Subheader>
                {personalLists.map((list, index) => {
                  return (
                    makeListItem(list.name, list.name)
                    //<List.Item
                    //  key={list + index.toString()}
                    //  title={list.name}
                    //  left={() => <List.Icon icon={this.props.listIcon} />}
                    ///>
                  );
                })}
              </>
            )}

            <List.Subheader>Shared lists</List.Subheader>
            {sharedLists.map((list, index) => {
              return (
                makeListItem(list.name, list.workspace)
                //<List.Item
                //  key={list + index.toString()}
                //  title={list.name}
                //  left={() => <List.Icon icon={this.props.listIcon} />}
                ///>
              );
            })}
          </List.Section>
        )}

        <FAB
          style={styles.fab}
          medium
          icon="plus"
          onPress={() => {
            this.setState({lists: [{
              name: "Kollektiv2",
              workspace: "Kollektivet"
            }, ...this.state.lists], ...this.state})
            console.log("Pressed");
          }} // FIXME: Add authentication/creation of workspace
        />
      </>
    );
  }
}

ListsScreen.defaultProps = {
  listIcon: 'folder',
}