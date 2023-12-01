import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import LabelTemplate from "../../components/FormTemplate/LabelTemplate";
import InputTemplate from "../../components/FormTemplate/InputTemplate";
import DropDownTemplate from "../../components/FormTemplate/DropdownTemplate";

export default function UserEditScreen() {
  const { handleSubmit, control, formState, trigger, reset } = useForm({
    defaultValues: {
      userName: "Levorio",
      email: "test.test@gmail.com",
      gender: "male",
      region: "Europe",
      plateforms: [true, true, true, true],
    },
  });

  const isFormValid = formState.isValid;
  const iFormDirty = formState.isDirty;

  const [openGender, setOpenGender] = useState(false);
  const genderOptions = [
    { value: "male", label: "homme" },
    { value: "female", label: "femme" },
    { value: "x", label: "X" },
  ];

  const [openRegion, setOpenRegion] = useState(false);
  const regionOptions = [
    { value: "europe", label: "Europe" },
    { value: "northAmerica", label: "Amérique du Nord" },
    { value: "southAmeica", label: "Amérique du Sud" },
    { value: "asia", label: "Asie" },
    { value: "ocania", label: "Océanie" },
    { value: "africa", label: "Afrique" },
  ];

  const [openPlateform, setOpenPlateform] = useState(false);
  const plateformOptions = [
    { value: true, label: "Nintendo" },
    { value: true, label: "Xbox" },
    { value: true, label: "Playstation" },
    { value: true, label: "PC" },
  ];

  const placeholder = {
    userNameph: "e.g., UserName",
    emailph: "e.g., nom.prenom@gmail.com",
    genderph: "e.g., homme",
    regionph: "e.g., Europe",
    plateformsph: "e.g., Nintendo",
  };

  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View>
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
            name="gender"
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
                    NOTHING_TO_SHOW: "Aucun genre sélectionné",
                  }}
                />
              </View>
            )}
            name="gender"
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
            name="plateforms"
            rules={{
              required: true,
            }}
          />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
