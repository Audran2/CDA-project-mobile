import React from "react";
import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import HomeScreen from "../screens/mainScreen/HomeScreen";
import CalendarScreen from "../screens/mainScreen/CalendarScreen";
import ResearchScreen from "../screens/mainScreen/ResearchScreen";
import AccountScreen from "../screens/mainScreen/AccountScreen";
import styles from "./appNav.js";

const Tab = createBottomTabNavigator();

let { height, width } = Dimensions.get("window");

EStyleSheet.build({
  $contentWidth: width,
  $contentHeight: height,
});

const tabArray = [
  {
    name: "Home",
    label: "Accueil",
    icon: "home",
    component: HomeScreen,
  },
  {
    name: "Calendrier",
    label: "Calendrier",
    icon: "calendar",
    component: CalendarScreen,
  },
  {
    name: "Recherche",
    label: "Recherche",
    icon: "magnifying-glass",
    component: ResearchScreen,
  },
  {
    name: "Compte",
    label: "Compte",
    icon: "user",
    component: AccountScreen,
  },
];

const createAppNavigator = (defaultPage) => {
  return () => (
    <Tab.Navigator
      initialRouteName={defaultPage}
      screenOptions={{
        headerShown: true,
        tabBarStyle: [styles.tabBar],
        headerTitleAlign: "center",
      }}
    >
      {tabArray.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={({ navigation }) => ({
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <Entypo name={item.icon} size={24} color="black" />
            ),
          })}
        />
      ))}
    </Tab.Navigator>
  );
};

export default createAppNavigator;
