import React from 'react';
import useEmojiVariant from '../../hooks/useEmojiVariant';
import { Emoji } from '../../util/emoji/emoji.type';

type DisplayEmojiProps = {
  emoji: Emoji;
  [x: string]: any;
};

export function DisplayEmoji({ emoji, ...props }: DisplayEmojiProps) {
  const { variant } = useEmojiVariant();

  return (
    <img
      {...props}
      src={(emoji.altSrc && emoji.altSrc[variant]) || emoji.src}
      alt=""
      loading="lazy"
    />
  );
}
