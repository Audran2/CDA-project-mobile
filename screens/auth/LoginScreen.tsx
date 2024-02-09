import axios from "axios";
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const BASE_URL = process.env.EXPO_API_PUBLIC_URL;

  const handleLogin = () => {
    axios
      .post(`${BASE_URL}/users/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response.data.token;
        storeTokenInAsyncStorage(token);
        console.log("Connexion réussie. Token stocké :", token);
      })
      .catch((error) => {
        console.error("Erreur lors de la connexion :", error);
      });
  };

  const storeTokenInAsyncStorage = async (token) => {
    try {
      await AsyncStorage.setItem("token", token);
    } catch (error) {
      console.error(
        "Erreur lors du stockage du token dans AsyncStorage :",
        error
      );
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Se connecter" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
