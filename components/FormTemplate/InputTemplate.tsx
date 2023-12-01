import React, { useEffect, useState } from "react";
import { Platform, TextInput, View } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { type InputData } from "../../types";
import styles from "./FormTemplateStyle.js";

const InputTemplate = ({
  value,
  placeholder,
  onChangeText,
  secureTextEntry,
  showPassword,
  switchPasswordVisibility,
  multiline,
  numberOfLines,
  regex = /(?:)/,
  hasToBeChecked = true,
  editable = true,
  isVerify = true,
}: InputData): React.JSX.Element => {
  const [isValid, setIsValid] = useState(false);

  const testRegexp = (toTest: string): boolean => {
    if (Array.isArray(regex))
      return !regex.map((reg) => reg.test(toTest)).includes(false);
    else return regex.test(toTest);
  };

  useEffect(() => {
    if (hasToBeChecked) {
      const isEmpty = value.length === 0 || value.trim() === "";
      setIsValid(() => {
        return isEmpty ? false : testRegexp(value);
      });
    } else {
      setIsValid(true);
    }
  }, [value, hasToBeChecked, editable, testRegexp(value)]);

  return (
    <View>
      <TextInput
        style={[
          styles.inputField,
          {
            borderColor:
              value === "" || !hasToBeChecked || !editable
                ? !isVerify
                  ? "red"
                  : "gray"
                : isValid
                ? "green"
                : "red",
            padding: 10,
            paddingHorizontal: 15,
            backgroundColor: editable ? "white" : "lightgray",
            ...(multiline &&
              Platform.OS === "android" && {
                textAlignVertical: "top",
              }),
          },
        ]}
        placeholderTextColor={"black"}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={!(showPassword ?? false) && secureTextEntry}
        multiline={multiline}
        numberOfLines={numberOfLines}
        editable={editable}
      />
      <View
        style={[
          styles.iconContainer,
          {
            right: secureTextEntry ? 60 : 20,
            top: 14,
          },
        ]}
      >
        {editable ? (
          hasToBeChecked &&
          value !== "" && (
            <AntDesign
              style={styles.validIcon}
              name={isValid ? "checkcircle" : "exclamationcircle"}
              size={20}
              color={isValid ? "green" : "red"}
            />
          )
        ) : (
          <AntDesign
            style={styles.validIcon}
            name={value.length > 0 ? "checkcircle" : "closecircle"}
            size={20}
            color={value.length > 0 ? "green" : "red"}
          />
        )}
      </View>

      {secureTextEntry && (
        <View style={[styles.icon, { borderLeftColor: "black" }]}>
          <Feather
            name={showPassword ?? false ? "eye" : "eye-off"}
            size={20}
            color={"#666"}
            onPress={switchPasswordVisibility}
          />
        </View>
      )}
    </View>
  );
};

export default InputTemplate;
