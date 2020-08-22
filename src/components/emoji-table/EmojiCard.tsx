import React, { useCallback, useEffect, useState } from 'react';
import useEmojiFavories from '../../hooks/useEmojiFavorites';
import { Emoji } from '../../util/emoji/emoji.type';
import { DisplayEmoji } from '../emoji/DisplayEmoji';

type EmojiCardProps = {
  emoji: Emoji;
  onClick: (e: Emoji) => void;
};

export function EmojiCard({ emoji, onClick }: EmojiCardProps) {
  const { toggleFavorite } = useEmojiFavories();
  const [mouseStart, setMouseStart] = useState<number>();

  const handleMouseDown = useCallback(() => {
    setMouseStart(new Date().getTime());
  }, []);

  const handleMouseUp = useCallback(() => {
    if (mouseStart) {
      setMouseStart(undefined);

      const holdDownMs = new Date().getTime() - mouseStart;

      if (holdDownMs < 1000) {
        onClick(emoji);
      } else {
        toggleFavorite(emoji);
      }
    }
  }, [mouseStart, emoji, onClick, toggleFavorite]);

  useEffect(() => {
    let timeoutId: number;
    if (mouseStart) {
      timeoutId = window.setTimeout(handleMouseUp, 1000);
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [mouseStart, handleMouseUp]);

  return (
    <div className="pb-100% relative select-none">
      <button
        className={
          'flex flex-col items-center shadow rounded p-2 bg-white absolute top-0 w-full h-full focus:outline-none hover:bg-orange-300 transition duration-300 draw' +
          (mouseStart ? ' active' : '')
        }
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}>
        <DisplayEmoji emoji={emoji} className="pb-8 h-full" />
        <span className="font-semibold text-gray-600 text-sm absolute bottom-2 truncate max-w-full px-2">
          {emoji.id}
        </span>
      </button>
    </div>
  );
}
