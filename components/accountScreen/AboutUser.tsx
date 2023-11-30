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
import styles from "./AboutUserStyle.js";

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
