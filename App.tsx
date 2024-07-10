import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./hooks/store";
import SplashScreen from "./components/Splashscreen";
import AppNavigator from "./navigation/AppNav";
import LoaderModal from "./components/LoaderModal";

const App = () => {
  const [loaded] = useFonts({
    KeaniaOne: require("./assets/fonts/KeaniaOne.ttf"),
  });

  const [isLoading, setIsLoading] = useState(false);
  // const [splashComplete, setSplashComplete] = useState(false);

  // if (!loaded || !splashComplete) {
  //   return (
  //     <SplashScreen
  //       onComplete={() => {
  //         setSplashComplete(true);
  //       }}
  //     />
  //   );
  // }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
      <LoaderModal isVisible={isLoading} />
    </SafeAreaProvider>
  );
};

export default App;
