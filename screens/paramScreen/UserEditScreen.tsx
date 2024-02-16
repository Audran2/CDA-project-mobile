import React, { useLayoutEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import LabelTemplate from "../../components/FormTemplate/LabelTemplate";
import InputTemplate from "../../components/FormTemplate/InputTemplate";
import DropDownTemplate from "../../components/FormTemplate/DropdownTemplate";
import ButtonTemplate from "../../components/FormTemplate/ButtonTemplate";
import { colors } from "../../assets/utils/_colors";
import {
  genderOptions,
  placeholder,
  plateformOptions,
  regionOptions,
} from "../../assets/utils/_functions";
import styles from "./UserEditStyle.js";

export default function UserEditScreen() {
  const navigation = useNavigation();
  const userData = useSelector((state: any) => state.user);

  const { handleSubmit, control, formState } = useForm({
    defaultValues: {
      username: userData.username ?? "",
      email: userData.email ?? "",
      sexe: userData.sexe ?? "",
      region: userData.region ?? "",
      plateformes: userData.plateformes ?? [],
    },
  });

  const isFormValid = formState.isValid;
  const isFormDirty = formState.isDirty;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ButtonTemplate
          isFormValid={isFormValid && isFormDirty}
          handleSubmit={handleSubmit(onSubmit)}
        />
      ),
    });
  }, [navigation, isFormValid, isFormDirty]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const [openGender, setOpenGender] = useState(false);
  const [openRegion, setOpenRegion] = useState(false);
  const [openPlateform, setOpenPlateform] = useState(false);

  return (
    <GestureHandlerRootView style={styles.container}>
      <LinearGradient
        style={styles.container}
        start={{ x: 0.5, y: 0.9 }}
        end={{ x: 0.5, y: 0 }}
        colors={[colors.darkblue, colors.blue]}
      >
        <ScrollView>
          <View
            style={{
              backgroundColor: "transparent",
              paddingBottom: 25,
              marginHorizontal: 30,
            }}
          >
            <Controller
              control={control}
              render={({ field }) => (
                <View style={{ backgroundColor: "transparent" }}>
                  <LabelTemplate name="Nom d'utilisateur" required />
                  <InputTemplate
                    value={field.value}
                    placeholder={placeholder.userNameph}
                    onChangeText={(val: string) => {
                      field.onChange(val.trim());
                    }}
                    secureTextEntry={false}
                    showPassword={false}
                    multiline={false}
                  />
                </View>
              )}
              name="username"
              rules={{
                required: true,
              }}
            />
            <Controller
              control={control}
              render={({ field }) => (
                <View style={{ backgroundColor: "transparent" }}>
                  <LabelTemplate name="E-mail" required />
                  <InputTemplate
                    value={field.value}
                    placeholder={placeholder.emailph}
                    onChangeText={(val: string) => {
                      field.onChange(val.trim());
                    }}
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
            <Controller
              control={control}
              render={({ field }) => (
                <View style={{ backgroundColor: "transparent" }}>
                  <LabelTemplate name="Genre" required />
                  <DropDownTemplate
                    modalTitle="Sélection du genre"
                    placeholder={placeholder.genderph}
                    open={openGender}
                    value={field.value}
                    items={genderOptions}
                    setOpen={setOpenGender}
                    setValue={(value) => {
                      field.onChange(value);
                    }}
                    isValid={true}
                    setIsValid={() => {}}
                    multiple={false}
                    translation={{
                      NOTHING_TO_SHOW: "Aucune taille de t-shirt disponible",
                    }}
                  />
                </View>
              )}
              name="sexe"
              rules={{
                required: true,
              }}
            />
            <Controller
              control={control}
              render={({ field }) => (
                <View style={{ backgroundColor: "transparent" }}>
                  <LabelTemplate name="Région" required />
                  <DropDownTemplate
                    modalTitle="Sélection de la région"
                    placeholder={placeholder.regionph}
                    open={openRegion}
                    value={field.value}
                    items={regionOptions}
                    setOpen={setOpenRegion}
                    setValue={(value) => {
                      field.onChange(value);
                    }}
                    isValid={true}
                    setIsValid={() => {}}
                    multiple={false}
                    translation={{
                      NOTHING_TO_SHOW: "Aucune région sélectionnée",
                    }}
                  />
                </View>
              )}
              name="region"
              rules={{
                required: true,
              }}
            />
            <Controller
              control={control}
              render={({ field }) => (
                <View style={{ backgroundColor: "transparent" }}>
                  <LabelTemplate name="Ports du PC" required />
                  <DropDownTemplate
                    modalTitle="Sélection des ports PC"
                    placeholder={placeholder.plateformsph}
                    open={openPlateform}
                    value={field.value}
                    items={plateformOptions}
                    setOpen={setOpenPlateform}
                    setValue={(value) => {
                      const sorted = [...value];
                      sorted.sort();
                      field.onChange(sorted);
                    }}
                    isValid={true}
                    setIsValid={() => {}}
                    multiple={true}
                    translation={{
                      NOTHING_TO_SHOW: "Aucune plateforme sélectionnée",
                    }}
                  />
                </View>
              )}
              name="plateformes"
              rules={{
                required: true,
              }}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </GestureHandlerRootView>
  );
}
