import React, { useMemo } from 'react';
import useEmojiFavories from '../../hooks/useEmojiFavorites';
import { Emoji } from '../../util/emoji/emoji.type';
import { EmojiTable } from './EmojiTable';

type EmojiFavoriteTableProps = {
  emojis: Emoji[];
};

export function EmojiFavoriteTable({ emojis }: EmojiFavoriteTableProps) {
  const { favorites } = useEmojiFavories();

  const favoriteEmojis = useMemo(() => {
    let favoritedEmojis = favorites.map((favorite) =>
      emojis.find((emoji) => emoji.id === favorite.id)
    );
    favoritedEmojis = favoritedEmojis.filter(Boolean);
    return favoritedEmojis[0] ? (favoritedEmojis as Emoji[]) : [];
  }, [emojis, favorites]);

  return favoriteEmojis.length ? (
    <EmojiTable emojis={favoriteEmojis} />
  ) : (
    <div className="w-full flex flex-col items-center justify-center border rounded border-gray-300 bg-gray-200 p-4">
      <span className="text-lg font-bold text-gray-600 inline-block mb-1">
        There are currently no favorited emojis{' '}
        <span role="img" aria-label="sad-face">
          😞
        </span>
      </span>
      <span className="text-gray-500 text-center">
        You can add emojis by holding them down for one second{' '}
        <span role="img" aria-label="press-down">
          👇
        </span>
      </span>
    </div>
  );
}
