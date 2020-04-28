import * as React from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { useMutation } from "@apollo/react-hooks";

const ADD_TODO = gql`
  mutation login($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      email
      id
    }
  }
`;

function Login({ tryAgain }) {
  const [state, setState] = React.useState({ email: "", password: "" });
  const [addTodo, { data }] = useMutation(ADD_TODO);

  //console.log(data);
  if (data) {
    tryAgain();
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
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
        <Button
          onPress={() => addTodo({ variables: state })}
          title="Přihlásit"
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    width: "70%",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 35,
  },
});

export default Login;
