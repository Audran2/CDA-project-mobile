import React from "react";
import { StyleSheet, View, Text } from "react-native";
import isEmpty from "lodash/isEmpty";
import GameCard from "../../components/searchScreen/GameCard";

interface ItemProps {
  item: any;
}

const AgendaItem = (props: ItemProps) => {
  const { item } = props;

  if (isEmpty(item)) {
    return (
      <View style={styles.emptyItem}>
        <Text style={styles.emptyItemText}>
          Aucun jeu prévu pour les prochains jours
        </Text>
      </View>
    );
  }

  return (
    <View style={{ alignItems: "center", backgroundColor: "transparent" }}>
      <GameCard {...item} />
    </View>
  );
};

export default React.memo(AgendaItem);

const styles = StyleSheet.create({
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  emptyItemText: {
    color: "lightgrey",
    fontSize: 14,
  },
});
