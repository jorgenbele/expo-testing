import * as React from "react";
import { Image } from "react-native";
import { Banner } from "react-native-paper";

// FROM: https://callstack.github.io/react-native-paper/banner.html
export default class PopupInfoBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: this.props.visible };
  }

  render() {
    return (
      <Banner
        visible={this.state.visible}
        actions={[
          {
            label: this.props.confirmLabel,
            onPress: () => {
              this.setState({ visible: false });
              this.props.confimativeAction &&
                this.props.confimativeAction(this);
            }
          },
          {
            label: this.props.ignoreLabel,
            onPress: () => {
              this.setState({ visible: false });
              this.props.confimativeAction &&
                this.props.confimativeAction(this);
            }
          }
        ]}
        icon={({ size }) => (
          <Image
            source={{
              uri: "https://avatars3.githubusercontent.com/u/17571969?s=400&v=4"
            }}
            style={{
              width: size,
              height: size
            }}
          />
        )}
      >
        {this.props.message}
      </Banner>
    );
  }
}

PopupInfoBanner.defaultProps = {
  visible: true,
  message: "default message",
  confirmLabel: "confirm",
  ignoreLabel: "ignore"
};
