import { EmojiVariants } from './emoji.type';

export const emojiVariantSelectOptions: {
  label: string;
  value: EmojiVariants;
}[] = [
  { label: 'Apple', value: EmojiVariants.APPLE },
  { label: 'Microsoft', value: EmojiVariants.MICROSOFT },
  { label: 'WhatsApp', value: EmojiVariants.WHATSAPP },
  { label: 'Google', value: EmojiVariants.GOOGLE },
  { label: 'Twitter', value: EmojiVariants.TWITTER },
  { label: 'Openmoji', value: EmojiVariants.OPENMOJI },
];
