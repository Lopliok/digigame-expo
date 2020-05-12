import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  FlatList,
  ScrollView,
} from "react-native";

import { MonoText } from "../components/StyledText";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import TextBlock from "../components/TextBlock";
import AuthLayout from "../layout/AuthLayout";
import { HeaderTitle } from "@react-navigation/stack";
import { withContext } from "../context/Store";
import { IContext, Stores } from "../context/index";
import { useArticleSectionsQuery } from "../generated/graphql";
import useGlobalLoader from "../hooks/useGlobalLoader";
import { Card, Text } from "galio-framework";

interface Props extends IContext {
  navigation: any;
}

const TheoryScreen = ({ navigation, context }: Props) => {
  const { loading, error, data, refetch } = useArticleSectionsQuery();
  useGlobalLoader(loading);

  const openDetail = (id: string) => {
    context.set(Stores.theory, { detailID: id });
    navigation.navigate("TheoryDetail");
  };

  return (
    <AuthLayout navigation={navigation}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <ScrollView style={styles.container}>
            {data?.articleSections?.map((it) => (
              <View key={it.id}>
                <HeaderTitle style={{ fontSize: 24, paddingBottom: 20 }}>
                  {it.title}
                </HeaderTitle>

                <FlatList
                  data={it.articles.map((e) => ({ key: e.id, title: e.title }))}
                  renderItem={({ item }) => (
                    <Text
                      onPress={() => openDetail(item.key)}
                      key={item.key}
                      style={styles.item}
                    >
                      {item.title}
                    </Text>
                  )}
                />
              </View>
            ))}
          </ScrollView>
        </>
      )}
    </AuthLayout>
  );
};

TheoryScreen.navigationOptions = {
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

export default withContext<IContext>(TheoryScreen);
