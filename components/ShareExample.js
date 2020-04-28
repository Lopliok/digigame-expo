import React, { Component } from "react";
import { Share, Button } from "react-native";

export class ShareButton extends Component {
  onShare = async () => {
    try {
      const result = await Share.share({
        message: this.props.text,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return <Button onPress={this.onShare} title="Použít" />;
  }
}
