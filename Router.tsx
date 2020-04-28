import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "./screens/ProfileScreen";
import { withContext } from "./context/Store";
import { IContext, Stores } from "./context/index";

const Stack = createStackNavigator();

interface Props extends IContext {}

const Router = ({ context }: Props) => {
  const userId = context?.[Stores.user]?.id;

  return (
    <Stack.Navigator>
      {!userId ? (
        <>
          <Stack.Screen
            name="SignIn"
            component={LoginScreen}
            options={{
              title: "Přihlášení",
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen name="SignUp" component={LoginScreen} />
          {/*    <Stack.Screen name="ResetPassword" component={ResetPassword} /> */}
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
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
