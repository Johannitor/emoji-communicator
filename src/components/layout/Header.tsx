import React, { useEffect, useState } from 'react';
import { emojiList } from '../../util/emoji/emoji-list.const';
import { Emoji } from '../../util/emoji/emoji.type';
import { randomArrayItem } from '../../util/randomArrayItem';
import { DisplayEmoji } from '../emoji/DisplayEmoji';

export function Header() {
  const [emoji, setEmoji] = useState<Emoji>();

  useEffect(() => {
    setEmoji(randomArrayItem(emojiList));
  }, []);

  return (
    <div className="h-16 w-full relative bg-white shadow">
      <div className="max-w-screen-lg mx-auto items-center h-full flex px-4">
        {emoji && <DisplayEmoji emoji={emoji} className="h-10 mr-2" />}
        <span className="text-lg text-gray-900 font-bold tracking">
          Emoji Communicator
        </span>
      </div>
    </div>
  );
}
