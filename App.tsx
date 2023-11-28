import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNav";
import { useFonts } from "expo-font";

const App = () => {
  const [loaded] = useFonts({
    KeaniaOne: require("./assets/fonts/KeaniaOne.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
