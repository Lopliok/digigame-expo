import React, { useContext, FunctionComponent } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Store, { withContext } from "../../context/Store";
import { Stores, IContext } from "../../context";

export type Props = IContext & {};

const HeaderLoader: FunctionComponent<any> = ({ context }: Props) => {
  const loading = context?.[Stores.loading].loading;

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="small" color="#fff" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default withContext(HeaderLoader);
