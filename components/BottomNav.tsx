import React, { useState } from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Modal,
  Text,
  FlatList,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import LabelTemplate from "./FormTemplate/LabelTemplate";
import { BottomNavType } from "../types.js";
import { useAddToGameList } from "../hooks/useDataFetching.js";
import styles from "./BottomNavStyle.js";

export default function BottomNav({ addList = false, GameID }: BottomNavType) {
  const [userGameList, setUserGameList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [completionStatus, setCompletionStatus] = useState("inProgress");
  const [note, setNote] = useState(5);

  const statusTranslations = {
    inProgress: "En cours",
    completed: "Complété",
    abandoned: "Abandonné",
    pending: "En attente",
    planned: "Prévu",
  };

  const noteTranslations = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
  };

  const addToLike = () => {
    console.log("Adding to like...");
  };

  const addToList = () => {
    setModalVisible(true);
  };

  const handleAddToList = async () => {
    try {
      const response = await useAddToGameList(
        "65b62a93d1aef4c0e8f69a65",
        GameID,
        completionStatus,
        note
      );

      const newGameListItem = { gameId: GameID, etat: completionStatus, note };
      setUserGameList([...userGameList, newGameListItem]);
      setModalVisible(false);
    } catch (error) {
      console.error(error);
    }
  };

  const renderSelector = (data, onSelect, selectedValue, translations) => (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onSelect(item)}
          style={{
            padding: 10,
            marginRight: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: selectedValue === item ? "blue" : "gray",
          }}
        >
          <Text>{translations[item]}</Text>
        </TouchableOpacity>
      )}
    />
  );

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.btnStyle} onPress={addToLike}>
          <Entypo name="heart-outlined" size={28} color="black" />
        </TouchableOpacity>
      </View>
      {addList && (
        <View>
          <TouchableOpacity style={styles.btnStyle} onPress={addToList}>
            <Entypo name="add-to-list" size={28} color="black" />
          </TouchableOpacity>
        </View>
      )}

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={styles.closeButton}
                >
                  <Entypo name="cross" size={24} color="black" />
                </TouchableOpacity>
                <View>
                  <LabelTemplate name="Statut" required />
                  {renderSelector(
                    Object.keys(statusTranslations),
                    (selectedStatus) => setCompletionStatus(selectedStatus),
                    completionStatus,
                    statusTranslations
                  )}
                </View>
                <View>
                  <LabelTemplate name="Note" required />
                  {renderSelector(
                    Object.keys(noteTranslations),
                    (selectedNote) => setNote(selectedNote),
                    note.toString(),
                    noteTranslations
                  )}
                </View>

                <TouchableOpacity onPress={handleAddToList}>
                  <Text>Sauvegarder</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
