export interface Emoji {
  id: string;
  src: string;
  altSrc?: {
    [x in EmojiVariants]?: string;
  };
}

export enum EmojiVariants {
  APPLE,
  WHATSAPP,
  MICROSOFT,
  TWITTER,
  GOOGLE,
  OPENMOJI,
}
