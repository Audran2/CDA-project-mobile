import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Defs, Polygon, Pattern, Image } from "react-native-svg";

export default function Challenge() {
  const { height, width } = Dimensions.get("window");

  const imageSource = require("../../assets/images/trooper.jpg");

  return (
    <LinearGradient
      style={[
        styles.borderLinear,
        {
          height: height / 5 + 2,
          width: width - 28,
        },
      ]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={["#fff", "#696969"]}
    >
      <View
        style={[
          styles.challengeContainer,
          { height: height / 5, width: width - 30 },
        ]}
      >
        <View style={styles.centeredVersus}>
          <Text style={{ fontFamily: "KeaniaOne", fontSize: 35 }}>VS</Text>
        </View>

        <Svg height={height / 5} width={width / 2}>
          {/* <Defs>
            <Pattern
              id="image"
              width={1}
              height={1}
              patternContentUnits="objectBoundingBox"
            >
              <Image
                href={imageSource}
                x="0"
                y="0"
                width="100%"
                height="25%"
                preserveAspectRatio="xMidYMid slice"
              />
            </Pattern>
          </Defs> */}
          <Polygon
            points={`0,0 0,${height} ${(3 * width) / 6},0 ${width / 5},0`}
            // fill="url(#image)"
            fill="lightgray"
          />
        </Svg>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  borderLinear: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },

  challengeContainer: {
    position: "relative",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
  },

  centeredVersus: {
    zIndex: 1,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
});
