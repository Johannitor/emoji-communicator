import React, { useCallback, useEffect, useState } from 'react';
import { findLastThuethyItem } from '../../util/array/findLastTruethyItem';
import { Emoji } from '../../util/emoji/emoji.type';
import { EmojiCard } from './EmojiCard';
import { FullscreenEmoji } from './FullscreenEmoji';

type EmojiTableProps = {
  emojies: Emoji[];
};

export function EmojiTable({ emojies }: EmojiTableProps) {
  const [fullscreenEmoji, setFullscreenEmoji] = useState<Emoji | null>(null);
  const [basePath, setBasePath] = useState<string>('/');

  const onDialogClose = useCallback(() => {
    setFullscreenEmoji(null);
  }, [setFullscreenEmoji]);

  useEffect(() => {
    const { pathname } = window.location;

    const pathnameFragments = pathname.split('/');
    if (pathnameFragments.length) {
      const possibleEmojiId = findLastThuethyItem(pathnameFragments);
      const emojiToPreselect = emojies.find(
        (emoji) => emoji.id === possibleEmojiId
      );

      if (emojiToPreselect) {
        setFullscreenEmoji(emojiToPreselect);
      } else {
        setBasePath(pathname);
        window.history.pushState(null, 'Emoji overview shown', pathname);
      }
    }
  }, [emojies]);

  useEffect(() => {
    if (fullscreenEmoji) {
      document.body.style.overflow = 'hidden';
      window.history.pushState(
        null,
        `Emoji ${fullscreenEmoji.id} shown`,
        `${basePath}/${fullscreenEmoji.id}`
      );
    } else {
      document.body.style.overflow = 'auto';
      window.history.pushState(null, 'Emoji overview shown', basePath);
    }

    const popStateHandler = (e: PopStateEvent) => {
      if (fullscreenEmoji) {
        setFullscreenEmoji(null);
      } else {
        window.history.back();
      }
    };

    window.addEventListener('popstate', popStateHandler);

    return () => {
      window.removeEventListener('popstate', popStateHandler);
    };
  }, [fullscreenEmoji, basePath]);

  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-4">
        {emojies.map((emoji) => (
          <EmojiCard
            key={emoji.id}
            emoji={emoji}
            onClick={setFullscreenEmoji}
          />
        ))}
      </div>
      {fullscreenEmoji && (
        <FullscreenEmoji emoji={fullscreenEmoji} onClose={onDialogClose} />
      )}
    </>
  );
}
