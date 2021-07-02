import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#0F2027", "#2C5364"],
    title: "Thunderstorm",
    subtitle: "Fucking some subtitle!",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#23074d", "#cc5333"],
    title: "Drizzle",
    subtitle: "Fucking some subtitle!",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#355C7D", "#C06C84"],
    title: "Rain",
    subtitle: "Fucking some subtitle!",
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#D3CCE3", "#E9E4F0"],
    title: "Snow",
    subtitle: "Fucking some subtitle!",
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#0F2027", "#2C5364"],
    title: "Haze",
    subtitle: "Just don't go outside.",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#0F2027", "#2C5364"],
    title: "Dust",
    subtitle: "Thanks a lot China.",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#2980B9", "#ffffff"], //
    title: "Sunny",
    subtitle: "Fucking some subtitle!",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#aa4b6b", "#3b8d99"], //
    title: "Cloud",
    subtitle: "Cloudy!Cloudy!Cloudy!",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 44,
    fontWeight: "300",
    color: "white",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
    textAlign: "left",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
