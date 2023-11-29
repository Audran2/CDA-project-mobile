import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";

export default function AboutUser() {
  const { height, width } = Dimensions.get("window");

  const navigation = useNavigation();

  const handleUserIconPress = () => {
    navigation.navigate("UserInfoScreen" as never);
  };

  const friendsList = [
    require("../../assets/images/ballistic.webp"),
    require("../../assets/images/ballistic.webp"),
    require("../../assets/images/ballistic.webp"),
  ];

  return (
    <View style={[styles.container, { width: width, height: height / 5 }]}>
      <View>
        <Text style={styles.title}>A propos</Text>
        <Text style={{ color: "white" }}>
          Lorem ipsum dolor sit amet consectetur. Vulputate at scelerisque
          aliquet.
        </Text>
      </View>
      <View>
        <Text style={styles.title}>Amis</Text>
        <View style={styles.friendsList}>
          {friendsList.map((friend, index) => (
            <TouchableOpacity
              key={index}
              onPress={handleUserIconPress}
              style={[
                styles.iconUser,
                { position: "relative", left: -10 * index },
              ]}
            >
              <Image
                source={friend}
                resizeMode="cover"
                style={{ width: "100%", height: "100%" }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginHorizontal: 20,
  },

  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#C6C6C6",
    marginTop: 10,
    marginBottom: 5,
  },

  friendsList: {
    flexDirection: "row",
  },

  iconUser: {
    height: 40,
    width: 40,
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
