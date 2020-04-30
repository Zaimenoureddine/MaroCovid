import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Font from "expo-font";

const CardStats = ({ data, icon }) => {
  return (
    <View style={{ ...styles.card, backgroundColor: data.backgroundColor }}>
      <Text style={styles.title}>{data.titleOne}</Text>

      <View style={styles.cardrow}>
        <Text style={styles.number}>{data.all}</Text>
        <MaterialCommunityIcons
          style={{ ...styles.icon, color: icon.color }}
          name={icon.name}
        />
      </View>
      { data .titleTwo !== null ?
      <View
        style={{ borderBottomColor: "gray", borderBottomWidth: 0.3 }}
      ></View> : null }
      
     
      { data.titleTwo !== null ? <View style={styles.cardrow}>
        <Text style={{ ...styles.title, flex: 8, paddingLeft: 0 }}>
          {data.titleTwo}
        </Text>
        <MaterialCommunityIcons
          style={{ ...styles.icon, color: icon.color, flex: 1 }}
          name="chart-multiline"
        />
        <Text style={{ ...styles.title, flex: 2, color: icon.color  }}>
          {data.new}
        </Text>
      </View> : null }
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    borderColor: "gray",
    backgroundColor: "#ffff",
    marginVertical: 8,
    marginHorizontal: 10,
    shadowColor: "#a6a6a6",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 4,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "normal",
    color: "gray",
    paddingLeft: 10,
    fontFamily: "Light",
  },
  number: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  cardrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  icon: {
    fontSize: 33,
    color: "#ffa800",
  },
});

export default CardStats;
