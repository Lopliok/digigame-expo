import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MonoText } from "../components/StyledText";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";

const EXCHANGE_RATES = gql`
  {
    myPosts {
      title
    }
  }
`;

const HomeScreen = () => {
  const { loading, error, data, refetch } = useQuery(EXCHANGE_RATES);

  return (
    <View style={styles.container}>
      <Text>{data?.myPosts?.[0].title}khkh</Text>
    </View>
  );
};

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
  },
});

export default HomeScreen;
