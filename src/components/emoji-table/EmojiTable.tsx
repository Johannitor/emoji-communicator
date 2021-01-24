import React from 'react';
import { Emoji } from '../../util/emoji/emoji.type';
import { EmojiCard } from './EmojiCard';
import useEmojiFullscreen from '../../hooks/useEmojiFullscreen';

type EmojiTableProps = {
  emojis: Emoji[];
};

export function EmojiTable({ emojis }: EmojiTableProps) {
  const { set } = useEmojiFullscreen()

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-4">
      {emojis.map((emoji) => (
        <EmojiCard
          key={emoji.id}
          emoji={emoji}
          onClick={set}
        />
      ))}
    </div>
  );
}
