import React, { type Dispatch, type SetStateAction, useContext } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { type DropDownData } from "../../types";
import styles from "./FormTemplateStyle.js";

const DropDownTemplate = ({
  modalTitle,
  placeholder,
  open,
  value,
  items,
  setOpen,
  setValue,
  isValid,
  setIsValid = () => {},
  translation = {},
  multiple = false,
}: DropDownData<string | null>): React.JSX.Element => {
  const handleValueChange: Dispatch<SetStateAction<string[] | null>> = (
    itemValue: SetStateAction<string[] | null>
  ) => {
    if (multiple) {
      const selectedValue =
        typeof itemValue === "function" ? itemValue() : itemValue;

      const formattedValue = Array.isArray(selectedValue)
        ? selectedValue
        : [selectedValue];

      let updatedValue;

      if (multiple) {
        const isItemSelected = value.includes(formattedValue[0]);

        if (isItemSelected) {
          updatedValue = value.filter((item) => item !== formattedValue[0]);
        } else {
          updatedValue = [...value, ...formattedValue];
        }

        setIsValid(updatedValue !== null && updatedValue.length > 0);
      } else {
        updatedValue = formattedValue;
        setIsValid(formattedValue !== null && formattedValue.length > 0);
      }

      setValue(updatedValue);
    } else {
      const selectedValue =
        typeof itemValue === "function" ? itemValue() : itemValue;
      setValue(selectedValue);
      if (selectedValue && selectedValue.length > 0) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
  };

  // Theme color

  const isValueSelected = multiple
    ? value != null && value.length > 0
    : value !== null && value !== "";

  // DropdowPicker placeholder properties
  DropDownPicker.setLanguage("FR");

  return (
    <DropDownPicker
      style={[
        styles.dropDown,
        {
          paddingHorizontal: 20,
          paddingVertical: 5,
          ...(isValid === false && { borderColor: "red" }),
          ...((isValueSelected ?? false) && {
            borderColor: "green",
          }),
        },
      ]}
      modalTitle={modalTitle}
      placeholder={placeholder}
      open={open}
      value={value}
      items={items}
      theme={"LIGHT"}
      setOpen={setOpen}
      setValue={handleValueChange}
      mode="BADGE"
      scrollViewProps={{
        decelerationRate: "fast",
      }}
      modalProps={{
        animationType: "slide",
      }}
      listMode={"MODAL"}
      placeholderStyle={{
        ...(isValid === false && { color: "red" }),
      }}
      multiple={multiple}
      listMessageTextStyle={{
        fontFamily: "Sora-Regular",
        textAlign: "center",
      }}
      listItemContainerStyle={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        height: null,
        paddingVertical: 10,
        paddingHorizontal: 20,
      }}
      itemSeparator={true}
      itemSeparatorStyle={{ backgroundColor: "gray" }}
    />
  );
};

export default DropDownTemplate;
