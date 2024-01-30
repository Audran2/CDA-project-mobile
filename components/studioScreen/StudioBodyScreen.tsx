import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import GameCard from "../searchScreen/GameCard";
import { fetchDataForStudio } from "../../hooks/useDataFetching";
import { CardData } from "../../types";
import styles from "./StudioBodyStyle.js";

export default function StudioBodyScreen({ studioId }: { studioId: string }) {
  const [data, setData] = useState<CardData[]>([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const apiData = await fetchDataForStudio(studioId);
        setData(apiData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataFromApi();
  }, [studioId]);

  return (
    <View style={{ flex: 1, marginHorizontal: 25 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          marginBottom: 10,
        }}
      >
        <Text style={styles.title}>Titres</Text>
        <TouchableOpacity>
          <Feather name="filter" style={styles.iconFilter} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {data.map((game: CardData, index: number) => (
          <GameCard key={index} {...game} />
        ))}
      </ScrollView>
    </View>
  );
}
