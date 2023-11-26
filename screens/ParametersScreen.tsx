import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Feather } from "@expo/vector-icons";
import { type itemNavigation } from "../types";
import styles from "./ParametersScreenStyle.js";

export default function ParametersScreen({ navigation }): React.JSX.Element {
  const [categoryList] = useState<itemNavigation[]>([
    {
      id: 1,
      name: "Modifier mes informations",
      url: "UserEditScreen",
      category: "contenu",
      nameIcon: "edit",
    },
    {
      id: 2,
      name: "Sécurité",
      url: "SecurityScreen",
      category: "contenu",
      nameIcon: "unlock",
    },
    {
      id: 3,
      name: "Aide",
      url: "HelpScreen",
      category: "informations complémentaires",
      nameIcon: "message-circle",
    },
    {
      id: 4,
      name: "A propos",
      url: "AboutScreen",
      category: "informations complémentaires",
      nameIcon: "help-circle",
    },
    {
      id: 5,
      name: "Déconnexion",
      url: "LogOut",
      category: "autre",
      nameIcon: "log-out",
    },
  ]);

  function renderCategoryList(
    item: itemNavigation,
    _index: number
  ): React.JSX.Element {
    return (
      <TouchableOpacity
        onPress={() => {
          if (item.url === "LogOut") {
            navigation.reset({
              index: 1,
              routes: [{ name: item.url }],
            });
          } else navigation.navigate(item.url, {});
        }}
      >
        <View style={[styles.blockParameter]}>
          <Feather
            name={item.nameIcon}
            size={20}
            style={{
              color: "#171717",
            }}
          />
          <Text style={[{ marginLeft: 10 }, styles.subCategory]}>
            {item.name}
          </Text>
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              alignItems: "flex-end",
            }}
          >
            <Entypo
              name="chevron-right"
              size={20}
              style={[
                styles.icon,
                {
                  color: "#171717",
                  backgroundColor: "#e9ecef",
                },
              ]}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  const categories = categoryList.reduce((element, item) => {
    if (item.category !== undefined) {
      if (element[item.category] === undefined) {
        element[item.category] = [];
      }
      element[item.category].push(item);
    }
    return element;
  }, {});

  return (
    <ScrollView
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}
    >
      <SafeAreaView
        edges={["bottom", "left", "right"]}
        style={[
          styles.container,
          {
            marginTop: 20,
          },
        ]}
      >
        {Object.keys(categories).map((category, index) => {
          return (
            <View key={index} style={{ backgroundColor: "transparent" }}>
              <View style={styles.titleCategory}>
                <Text style={styles.textCategory}>{category}</Text>
              </View>
              <FlatList
                scrollEnabled={false}
                data={categories[category]}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) =>
                  renderCategoryList(item, index)
                }
              />
            </View>
          );
        })}
      </SafeAreaView>
    </ScrollView>
  );
}
