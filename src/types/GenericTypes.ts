export type NavOptions = Record<"title" | "link" | "isSpan", string>;

export interface CommonNav {
  logo: string;
  options: NavOptions[];
}

export type CardType = Pick<NavOptions, "title" | "link">;

export interface CardOption extends CardType {
  date: string;
}

export interface OrganizerType {
  id: number;
  avatar: string;
  name: string;
  profesion: string;
  social: string;
  contact: string;
}
