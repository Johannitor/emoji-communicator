import React from 'react';
import { Emoji } from '../../util/emoji/emoji.type';

type DisplayEmojiProps = {
  emoji: Emoji;
  [x: string]: any;
};

export function DisplayEmoji({ emoji, ...props }: DisplayEmojiProps) {
  return <img {...props} src={emoji.src} alt="" loading="lazy" />;
}
