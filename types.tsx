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

interface Studio {
  _id: string;
  nom: string;
}

interface Game {
  _id: string;
  dateSortie: string;
  image: string[];
  nom: string;
  note: number;
  studio: Studio;
}

export interface LastGameDataType {
  _id: string;
  etat: string;
  gameId: Game;
  note: number;
  update: string;
}

interface ReseauxType {
  siteInternet?: string;
  youtube?: string;
  twitter?: string;
  instagram?: string;
}

export interface CardGameType {
  _id: string;
  userId: string;
  imageBackground: string;
  gameTitle: string;
  avatarUser: string;
  userName: string;
}

export interface PlayerCardType {
  _id: string;
  username?: string;
  avatar?: string;
  region?: string;
  plateformes?: Array<string>;
  nomComplet?: string;
  images?: string;
  licence?: string;
  lastCard?: boolean;
}

export interface PlayerInfoType extends PlayerCardType {
  description: string;
  amis: Array<string>;
}

export interface HeadScreenType {
  isUser?: boolean;
  avatarUser: string;
  userName: string;
  userRegion: string;
  plateformes?: Array<string>;
}

export interface AboutUserType {
  description: string;
  friends?: Array<string>;
}

export interface characterHeadType {
  characterAvatar: string;
  characterName: string;
  characterJob: string;
}

export interface CharacterInfo {
  images: string[];
  nomComplet: string;
  profession: string;
  licence: string;
  jeux: Array<string>;
  description: string;
}

export interface CharacterBodyType {
  licence: string;
  jeux: Array<string>;
  description: string;
}

export interface GameHeadType {
  isGame?: boolean;
  title?: string;
  backgroundImage: string | { uri: string };
  creationDate?: string;
  note?: number;
  plateformes?: Array<string>;
  reseaux?: ReseauxType;
}

export interface GameInfo {
  _id: string;
  nom: string;
  image: string[];
  note: number;
  genre: string;
  plateformes: string[];
  studio: string[];
  dateSortie: string;
  resume: string;
  trailers: string[];
}

export interface GameCardType {
  isStudio: boolean;
  _id: string;
  nom: string;
  image: string;
  genre?: string;
  studio?: Array<string>;
  dateSortie?: string;
  dateCreation?: string;
  note?: number;
  plateformes?: Array<string>;
  lastCard?: boolean;
}

export interface GameWidgetType {
  genre: string;
  studio: Array<string>;
  dateSortie: string;
  resume: string;
  trailers: Array<string>;
  characters: Array<string>;
}

export interface BottomNavType {
  addList?: boolean;
  typeInfo?: string;
  GameID?: string;
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

export type iconType =
  | "symbol"
  | "function"
  | "key"
  | "contain"
  | "repeat"
  | "sort"
  | "map"
  | "filter"
  | "at"
  | "anchor"
  | "link"
  | "details"
  | "head"
  | "label"
  | "menu"
  | "script"
  | "select"
  | "table"
  | undefined;

export interface CardData extends PlayerCardType, GameCardType {}

export interface userInfo {
  _id: string;
  nom: string;
  image: string[];
  dateCreation: string;
  reseaux: ReseauxType;
}

export interface ButtonNavTopType {
  buttonNumber: number;
  label: string;
  onPress: (buttonNumber: number) => void;
  isSelected: boolean;
}

type Entity = {
  _id: string;
  image: string[];
  nom: string;
};

type Average = {
  averageNote: number;
  averageStatus: string[];
};

export interface InfoWidgetType {
  userId: string;
  games: Entity[] | null;
  characters: Entity[] | null;
  studios: Entity[] | null;
  gameAverage: Average[] | null;
}
