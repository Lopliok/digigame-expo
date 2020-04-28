import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import useLinking from "./navigation/useLinking";
import ApolloClient from "apollo-boost";
import AppWrapper from "./containers/AppWrapper";
import Router from "./Router";
import { StoreProvider } from "./context/Store";

const client = new ApolloClient({
  uri: "http://10.0.0.65:3001/graphql",
});

export default function App(props) {
  /*   const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    console.log("aaa");
    loadResourcesAndDataAsync();
  }); */

  return (
    <ApolloProvider client={client}>
      <StoreProvider defaultValue={{ user: { username: null, id: null } }}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </StoreProvider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
