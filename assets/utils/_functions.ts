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

export const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const passwordRegex =
  /^(?=.*[a-zàáâãäåæçèéêëìíîïñòóôõöùúûü])(?=.*[A-ZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜ])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-zàáâãäåæçèéêëìíîïñòóôõöùúûüÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜ\d@$!%*?&_-]{8,}$/;

export const genderOptions = [
  { value: "male", label: "homme" },
  { value: "female", label: "femme" },
  { value: "x", label: "X" },
];

export const regionOptions = [
  { value: "europe", label: "Europe" },
  { value: "northAmerica", label: "Amérique du Nord" },
  { value: "southAmeica", label: "Amérique du Sud" },
  { value: "asia", label: "Asie" },
  { value: "ocania", label: "Océanie" },
  { value: "africa", label: "Afrique" },
];

export const plateformOptions = [
  { value: "nintendo", label: "Nintendo" },
  { value: "xbox", label: "Xbox" },
  { value: "playstation", label: "Playstation" },
  { value: "pc", label: "PC" },
];

export const placeholder = {
  userNameph: "e.g., UserName",
  emailph: "e.g., nom.prenom@gmail.com",
  passwordph: "e.g., •••••••",
  avatarph: "selectionner une image",
  genderph: "e.g., homme",
  regionph: "e.g., Europe",
  plateformsph: "e.g., Nintendo",
};
