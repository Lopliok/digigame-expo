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
  FlatList,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Title } from "react-native-paper";

import { MonoText } from "../components/StyledText";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import TextBlock from "../components/TextBlock";
import AuthLayout from "../layout/AuthLayout";
import { HeaderTitle } from "@react-navigation/stack";
import { withContext } from "../context/Store";
import { IContext, Stores } from "../context/index";
import { useArticleQuery } from "../generated/graphql";
import useGlobalLoader from "../hooks/useGlobalLoader";

interface Props extends IContext {
  navigation: any;
}

const TheoryDetailScreen = ({ navigation, context }: Props) => {
  const detailID = context[Stores.theory].detailID;
  const { loading, error, data, refetch } = useArticleQuery({
    variables: { id: detailID },
  });
  useGlobalLoader(loading);

  return (
    <AuthLayout navigation={navigation}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView style={styles.container}>
          <Title style={{ fontSize: 24, paddingBottom: 20 }}>
            {data?.article.title}
          </Title>
          {data?.article?.paragraphs.map((e) => (
            <Text key={e.id} style={{ paddingBottom: 10, fontSize: 19 }}>
              {"\t"}
              {e.body}
            </Text>
          ))}
        </ScrollView>
      )}
    </AuthLayout>
  );
};

TheoryDetailScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 0,
  },
  item: {
    fontSize: 20,
    paddingBottom: 10,
  },
});

export default withContext<any>(TheoryDetailScreen);
