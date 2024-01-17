export interface itemNavigation {
  id: number;
  name: string;
  url: string;
  category?: string;
  nameIcon?:
    | "edit"
    | "users"
    | "bell"
    | "unlock"
    | "message-circle"
    | "help-circle"
    | "log-out"
    | undefined;
}

export interface CardGameType {
  imageBackground: string;
  gameTitle: string;
  avatarUser: string;
  userName: string;
}

export interface HeadScreenType {
  isUser?: boolean;
  avatarUser: string;
  userName: string;
  userRegion: string;
  isNintendo: boolean;
  isXbox: boolean;
  isPlaystation: boolean;
  isComputer: boolean;
}

export interface characterHeadType {
  characterAvatar: string;
  characterName: string;
  characterJob: string;
}

export interface GameHeadType {
  isGame?: boolean;
  title?: string;
  backgroundImage: string;
  creationDate?: string;
  note?: number;
  social: Array<boolean>;
}

export interface GameCardType {
  title: string;
  image: string;
  genre: string;
  studio?: string;
  date: string;
  note: number;
  social: Array<boolean>;
}

export interface BottomNavType {
  addList?: boolean;
}

export interface LabelData {
  name: string;
  required: boolean;
}

export interface InputData {
  value: string;
  placeholder: string;
  onChangeText?: (text: string) => void;
  secureTextEntry: boolean;
  showPassword?: boolean;
  switchPasswordVisibility?: () => void;
  multiline: boolean;
  numberOfLines?: 1 | number;
  regex?: RegExp[] | RegExp;
  isInValid?: boolean;
  setIsInValid?: (newValue: boolean) => void;
  hasToBeChecked?: boolean;
  editable?: boolean;
  isVerify?: boolean;
}

export interface DropDownData<T> {
  modalTitle: string;
  placeholder: string;
  open: boolean;
  value: T | null;
  items: Array<{ value: number | string; label: string }>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<T>>;
  isValid?: boolean;
  setIsValid?: (newValue: string | number | boolean) => void;
  translation?: Record<string, string>;
  multiple?: boolean;
}

export interface ButtonData {
  isFormValid: boolean;
  handleSubmit: () => void;
}
