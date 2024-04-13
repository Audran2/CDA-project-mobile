import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Feather } from "@expo/vector-icons";
import { colors } from "../assets/utils/_colors";
import { type itemNavigation } from "../types";
import styles from "./ParametersScreenStyle.js";

export default function ParametersScreen({
  navigation,
}: {
  navigation: NavigationProp<any>;
}): React.JSX.Element {
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
      name: "A propos",
      url: "AboutScreen",
      category: "informations complémentaires",
      nameIcon: "help-circle",
    },
    {
      id: 4,
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
              routes: [{ name: "LoginScreen" }],
            });
          } else navigation.navigate(item.url, {});
        }}
      >
        <LinearGradient
          style={[styles.blockParameter]}
          start={{ x: 0.9, y: 0.5 }}
          end={{ x: 0.2, y: 0.5 }}
          colors={["white", "transparent"]}
        >
          <Feather
            name={item.nameIcon}
            size={20}
            style={{
              color: "white",
            }}
          />
          <Text style={{ marginLeft: 10, color: "white" }}>{item.name}</Text>
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
        </LinearGradient>
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
    <LinearGradient
      style={{ flex: 1 }}
      start={{ x: 0.5, y: 0.8 }}
      end={{ x: 0.5, y: 0 }}
      colors={[colors.darkblue, colors.blue]}
    >
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
    </LinearGradient>
  );
}
