import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { BottomNavType } from "../types";
import styles from "./BottomNavStyle.js";

export default function BottomNav({ addList = false }: BottomNavType) {
  const navigation = useNavigation();

  const addToLike = () => {
    console.log("Adding to like...");
  };

  const addToList = () => {
    navigation.navigate("GradesScreen" as never);
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.btnStyle} onPress={() => addToLike()}>
          <Entypo name="heart-outlined" size={28} color="black" />
        </TouchableOpacity>
      </View>
      {addList && (
        <View>
          <TouchableOpacity style={styles.btnStyle} onPress={() => addToList()}>
            <Entypo name="add-to-list" size={28} color="black" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
