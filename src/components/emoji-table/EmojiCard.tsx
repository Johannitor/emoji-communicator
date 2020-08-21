import React from 'react';
import { Emoji } from '../../util/emoji/emoji.type';
import { DisplayEmoji } from '../emoji/DisplayEmoji';

type EmojiCardProps = {
  emoji: Emoji;
  onClick: (e: Emoji) => void;
};

export function EmojiCard({ emoji, onClick }: EmojiCardProps) {
  return (
    <div className="pb-100% relative">
      <button
        className="flex flex-col items-center shadow rounded p-2 bg-white absolute top-0 w-full h-full focus:outline-none hover:bg-orange-300 focus:bg-orange-300 transition duration-300"
        onClick={() => {
          onClick(emoji);
        }}>
        <DisplayEmoji emoji={emoji} className="pb-8 h-full" />
        <span className="font-semibold text-gray-600 text-sm absolute bottom-2">
          {emoji.id}
        </span>
      </button>
    </div>
  );
}
