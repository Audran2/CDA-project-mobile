import React, { useLayoutEffect, useState } from "react";
import { Platform, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, useForm } from "react-hook-form";
import LabelTemplate from "../../components/FormTemplate/LabelTemplate";
import InputTemplate from "../../components/FormTemplate/InputTemplate";
import ButtonTemplate from "../../components/FormTemplate/ButtonTemplate";
import styles from "./SecurityScreenStyle.js";

export default function SecurityScreen(): React.JSX.Element {
  const { handleSubmit, control, formState, watch } = useForm();
  const isFormValid = formState.isValid;
  const navigation = useNavigation();

  const onSubmit = (data: { OldPassword: any; NewPassword: any }): void => {
    console.log(data);
  };

  const [fields, setFields] = useState({
    showOldPassword: false,
    showNewPassword: false,
    showVerifyPassword: false,
    newPasswordContent: "",
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ButtonTemplate
          isFormValid={isFormValid}
          handleSubmit={handleSubmit(onSubmit)}
        />
      ),
    });
  }, [navigation, isFormValid]);

  const passwordPlaceholder = "e.g., ••••••";

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
    <SafeAreaView edges={["left", "right"]} style={styles.container}>
      <ScrollView
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            backgroundColor: "transparent",
            marginHorizontal: Platform.OS === "ios" ? 40 : 30,
          }}
        >
          <Controller
            control={control}
            render={({ field }) => (
              <View style={{ backgroundColor: "transparent" }}>
                <LabelTemplate name="Ancien mot de passe" required />
                <InputTemplate
                  value={field.value}
                  placeholder={passwordPlaceholder}
                  onChangeText={field.onChange}
                  secureTextEntry={true}
                  showPassword={fields.showOldPassword}
                  switchPasswordVisibility={() => {
                    switchPasswordVisibility("OldPassword");
                  }}
                  multiline={false}
                />
              </View>
            )}
            name="OldPassword"
            rules={{
              required: true,
            }}
            defaultValue=""
          />
          <Controller
            control={control}
            render={({ field }) => (
              <View style={{ backgroundColor: "transparent" }}>
                <LabelTemplate name="Nouveau mot de passe" required />
                <InputTemplate
                  value={field.value}
                  placeholder={passwordPlaceholder}
                  onChangeText={field.onChange}
                  secureTextEntry={true}
                  showPassword={fields.showNewPassword}
                  switchPasswordVisibility={() => {
                    switchPasswordVisibility("NewPassword");
                  }}
                  multiline={false}
                  regex={passwordRegex}
                />
              </View>
            )}
            name="NewPassword"
            rules={{
              required: true,
              pattern: {
                value: passwordRegex,
                message:
                  "Le mot de passe doit contenir 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial et faire 8 de long.",
              },
            }}
            defaultValue=""
          />
          <Controller
            control={control}
            render={({ field }) => {
              fields.newPasswordContent = field.value;
              return (
                <View style={{ backgroundColor: "transparent" }}>
                  <LabelTemplate name="Confirmation du mot de passe" required />
                  <InputTemplate
                    value={field.value}
                    placeholder={passwordPlaceholder}
                    onChangeText={field.onChange}
                    secureTextEntry={true}
                    showPassword={fields.showVerifyPassword}
                    switchPasswordVisibility={() => {
                      switchPasswordVisibility("VerifyPassword");
                    }}
                    multiline={false}
                    regex={[
                      passwordRegex,
                      new RegExp("^" + watch("NewPassword") + "$"),
                    ]}
                  />
                </View>
              );
            }}
            name="VerifyPassword"
            rules={{
              required: true,
              validate: {
                passwordMatch: (value) => value === watch("NewPassword"),
              },
            }}
            defaultValue=""
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
