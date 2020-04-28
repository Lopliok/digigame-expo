import * as React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import TextBlock from "../components/TextBlock/index";

const data = [
  {
    id: "fsdf",
    text: "Jsi moc sexy ale taky moc daleko",
  },
  {
    id: "fsdaaf",
    text: "Jsi moc sexy ale taky moc daleko",
  },
  {
    id: "fsdeef",
    text: "Jsi moc sexy ale taky moc daleko",
  },
];

const onShare = async (text) => {
  try {
    const result = await Share.share({
      message: "Fdsfdf",
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

export default function DigiScreen() {
  return (
    <View style={styles.container}>
      {data.map((it) => (
        <TextBlock text={it.text} key={it.id} />
      ))}
    </View>
  );
}

DigiScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
