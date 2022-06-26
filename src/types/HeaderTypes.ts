export type NavOptions = Record<"title" | "link" | "isSpan", string>;

export interface CommonNav {
  logo: string;
  options: NavOptions[];
}
