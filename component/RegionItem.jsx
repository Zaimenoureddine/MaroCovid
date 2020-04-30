import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RegionItem = ({name , cases}) => {
  return (
    <View style={styles.cardrow}>
    <Text style={styles.txt}>{name}</Text>
    <Text style={styles.txt}>{cases}</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  cardrow : {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  txt : {
    fontSize: 20,
    fontWeight: "normal",
    color: "gray",
    fontFamily: "Light",
  }
});

export default RegionItem;
