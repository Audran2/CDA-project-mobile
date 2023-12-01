import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
              <View style={{ backgroundColor: "transparent" }}></View>
            )}
            name="userName"
            rules={{
              required: true,
            }}
          />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
