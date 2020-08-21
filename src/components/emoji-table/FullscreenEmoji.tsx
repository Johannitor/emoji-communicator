import React from 'react';
import { Emoji } from '../../util/emoji/emoji.type';
import { DisplayEmoji } from '../emoji/DisplayEmoji';

type FullscreenEmojiProps = {
  emoji: Emoji;
  onClose: VoidFunction;
};

export function FullscreenEmoji({ emoji, onClose }: FullscreenEmojiProps) {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-white z-50 flex items-center justify-center"
      onClick={onClose}>
      <DisplayEmoji
        emoji={emoji}
        className="w-96 h-96 max-h-vmin max-w-vmin object-contain p-8"
      />
    </div>
  );
}
