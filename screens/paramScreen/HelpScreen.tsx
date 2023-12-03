import React, { useContext, useLayoutEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import LabelTemplate from "../../components/FormTemplate/LabelTemplate";
import InputTemplate from "../../components/FormTemplate/InputTemplate";
import DropDownTemplate from "../../components/FormTemplate/DropdownTemplate";
import ButtonTemplate from "../../components/FormTemplate/ButtonTemplate";
import { Controller, useForm } from "react-hook-form";
import styles from "./HelpScreenStyle.js";

export default function HelpScreen(): React.JSX.Element {
  const { handleSubmit, control, formState, reset } = useForm();
  const isFormValid = formState.isValid;
  const navigation = useNavigation();
  const width = Dimensions.get("window").width;

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

  const [loading, setLoading] = useState(false);

  const placeholder = {
    subjectph: "e.g., problème d'affichage",
    typeph: "e.g., Bug page home",
    messageph: "Description du problème...",
  };

  const inputRegex =
    /^([A-Za-zàáâãäåæçèéêëìíîïñòóôõöùúûüÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜ0-9.]|(?:[A-Za-z0-9.,\'\ʼ\ʻ\’]\s{0,1}[A-Za-z0-9])){5,1000}$/;
  const messageRegex =
    /^[A-Za-zàáâãäåæçèéêëìíîïñòóôõöùúûüÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜ0-9.\'\ʼ\ʻ\’\s\n ]{10,1000}$/gm;

  const messagesType = [
    { label: "Signaler un bug", value: 1 },
    { label: "Demande d'aide", value: 2 },
    { label: "Demande d'informations", value: 3 },
    { label: "Demande de modifications", value: 4 },
    { label: "Demande d'ajout", value: 5 },
    { label: "Autre demande", value: 6 },
  ];

  const [openMessageTypeDropDown, setOpenMessageTypeDropDown] =
    useState<boolean>(false);

  const onSubmit = (data: {
    message: string;
    messageType: number;
    subject: string;
  }): void => {
    console.log(data);
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <ScrollView
        style={{ backgroundColor: "transparent" }}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView style={{ backgroundColor: "transparent" }}>
          <View
            style={{
              backgroundColor: "transparent",
              marginHorizontal: Platform.OS === "ios" ? 40 : 30,
              paddingBottom: width <= 380 ? 20 : 0,
            }}
          >
            <Controller
              control={control}
              render={({ field }) => (
                <View style={{ backgroundColor: "transparent" }}>
                  <LabelTemplate name="Sujet" required />
                  <InputTemplate
                    value={field.value}
                    placeholder={placeholder.subjectph}
                    onChangeText={field.onChange}
                    secureTextEntry={false}
                    showPassword={false}
                    multiline={false}
                    regex={inputRegex}
                  />
                </View>
              )}
              name="subject"
              rules={{
                required: true,
                pattern: {
                  value: inputRegex,
                  message: "Le sujet n'est pas valide.",
                },
              }}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field }) => (
                <View style={{ backgroundColor: "transparent", zIndex: 10 }}>
                  <LabelTemplate name="Type de message" required />
                  <DropDownTemplate
                    modalTitle="Type de message"
                    placeholder={placeholder.typeph}
                    open={openMessageTypeDropDown}
                    value={field.value}
                    items={messagesType}
                    setOpen={setOpenMessageTypeDropDown}
                    setValue={(value) => {
                      field.onChange(value);
                    }}
                    isValid={true}
                    setIsValid={() => {}}
                    multiple={false}
                    translation={{
                      NOTHING_TO_SHOW: "Aucun type de message disponible",
                    }}
                  />
                </View>
              )}
              name="messageType"
              defaultValue=""
              rules={{
                required: true,
              }}
            />
            <Controller
              control={control}
              render={({ field }) => (
                <View style={{ backgroundColor: "transparent" }}>
                  <LabelTemplate name="Message" required />
                  <InputTemplate
                    value={field.value}
                    placeholder={placeholder.messageph}
                    onChangeText={field.onChange}
                    secureTextEntry={false}
                    showPassword={false}
                    multiline={true}
                    numberOfLines={10}
                    regex={messageRegex}
                  />
                </View>
              )}
              name="message"
              rules={{
                required: true,
                pattern: {
                  value: messageRegex,
                  message: "Le message n'est pas valide.",
                },
              }}
              defaultValue=""
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
