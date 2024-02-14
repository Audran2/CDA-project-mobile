import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Controller, useForm } from "react-hook-form";
import LabelTemplate from "../../components/FormTemplate/LabelTemplate";
import InputTemplate from "../../components/FormTemplate/InputTemplate";
import { colors } from "../../assets/utils/_colors";
import styles from "./AccoutCreationScreenStyle";

export default function AccountCreationScreen() {
  const { handleSubmit, control, formState, watch } = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      avatar: "",
      sexe: "",
      region: "",
    },
  });
  const isFormValid = formState.isValid;

  const [fields, setFields] = useState({
    showPassword: false,
    showVerifyPassword: false,
  });

  const placeholder = {
    userNameph: "e.g., UserName",
    emailph: "e.g., nom.prenom@gmail.com",
    passwordph: "e.g., •••••••",
  };

  const passwordRegex =
    /^(?=.*[a-zàáâãäåæçèéêëìíîïñòóôõöùúûü])(?=.*[A-ZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜ])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-zàáâãäåæçèéêëìíîïñòóôõöùúûüÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜ\d@$!%*?&_-]{8,}$/;

  const switchPasswordVisibility = (field: string): void => {
    setFields((prevState) => ({
      ...prevState,
      [`show${field}` as keyof typeof prevState]:
        !prevState[`show${field}` as keyof typeof prevState],
    }));
  };

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.5, y: 0.9 }}
      end={{ x: 0.5, y: 0 }}
      colors={[colors.darkblue, colors.blue]}
    >
      <View style={styles.controllerView}>
        <Controller
          control={control}
          render={({ field }) => (
            <View style={{ backgroundColor: "transparent" }}>
              <LabelTemplate name="Nom d'utilisateur" required />
              <InputTemplate
                value={field.value}
                placeholder={placeholder.userNameph}
                onChangeText={field.onChange}
                secureTextEntry={false}
                showPassword={false}
                multiline={false}
              />
            </View>
          )}
          name="userName"
          rules={{
            required: true,
          }}
        />
      </View>
      <View style={styles.controllerView}>
        <Controller
          control={control}
          render={({ field }) => (
            <View style={{ backgroundColor: "transparent" }}>
              <LabelTemplate name="E-mail" required />
              <InputTemplate
                value={field.value}
                placeholder={placeholder.emailph}
                onChangeText={field.onChange}
                secureTextEntry={false}
                showPassword={false}
                multiline={false}
              />
            </View>
          )}
          name="email"
          rules={{
            required: true,
          }}
        />
      </View>
      <View style={styles.controllerView}>
        <Controller
          control={control}
          render={({ field }) => (
            <View style={{ backgroundColor: "transparent" }}>
              <LabelTemplate name="Mot de passe" required />
              <InputTemplate
                value={field.value}
                placeholder={placeholder.passwordph}
                onChangeText={field.onChange}
                secureTextEntry={true}
                showPassword={fields.showPassword}
                switchPasswordVisibility={() => {
                  switchPasswordVisibility("Password");
                }}
                multiline={false}
                regex={passwordRegex}
              />
            </View>
          )}
          name="password"
          rules={{
            required: true,
            pattern: {
              value: passwordRegex,
              message:
                "Le mot de passe doit contenir 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial et faire 8 de long.",
            },
          }}
        />
      </View>
      <View style={styles.controllerView}>
        <Controller
          control={control}
          render={({ field }) => (
            <View style={{ backgroundColor: "transparent" }}>
              <LabelTemplate name="Confirmer le mot de passe" required />
              <InputTemplate
                value={field.value}
                placeholder={placeholder.passwordph}
                onChangeText={field.onChange}
                secureTextEntry={true}
                showPassword={fields.showVerifyPassword}
                switchPasswordVisibility={() => {
                  switchPasswordVisibility("VerifyPassword");
                }}
                multiline={false}
                regex={[
                  passwordRegex,
                  new RegExp("^" + watch("password") + "$"),
                ]}
              />
            </View>
          )}
          name="confirmPassword"
          rules={{
            required: true,
            validate: {
              passwordRegex: (value) => value === watch("password"),
            },
          }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.btn} disabled={!isFormValid}>
          <Text style={styles.text}>Créer son compte</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
