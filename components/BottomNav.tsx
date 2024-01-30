import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";
import { BottomNavType } from "../types.js";
import styles from "./BottomNavStyle.js";

export default function BottomNav({ addList = false, GameID }: BottomNavType) {
  const navigation = useNavigation();
  const [userGameList, setUserGameList] = useState([]);

  const addToLike = () => {
    console.log("Adding to like...");
  };

  const addToList = async () => {
    try {
      const response = await axios.post(
        "http://192.168.1.90:3000/api/gameList",
        {
          userId: "65b62a93d1aef4c0e8f69a65",
          gameId: GameID,
          etat: "completed",
          note: 8,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Server Response:", response.data);

      if (response.status === 200) {
        // Update the local state without Redux
        setUserGameList([
          ...userGameList,
          { gameId: GameID, etat: "completed", note: 8 },
        ]);
        console.log("Game added to the list successfully!");
      } else {
        console.error(
          "Failed to add game to the list. Server response:",
          response.status,
          response.data
        );
      }
    } catch (error) {
      console.error("Error adding game to the list:", error);
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
