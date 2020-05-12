import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { useMutation } from "@apollo/react-hooks";
import { withContext } from "../context/Store";
import { IContext, Stores } from "../context/index";
import { useSignUpMutation } from "../generated/graphql";

interface Props extends IContext {}

function RegisterScreen({ context }: Props) {
  const [state, setState] = React.useState({ email: "", password: "" });
  const [addTodo, client] = useSignUpMutation();

  const login = async () => {
    try {
      const res = await addTodo({ variables: state });

      // console.log(context, res.data);
      context?.set(Stores.user, {
        username: res.data.signup.email,
        id: res.data.signup.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback
      style={{ width: "100%", height: "100%" }}
      onPress={Keyboard.dismiss}
    >
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.heading}>Registrace</Text>

          <TextInput
            onChangeText={(text) => {
              setState({ ...state, email: text });
            }}
            style={styles.input}
            textContentType="emailAddress"
            placeholder="Email"
          />
          <TextInput
            textContentType="password"
            secureTextEntry={true}
            onChangeText={(text) => {
              setState({ ...state, password: text });
            }}
            style={styles.input}
            placeholder="Heslo"
          />
          <Button onPress={login} title="Registrovat"></Button>
        </View>
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
    padding: 30,
    height: "100%",
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

export default withContext(RegisterScreen);
