import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { BottomNavType } from "../types.js";
import { useAddToGameList } from "../hooks/useDataFetching.js";
import styles from "./BottomNavStyle.js";

export default function BottomNav({ addList = false, GameID }: BottomNavType) {
  const navigation = useNavigation();
  const [userGameList, setUserGameList] = useState([]);

  const addToLike = () => {
    console.log("Adding to like...");
  };

  const addToList = async () => {
    try {
      const response = await useAddToGameList(
        "65b62a93d1aef4c0e8f69a65",
        GameID,
        "completed",
        8
      );

      setUserGameList([
        ...userGameList,
        { gameId: GameID, etat: "completed", note: 8 },
      ]);
    } catch (error) {
      console.log(error);
    }
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
