import React, { useCallback, useEffect, useState } from 'react';
import { Emoji } from '../../util/emoji/emoji.type';
import { EmojiCard } from './EmojiCard';
import { FullscreenEmoji } from './FullscreenEmoji';

type EmojiTableProps = {
  emojies: Emoji[];
};

export function EmojiTable({ emojies }: EmojiTableProps) {
  const [fullscreenEmoji, setFullscreenEmoji] = useState<Emoji | null>(null);

  const onDialogClose = useCallback(() => {
    setFullscreenEmoji(null);
  }, [setFullscreenEmoji]);

  useEffect(() => {
    if (!!fullscreenEmoji) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [fullscreenEmoji]);

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