import * as React from 'react';
import { Image } from 'react-native';
import { Avatar, Banner } from 'react-native-paper';

export default class WorkspaceListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {visible: true}
  }

  render() {
    return (

    );
  }
}

WorkspaceListItem.defaultProps = {
    name: 'Unknown',
    members: [],
    owner: false,
    avatar: <Avatar.Text size={24} label="UK" />,
}