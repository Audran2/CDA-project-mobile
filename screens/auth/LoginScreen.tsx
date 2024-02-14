import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";
import { loginUser, useDataFetching } from "../../hooks/useDataFetching";
import { setUser } from "../../hooks/slice/userSlice";
import {
  setAverageNote,
  setAverageStatus,
} from "../../hooks/slice/userAverageListSlice";
import { setFavorites } from "../../hooks/slice/userFavoriteSlice";
import LabelTemplate from "../../components/FormTemplate/LabelTemplate";
import InputTemplate from "../../components/FormTemplate/InputTemplate";
import { colors } from "../../assets/utils/_colors";
import styles from "./LoginScreenStyle";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const placeholder = {
    emailph: "prenom.nom@gmail.com",
    passwordph: "e.g., •••••••",
  };

  const handleLogin = async () => {
    try {
      const token = await loginUser(email, password);
      const userDataResponse = await useDataFetching("users/me");
      dispatch(setUser(userDataResponse));
      const userFavorites = await useDataFetching("favorisList");
      dispatch(setFavorites(userFavorites));
      const averageData = await useDataFetching("average");
      dispatch(setAverageNote(averageData.averageNote));
      dispatch(setAverageStatus(averageData.averageStatus));
      navigation.navigate("Home" as never);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.5, y: 0.8 }}
      end={{ x: 0.5, y: 0 }}
      colors={[colors.darkblue, colors.blue]}
    >
      <View style={styles.InputContainer}>
        <LabelTemplate name={"Email"} required={false} />
        <InputTemplate
          value={email}
          placeholder={placeholder.emailph}
          onChangeText={(val: string) => {
            setEmail(val.trim());
          }}
          secureTextEntry={false}
          multiline={false}
          regex={emailRegex}
          hasToBeChecked={false}
        />
      </View>
      <View style={styles.InputContainer}>
        <LabelTemplate name={"Mot de passe"} required={false} />
        <InputTemplate
          value={password}
          placeholder={placeholder.passwordph}
          onChangeText={(val: string) => {
            setPassword(val.trim());
          }}
          secureTextEntry={true}
          showPassword={isPasswordVisible}
          switchPasswordVisibility={() => {
            setIsPasswordVisible(!isPasswordVisible);
          }}
          multiline={false}
          hasToBeChecked={false}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.text}>Connexion</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("AccountCreationScreen" as never)}
        >
          <Text style={styles.text}>Créer un compte</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
