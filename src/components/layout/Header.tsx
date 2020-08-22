import React, { useEffect, useState } from 'react';
import useEmojiVariant from '../../hooks/useEmojiVariant';
import { emojiList } from '../../util/emoji/emoji-list.const';
import { Emoji, EmojiVariants } from '../../util/emoji/emoji.type';
import { randomBetween } from '../../util/math/random';
import { DisplayEmoji } from '../emoji/DisplayEmoji';

export function Header() {
  const [index, setIndex] = useState<number>(0);
  const [emoji, setEmoji] = useState<Emoji>();
  const { variant } = useEmojiVariant();

  useEffect(() => {
    setIndex(randomBetween(0, emojiList(EmojiVariants.APPLE).length));
  }, []);

  useEffect(() => {
    setEmoji(emojiList(variant)[index]);
  }, [variant, index]);

  return (
    <div className="h-16 w-full relative bg-white shadow">
      <div className="max-w-screen-lg mx-auto items-center h-full flex px-4">
        {emoji && <DisplayEmoji emoji={emoji} className="h-10 mr-4" />}
        <span className="text-lg text-gray-900 font-bold tracking">
          Emoji Communicator
        </span>
      </div>
    </div>
  );
}
