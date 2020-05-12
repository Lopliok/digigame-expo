import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import TabBarIcon from "../components/TabBarIcon";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MyPostsScreen from "../screens/MyPostsScreen";
import { createStackNavigator } from "@react-navigation/stack";

export type Link = {
  title: string;
  address: string;
  icon: string;
  action: (item?: any) => {};
};

export default function BottomTabNavigator({ links }: { links: Link[] }) {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        {links.map((it) => (
          <View key={it.title}>
            <FontAwesome.Button
              name={it.icon}
              backgroundColor="red"
              onPress={it.action}
            >
              {it.title}
            </FontAwesome.Button>
          </View>
        ))}
      </View>
    </View>
  );
}

/* 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MyPostsScreen from "../screens/MyPostsScreen";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyPosts" component={MyPostsScreen} />
    </Tab.Navigator>
  );
}
 */
const styles = StyleSheet.create({
  container: {
    padding: 0,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  bar: {
    backgroundColor: "orange",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    flex: 1,
    flexDirection: "row",
  },
});
