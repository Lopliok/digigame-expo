import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Button } from "galio-framework";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { useMutation } from "@apollo/react-hooks";
import { withContext } from "../context/Store";
import { IContext, Stores } from "../context/index";
import { ActivityIndicator } from "react-native-paper";
import { useLoginMutation } from "../generated/graphql";

interface Props extends IContext {
  navigation: any;
}

function LoginScreen({ context, navigation }: Props) {
  const [state, setState] = React.useState({ email: "", password: "" });
  const [addTodo, loginClient] = useLoginMutation();

  const login = async () => {
    try {
      const res = await addTodo({ variables: state });

      // console.log(context, res.data.login.email);
      context?.set(Stores.user, {
        username: res.data.login.email,
        id: res.data.login.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback
      style={{ width: "100%", height: "50%" }}
      onPress={Keyboard.dismiss}
    >
      <View style={styles.container}>
        {loginClient.loading ? (
          <View>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text style={{ paddingTop: 30 }}>Přihlašování</Text>
          </View>
        ) : (
          <>
            <View style={styles.form}>
              <Text style={styles.heading}>Přihlášení</Text>
              <TextInput
                onChangeText={(text) => {
                  setState({ ...state, email: text });
                }}
                style={styles.input}
                autoCompleteType="email"
                textContentType="emailAddress"
                placeholder="Email"
              />
              <TextInput
                textContentType="password"
                autoCompleteType="password"
                secureTextEntry={true}
                onChangeText={(text) => {
                  setState({ ...state, password: text });
                }}
                style={styles.input}
                placeholder="Heslo"
              />
              <Button style={{ width: "100%" }} onPress={login} color="success">
                Přihlásit
              </Button>
            </View>

            <View
              style={{
                paddingTop: 40,
              }}
            >
              <Button
                color="#50C7C7"
                shadowless
                round
                onPress={() => navigation.navigate("SignUp")}
              >
                Registrace
              </Button>
            </View>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    textAlign: "center",
    paddingBottom: 20,
  },
  container: {
    padding: 20,
    height: "70%",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    backgroundColor: "white",
    width: "90%",
    padding: 30,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 35,
  },
});

export default withContext(LoginScreen);
