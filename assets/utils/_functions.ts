import { colors } from "./_colors";

export const getColorGrade = (note: number) => {
  if (note <= 2) {
    return colors.colorGrade.rBad;
  } else if (note > 2 && note < 4) {
    return colors.colorGrade.bad;
  } else if (note === 5) {
    return colors.colorGrade.average;
  } else if (note >= 6 && note < 8) {
    return colors.colorGrade.good;
  } else {
    return colors.colorGrade.rGood;
  }
};
