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
  const [moved, setMoved] = useState<boolean>(false);
  const [touchStartPos, setTouchStartPos] = useState<{
    clientX: number;
    clientY: number;
  }>({
    clientX: 0,
    clientY: 0,
  });

  const handleCursorDown = useCallback(() => {
    setMouseStart(new Date().getTime());
    setMoved(false);
  }, []);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLButtonElement>) => {
      setTouchStartPos(e.touches[0]);
      handleCursorDown();
    },
    [handleCursorDown]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLButtonElement>) => {
      const { clientX, clientY } = e.touches[0];
      if (
        Math.abs(touchStartPos.clientX - clientX) > 10 ||
        Math.abs(touchStartPos.clientY - clientY) > 10
      ) {
        setMoved(true);
        setMouseStart(undefined);
      }
    },
    [touchStartPos]
  );

  const handleCursorUp = useCallback(() => {
    if (mouseStart && !moved) {
      const holdDownMs = new Date().getTime() - mouseStart;
      setMouseStart(undefined);

      if (holdDownMs < 1000) {
        onClick(emoji);
      } else {
        toggleFavorite(emoji);
      }
    }
  }, [mouseStart, moved, emoji, onClick, toggleFavorite]);

  useEffect(() => {
    let timeoutId: number;
    if (mouseStart) {
      timeoutId = window.setTimeout(handleCursorUp, 1000);
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [mouseStart, handleCursorUp]);

  return (
    <div className="pb-100% relative select-none">
      <button
        className={
          'flex flex-col items-center shadow rounded p-2 bg-white absolute top-0 w-full h-full focus:outline-none hover:bg-orange-300 transition duration-300 draw' +
          (mouseStart ? ' active' : '')
        }
        onMouseDown={handleCursorDown}
        onMouseUp={handleCursorUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={(e) => {
          e.preventDefault();
          handleCursorUp();
        }}>
        <DisplayEmoji emoji={emoji} className="pb-8 h-full" />
        <span className="font-semibold text-gray-600 text-sm absolute bottom-2 truncate max-w-full px-2">
          {emoji.id}
        </span>
      </button>
    </div>
  );
}
