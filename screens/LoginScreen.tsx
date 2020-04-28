import * as React from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { useMutation } from "@apollo/react-hooks";
import { withContext } from "../context/Store";
import { IContext, Stores } from "../context/index";

const EXCHANGE_RATES = gql`
  {
    posts {
      title
      id
      body
      author {
        id
        email
      }
    }
  }
`;

const ADD_TODO = gql`
  mutation login($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      email
      id
    }
  }
`;

interface Props extends IContext {}

function LoginScreen({ context }: Props) {
  const [state, setState] = React.useState({ email: "", password: "" });
  const [addTodo] = useMutation(ADD_TODO);

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
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.heading}>Přihlášení</Text>

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
        <Button onPress={login} title="Přihlásit"></Button>
      </View>
    </View>
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

export default withContext(LoginScreen);
