import * as React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Login from "./Login";

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

function Feed({ children }) {
  const { loading, error, data, refetch } = useQuery(EXCHANGE_RATES);

  const tryAgain = () => {
    refetch();
    console.log(data);
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    // @ts-ignore
    if (error.graphQLErrors[0]?.message?.statusCode == 401) {
      return <Login tryAgain={tryAgain}></Login>;
    } else {
      return (
        <Text>
          Error!
          {error.message}
        </Text>
      );
    }
  }

  return <View>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Feed;
