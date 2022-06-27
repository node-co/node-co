export type NavOptions = Record<"title" | "link" | "isSpan", string>;

export interface CommonNav {
  logo: string;
  options: NavOptions[];
}

export type CardType = Pick<NavOptions, "title" | "link">;

export interface CardOption extends CardType {
  date: string;
}
