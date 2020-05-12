import React, { Component } from "react";
import { Share, Button } from "react-native";
import { Entypo } from "@expo/vector-icons";

interface Props {
  text: string;
  style: {};
}

export class ShareButton extends Component<Props> {
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
    return (
      <Entypo.Button
        name="share"
        onPress={this.onShare}
        color="black"
        backgroundColor="white"
      />
    );
  }
}
