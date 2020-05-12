import { FontAwesome } from "@expo/vector-icons";
import { gql } from "apollo-boost";
import * as React from "react";
import { useMutation, useQuery } from "react-apollo";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { Button, Input } from "galio-framework"
import Collapsible from "react-native-collapsible";
import { ScrollView } from "react-native-gesture-handler";
import TextBlock from "../components/TextBlock";
import { IContext, Stores } from "../context/index";
import { withContext } from "../context/Store";
import AuthLayout from "../layout/AuthLayout";
import useGlobalLoader from "../hooks/useGlobalLoader";
import { useCreatePostMutation, useMyPostsQuery } from "../generated/graphql";
import { Notifications } from 'expo';


interface Props extends IContext {
  navigation: any;
}

const MyPostsScreen = ({ navigation, context }: Props) => {
  const { loading, error, data, refetch } = useMyPostsQuery();
  const [create, cpClient] = useCreatePostMutation();
  useGlobalLoader(loading || cpClient.loading);
  const [state, setState] = React.useState("");

  const opened = context?.[Stores.myPosts]?.opened;

  const switchOpen = () => {
    context.set(Stores.myPosts, { opened: !opened });
  };

  const save = async () => {
    try {
      const ret = await create({
        variables: { body: state, active: false, title: "header-pickup-lines" },
      });

      setState("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayout navigation={navigation}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView style={styles.container}>
          <TouchableHighlight onPress={switchOpen} style={styles.created}>
            <>
              <Text style={styles.collapseText}>Vytvořené</Text>
              <FontAwesome.Button
                color="black"
                backgroundColor="transparent"
                name={opened ? "chevron-up" : "chevron-down"}
                onPress={switchOpen}
              />
            </>
          </TouchableHighlight>
          <Collapsible collapsed={!opened}>
            {data?.myPosts?.map((it) => (
              <TextBlock key={it.id} text={it.body} />
            ))}
          </Collapsible>
          <View style={{ marginBottom: 30 }}>
            <Text style={{ fontSize: 18, paddingBottom: 20, paddingTop: 70 }}>
              Vytvořit novou hlášku:
            </Text>
            <TextInput
              placeholder="Nová hláška"
              multiline={true}
              defaultValue={state}
              onChangeText={(text) => setState(text)}
              style={{
                padding: 10,
                fontSize: 18,
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 4,
                marginBottom: 10,
              }}
            />
            <View style={{ backgroundColor: "lightblue" }}>
              <Button title="Ke schválení" onPress={save} />
            </View>
          </View>
        </ScrollView>
      )}
    </AuthLayout>
  );
};

MyPostsScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  created: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 25,
  },
  collapseText: {
    fontSize: 20,
    padding: 10,
  },
});

export default withContext<any>(MyPostsScreen);
