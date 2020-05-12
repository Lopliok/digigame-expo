import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Vibration,
  Button,
} from "react-native";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import useLinking from "./navigation/useLinking";
import ApolloClient from "apollo-boost";
import AppWrapper from "./containers/AppWrapper";
import Router from "./Router";
import { StoreProvider } from "./context/Store";
import { Stores } from "./context";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./theme";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

const client = new ApolloClient({
  uri: "https://textgame-be.herokuapp.com/graphql",
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
      <StoreProvider
        defaultValue={{
          [Stores.user]: { username: null, id: null },
          [Stores.myPosts]: { opened: true },
          [Stores.theory]: { detailID: null },
          [Stores.loading]: { loading: false },
        }}
      >
        <NavigationContainer>
          <PaperProvider theme={theme}>
            <Router />
          </PaperProvider>
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
