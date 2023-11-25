import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import createAppNavigator from "./navigation/AppNav";

const App = () => {
  const AppNavigator = createAppNavigator("HomeScreen");

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
