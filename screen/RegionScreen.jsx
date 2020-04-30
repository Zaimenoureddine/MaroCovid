import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  ImageBackground,
} from "react-native";
import RegionItem from "../component/RegionItem";
import apiRegion from "../hooks/apiRegion";
import ParallaxScrollView from "react-native-parallax-scroll-view";

const RegionScreen = ({ navigation }) => {
  const [results, getApi, errorMessage] = apiRegion();

  return (
    <ParallaxScrollView
      backgroundColor="white"
      parallaxHeaderHeight={80}
      renderForeground={() => (
        <View>
          <View style={styles.titlecontainer}>
            <Text style={styles.title}>Cas actifs par region</Text>
          </View>
        </View>
      )}
    >
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.card}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={results}
              keyExtractor={(item) => item.region_code}
              renderItem={({ item }) => {
                return (
                  <View>
                    <RegionItem
                      name={item.region_name_en}
                      cases={item.confirmed}
                    />
                    {item !== results[results.length - 1] ? (
                      <View
                        style={{
                          borderBottomColor: "gray",
                          borderBottomWidth: 0.3,
                        }}
                      ></View>
                    ) : null}
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </View>
    </ParallaxScrollView>
  );
};
const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
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
    fontSize: 25,
    fontWeight: "bold",
    color: "gray",
    paddingLeft: 10,
    fontFamily: "Light",
  },
  titlecontainer: {
    borderRadius: 5,
    borderColor: "gray",
    backgroundColor: "#ffff",
    marginTop: 10,
    marginHorizontal: 10,
    shadowColor: "#a6a6a6",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 4,
    paddingVertical: 15,
  },
});

export default RegionScreen;
