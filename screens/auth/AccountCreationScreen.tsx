import React, { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Controller, useForm } from "react-hook-form";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import LabelTemplate from "../../components/FormTemplate/LabelTemplate";
import InputTemplate from "../../components/FormTemplate/InputTemplate";
import { colors } from "../../assets/utils/_colors";
import DropDownTemplate from "../../components/FormTemplate/DropdownTemplate";
import {
  emailRegex,
  passwordRegex,
  genderOptions,
  regionOptions,
  plateformOptions,
  placeholder,
} from "../../assets/utils/_functions";
import { signupUser } from "../../hooks/useDataFetching";
import styles from "./AccoutCreationScreenStyle";

export default function AccountCreationScreen() {
  const [firstSlideValid, setFirstSlideValid] = useState(false);
  const navigation = useNavigation();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlideIndex(index);
  };

  const { handleSubmit, control, formState, watch, reset } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      avatar: "",
      sexe: "",
      region: "",
      plateformes: [],
    },
  });
  const isFormValid = formState.isValid;

  const [fields, setFields] = useState({
    showPassword: false,
    showVerifyPassword: false,
  });

  const [openGender, setOpenGender] = useState(false);
  const [openRegion, setOpenRegion] = useState(false);
  const [openPlateform, setOpenPlateform] = useState(false);

  const switchPasswordVisibility = (field: string): void => {
    setFields((prevState) => ({
      ...prevState,
      [`show${field}` as keyof typeof prevState]:
        !prevState[`show${field}` as keyof typeof prevState],
    }));
  };

  useEffect(() => {
    validateForm();
  }, []);

  const validateForm = () => {
    const email = watch("email");
    const password = watch("password");
    const confirmPassword = watch("confirmPassword");

    const isEmailValid = !!email && email.includes("@");
    const isPasswordValid = !!password && password.match(passwordRegex);
    const isConfirmPasswordValid = confirmPassword === password;

    const isValid = isEmailValid && isPasswordValid && isConfirmPasswordValid;
    setFirstSlideValid(!!isValid);
  };

  const handleFormChange = () => {
    validateForm();
  };

  const onSubmit = async (data, navigation) => {
    if (isFormValid) {
      try {
        const userData = {
          avatar: data.avatar,
          email: data.email,
          password: data.password,
          plateformes: data.plateformes,
          region: data.region,
          sexe: data.sexe,
          username: data.username,
        };

        const response = await signupUser(userData);

        if (response.status === 201) {
          reset(data);
          Alert.alert(
            "Compte utilisateur créé",
            "Votre compte utilisateur a été créé. Vous pouvez désormais vous connecter avec vos identifiants.",
            [
              {
                text: "OK",
                onPress: () => navigation.goBack(),
              },
            ]
          );
        }

        console.log("Réponse de l'API:", response);
      } catch (error) {
        console.error("Erreur lors de l'envoi des données à l'API:", error);
      }
    }
  };

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.5, y: 0.9 }}
      end={{ x: 0.5, y: 0 }}
      colors={[colors.darkblue, colors.blue]}
    >
      <Swiper
        showsButtons={false}
        loop={false}
        showsPagination={false}
        scrollEnabled={firstSlideValid}
        onIndexChanged={handleSlideChange}
        ref={(swiper) => {
          this.swiper = swiper;
        }}
      >
        <ScrollView>
          <View style={styles.controllerView}>
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
                      handleFormChange();
                    }}
                    secureTextEntry={false}
                    showPassword={false}
                    multiline={false}
                    regex={emailRegex}
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
                    onChangeText={(val: string) => {
                      field.onChange(val.trim());
                      handleFormChange();
                    }}
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
                    onChangeText={(val: string) => {
                      field.onChange(val.trim());
                      handleFormChange();
                    }}
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
        </ScrollView>

        <ScrollView>
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
              name="username"
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
                  <LabelTemplate name="Avatar" required />
                  <InputTemplate
                    value={field.value}
                    placeholder={placeholder.avatarph}
                    onChangeText={field.onChange}
                    secureTextEntry={false}
                    showPassword={false}
                    multiline={false}
                  />
                </View>
              )}
              name="avatar"
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
          </View>
          <View style={styles.controllerView}>
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
          </View>
          <View style={styles.controllerView}>
            <Controller
              control={control}
              render={({ field }) => (
                <View style={{ backgroundColor: "transparent" }}>
                  <LabelTemplate name="Plateformes" required />
                  <DropDownTemplate
                    modalTitle="Sélection des plateformes"
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
      </Swiper>
      <View
        style={{
          height: 120,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          columnGap: 30,
        }}
      >
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() =>
            currentSlideIndex === 0
              ? navigation.goBack()
              : this.swiper.scrollBy(-1)
          }
        >
          <FontAwesome name="chevron-left" style={styles.buttonText} />
          <Text style={styles.buttonText}>Retour</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={
            currentSlideIndex === 0
              ? () => this.swiper.scrollBy(1)
              : handleSubmit(onSubmit)
          }
          disabled={currentSlideIndex === 0 ? !firstSlideValid : !isFormValid}
        >
          <Text style={styles.buttonText}>
            {currentSlideIndex === 0 ? "Suivant" : "Confirmer"}
          </Text>
          <FontAwesome
            name={currentSlideIndex === 0 ? "chevron-right" : "check"}
            style={styles.buttonText}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
