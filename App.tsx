import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./hooks/store";
import AppNavigator from "./navigation/AppNav";

const App = () => {
  const [loaded] = useFonts({
    KeaniaOne: require("./assets/fonts/KeaniaOne.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
