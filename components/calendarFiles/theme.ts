import { Platform } from "react-native";

export const themeColor = "#00AAAF";

export function getTheme() {
  const disabledColor = "grey";

  return {
    // arrows
    arrowColor: "white",
    arrowStyle: { padding: 0 },
    // knob
    expandableKnobColor: themeColor,
    // month
    monthTextColor: "white",
    textMonthFontSize: 16,

    textMonthFontWeight: "bold" as const,
    // day names
    textSectionTitleColor: "black",
    textDayHeaderFontSize: 12,

    textDayHeaderFontWeight: "normal" as const,
    // dates
    dayTextColor: themeColor,
    todayTextColor: "#af0078",
    textDayFontSize: 18,

    textDayFontWeight: "500" as const,
    textDayStyle: { marginTop: Platform.OS === "android" ? 2 : 4 },
    // selected date
    selectedDayBackgroundColor: themeColor,
    selectedDayTextColor: "white",
    // disabled date
    textDisabledColor: disabledColor,
    // dot (marked date)
    dotColor: themeColor,
    selectedDotColor: "white",
    disabledDotColor: disabledColor,
    dotStyle: { marginTop: -2 },
  };
}
