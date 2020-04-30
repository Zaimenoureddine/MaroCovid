import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import apiResults from "../hooks/apiResults";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import CardStats from "../component/CardStats";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ParallaxScrollView from "react-native-parallax-scroll-view";

const fetchFonts = () => {
  return Font.loadAsync({
    Regular: require("../assets/fonts/Poppins-Regular.ttf"),
    Light: require("../assets/fonts/Poppins-Light.ttf"),
    Black: require("../assets/fonts/Poppins-Black.ttf"),
  });
};

const HomeScreen = ({navigation}) => {
  const [results, getApi, errorMessage] = apiResults();
  const [dataLoaded, setdataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setdataLoaded(true)}
      />
    );
  }

  return (
    
    <ParallaxScrollView
      backgroundColor="white"
      parallaxHeaderHeight={200}
      renderForeground={() => (
        <View>
          <ImageBackground
            blurRadius={8}
            source={require("../assets/18704.jpg")}
            style={{
              height: 300,
              width: 470,
            }}
          >
            <Text style={styles.texthead}>Les statistiques en temps réel</Text>
          </ImageBackground>
        </View>
      )}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={()=> navigation.navigate('Region')}>
          <View
            style={{
              borderRadius: 8,
              borderColor: "gray",
              backgroundColor: "#e9fdf2",
              shadowColor: "#a6a6a6",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.5,
              shadowRadius: 5,
              elevation: 4,
              paddingHorizontal : 8,
              paddingVertical : 8,
              flexDirection : 'row',
              alignItems : 'center',
              alignSelf: 'center',
              position : 'absolute' ,
              top : -34
            }}
          >
            <Text>Statistiques Par Regions :</Text>
            <MaterialCommunityIcons name="map-marker-circle" size={30} />
          </View>
        </TouchableOpacity>
        <CardStats
          data={{
            titleOne: "Cas Confirmés :",
            titleTwo: "Cas Confirmés du jour :",
            all: results.cases,
            new: results.todayCases,
            backgroundColor: "#ffffff",
          }}
          icon={{ name: "briefcase-plus-outline", color: "#ff7800" }}
        />
        <CardStats
          data={{
            titleOne: "Cas Décédés :",
            titleTwo: "Nouveaux Dècès :",
            all: results.deaths,
            new: results.todayDeaths,
            backgroundColor: "#ffe1e0",
          }}
          icon={{ name: "biohazard", color: "red" }}
        />
        <View style={styles.containerrow}>
          <View style={styles.cardstats}>
            <CardStats
              style={styles.cardstats}
              data={{
                titleOne: "Cas Malades",
                titleTwo: null,
                all: results.active,
                new: results.todayDeaths,
                backgroundColor: "#fff",
              }}
              icon={{ name: "bed-empty", color: "#ffa800" }}
            />
          </View>
          <View style={styles.cardstats}>
            <CardStats
              style={styles.cardstats}
              data={{
                titleOne: "Cas Rètablis",
                titleTwo: null,
                all: results.recovered,
                new: results.todayDeaths,
                backgroundColor: "#e9fdf2",
              }}
              icon={{ name: "emoticon-happy-outline", color: "#18d36a" }}
            />
          </View>
        </View>
        <CardStats
          data={{
            titleOne: "Statistiques des cas testés : ",
            titleTwo: "Cas Testés negatifs :",
            all: results.tests,
            new: results.tests - results.cases,
            backgroundColor: "#ffffff",
          }}
          icon={{ name: "test-tube", color: "red" }}
        />
      </View>
    </ParallaxScrollView>
    // </View>
  );
};



const styles = StyleSheet.create({
  container: {
    position: "relative",
    top: -30,
  },

  containerrow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  cardstats: {
    flex: 1,
  },
  texthead: {
    fontSize: 21,
    fontWeight: "bold",
    color: "black",
    fontFamily: "Light",
    marginLeft: 25,
    marginTop: 10,
  },
});

export default HomeScreen;
