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
