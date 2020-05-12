import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MonoText } from "../components/StyledText";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import TextBlock from "../components/TextBlock";
import AuthLayout from "../layout/AuthLayout";
import { usePostsQuery } from "../generated/graphql";
import useGlobalLoader from "../hooks/useGlobalLoader";

const HomeScreen = ({ navigation }) => {
  const { loading, error, data, refetch } = usePostsQuery();
  useGlobalLoader(loading);

  return (
    <AuthLayout navigation={navigation}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <ScrollView style={styles.container}>
            {data?.posts?.map((it, i) => (
              <TextBlock
                key={it.id}
                text={it.body}
                last={i == data.posts.length - 1}
              />
            ))}
          </ScrollView>
        </>
      )}
    </AuthLayout>
  );
};

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 0,
  },
});

export default HomeScreen;
