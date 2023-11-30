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
