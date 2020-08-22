export interface Emoji {
  id: string;
  src: string;
}

export enum EmojiVariants {
  APPLE,
  WHATSAPP,
  MICROSOFT,
  // TODO: Find a way to make these work as they have an other image url
  // TWITTER,
  // GOOGLE,
  // OPENMOJI,
}
