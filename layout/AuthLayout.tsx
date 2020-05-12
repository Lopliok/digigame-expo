import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MonoText } from "../components/StyledText";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import TextBlock from "../components/TextBlock";
import BottomTabNavigator, { Link } from "../navigation/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { withContext } from "../context/Store";
import { Stores } from "../context/index";

const AuthLayout = ({ children, navigation, context }) => {
    const opened = context?.[Stores.myPosts]?.opened

  let links = [
    {
      title: "Otevíráky",
      address: "",
      icon: "exclamation",
      action: () => navigation.navigate("Home"),
    },
    {
      title: "Mé hlášky",
      address: "",
      icon: "key",
      action: () => navigation.navigate("MyPosts"),
    },
    { title: "Teorie", address: "", icon: "bars", action: () => navigation.navigate("Theory") },
    {
      title: "Více",
      address: "",
      icon: "ellipsis-v",
      action: () => {
        context?.set(Stores.user, { username: null, id: null });
      },
    },
  ];

  return (
    <View style={styles.container}>
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : null}
        keyboardVerticalOffset={!opened ? 0 :80}
        style={{ flex: 1 }}
      >
      {children}
      </KeyboardAvoidingView>
      <BottomTabNavigator links={links} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    height: "100%",
    display: "flex",
  },
});

export default withContext<any>(AuthLayout);
