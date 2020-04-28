import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { ShareButton } from "../ShareExample";

export default function TextBlock({ text }) {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>

      <View style={styles.bottom}>
        <Text>Likes: 3</Text>

        <ShareButton text={text}></ShareButton>
      </View>
    </View>
  );
}

TextBlock.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 10,
  },
  bottom: {
    paddingTop: 15,
  },
});
