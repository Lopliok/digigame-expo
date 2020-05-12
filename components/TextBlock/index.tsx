import * as React from "react";
import { StyleSheet, Text, View, Button, Clipboard } from "react-native";
import { ShareButton } from "../ShareExample";
import { FontAwesome, Feather, Entypo } from "@expo/vector-icons";

export default function TextBlock({
  text,
  last = false,
}: {
  text: string;
  last?: boolean;
}) {
  return (
    <View style={{ ...styles.container, marginBottom: last ? 30 : 10 }}>
      <Text>{text}</Text>

      <View style={styles.bottom}>
        {/*  <Text>Likes: 3</Text> */}

        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Feather.Button
            name="copy"
            color="grey"
            backgroundColor="white"
            onPress={() => Clipboard.setString(text)}
          />
          <ShareButton style={{ width: "50%" }} text={text} />
        </View>
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
  },
  bottom: {
    paddingTop: 15,
  },
});
