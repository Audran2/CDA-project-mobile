import React from "react";
import { Dimensions, Pressable } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import HomeScreen from "../screens/mainScreen/HomeScreen";
import CalendarScreen from "../screens/mainScreen/CalendarScreen";
import ResearchScreen from "../screens/mainScreen/ResearchScreen";
import AccountScreen from "../screens/mainScreen/AccountScreen";
import ParametersScreen from "../screens/ParametersScreen";
import CharacterInfoScreen from "../screens/infoScreen/CharacterInfoScreen";
import GameInfoScreen from "../screens/infoScreen/GameInfoScreen";
import GameListScreen from "../screens/infoScreen/GameListScreen";
import GradesScreen from "../screens/infoScreen/GradesScreen";
import StudioInfoScreen from "../screens/infoScreen/StudioInfoScreen";
import UserInfoScreen from "../screens/infoScreen/UserInfoScreen";
import styles from "./AppNavStyle.js";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
    icon: "calendar-blank",
    component: CalendarScreen,
  },
  {
    name: "Recherche",
    label: "Recherche",
    icon: "magnify",
    component: ResearchScreen,
  },
  {
    name: "Compte",
    label: "Compte",
    icon: "account",
    component: AccountScreen,
    headerRightIcon: "align-right",
    headerRightComponent: "ParametersScreen",
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
              <MaterialCommunityIcons
                name={item.icon}
                size={35}
                color="black"
              />
            ),
            headerRight: () => (
              <Pressable
                onPress={() => {
                  navigation.navigate(item.headerRightComponent);
                }}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  scale: 1,
                })}
              >
                <FontAwesome5
                  name={item.headerRightIcon}
                  size={25}
                  color="black"
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            ),
          })}
        />
      ))}
    </Tab.Navigator>
  );
};

const AppNav = createAppNavigator("Home");

const screenConfigurations = [
  {
    name: "AppNav",
    component: AppNav,
    options: { headerShown: false },
  },
  {
    name: "ParametersScreen",
    component: ParametersScreen,
    options: { headerShown: true },
  },
  {
    name: "CharacterInfoScreen",
    component: CharacterInfoScreen,
    options: { headerShown: true },
  },
  {
    name: "GameInfoScreen",
    component: GameInfoScreen,
    options: { headerShown: true },
  },
  {
    name: "GameListScreen",
    component: GameListScreen,
    options: { headerShown: true },
  },
  {
    name: "GradesScreen",
    component: GradesScreen,
    options: { headerShown: true },
  },
  {
    name: "StudioInfoScreen",
    component: StudioInfoScreen,
    options: { headerShown: true },
  },
  {
    name: "UserInfoScreen",
    component: UserInfoScreen,
    options: { headerShown: true },
  },
];

const AppStackNav = () => (
  <Stack.Navigator>
    {screenConfigurations.map((config, index) => (
      <Stack.Screen
        key={index}
        name={config.name}
        component={config.component}
        options={config.options}
      />
    ))}
  </Stack.Navigator>
);

export default AppStackNav;
