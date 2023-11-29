import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

export default function CharacterBodyScreen() {
  const { height, width } = Dimensions.get("window");

  return (
    <View style={{ height: height / 2, width: width }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <Text style={styles.subSpec}>Licence: The Witcher</Text>
        <Text style={styles.subSpec}>XXXXX Favorites</Text>
      </View>
      <View style={{ marginHorizontal: 15, marginTop: 15 }}>
        <View>
          <Text style={styles.title}>Apparition</Text>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: "white" }}>{`\u2022`} The Witcher 1</Text>
            <Text style={{ color: "white" }}>{`\u2022`} The Witcher 2</Text>
            <Text style={{ color: "white" }}>{`\u2022`} The Witcher 3</Text>
            <Text style={{ color: "white" }}>{`\u2022`} The Witcher 4</Text>
          </View>
        </View>
        <View>
          <Text style={styles.title}>Informations</Text>
          <Text style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur. Vulputate at scelerisque
            aliquet. Lorem ipsum dolor sit amet consectetur. Vulputate at
            scelerisque aliquet. Lorem ipsum dolor sit amet consectetur.
            Vulputate at scelerisque aliquet.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subSpec: {
    color: "white",
    fontWeight: "bold",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#C6C6C6",
    marginTop: 15,
    marginBottom: 7,
  },
});
