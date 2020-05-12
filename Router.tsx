import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "./screens/ProfileScreen";
import { withContext } from "./context/Store";
import { IContext, Stores } from "./context/index";
import AuthLayout from "./layout/AuthLayout";
import MyPostsScreen from "./screens/MyPostsScreen";
import RegisterScreen from "./screens/RegisterScreen";
import TheoryScreen from "./screens/TheoryScreen";
import TheoryDetailScreen from "./screens/TheoryDetailScreen";
import HeaderLoader from "./components/HeaderLoader";
import { routeOptions } from "./routeOpts";

const Stack = createStackNavigator();

interface Props extends IContext {}

let options = {
  headerStyle: {
    backgroundColor: "#f4511e",
  },
  headerRight: HeaderLoader,
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const Router = ({ context }: Props) => {
  const userId = context?.[Stores.user]?.id;

  return (
    <Stack.Navigator>
      {!userId ? (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={routeOptions.public.log}
          />
          <Stack.Screen
            options={routeOptions.public.reg}
            name="SignUp"
            component={RegisterScreen}
          />
          {/*    <Stack.Screen name="ResetPassword" component={ResetPassword} /> */}
        </>
      ) : (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={routeOptions.auth.openers}
          />
          <Stack.Screen
            name="MyPosts"
            component={MyPostsScreen}
            options={routeOptions.auth.myPosts}
          />
          <Stack.Screen
            name="Theory"
            component={TheoryScreen}
            options={routeOptions.auth.theory}
          />
          <Stack.Screen
            name="TheoryDetail"
            component={TheoryDetailScreen}
            options={routeOptions.auth.detail}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

Router.getDerivedStateFromError = (err) => {
  console.log(err);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default withContext<any>(Router);

/* isSignedIn ? (
  <>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
  </>
) : (
  <>
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </>
) */
