import React, { createContext, ReactChild, useContext, useState } from 'react';
import { Emoji } from '../util/emoji/emoji.type';

type provideEmojiFullscreen = {
  currentEmoji: Emoji | null;
  set: (e: Emoji) => void;
  clear: VoidFunction;
};

const emojiFullscreenContext = createContext<provideEmojiFullscreen>(
  {} as provideEmojiFullscreen
);

export function ProvideEmojiFullscreen({ children }: { children: ReactChild }) {
  const emojiVariant = useProvideEmojiVariant();
  return (
    <emojiFullscreenContext.Provider value={emojiVariant}>
      {children}
    </emojiFullscreenContext.Provider>
  );
}

export const useEmojiFullscreen = () => {
  return useContext(emojiFullscreenContext);
};

function useProvideEmojiVariant(): provideEmojiFullscreen {
  const [currentEmoji, setCurrentEmoji] = useState<Emoji | null>(null);

  const set = (newEmoji: Emoji) => {
    console.log(newEmoji);
    setCurrentEmoji(newEmoji);
  };

  const clear = () => {
    setCurrentEmoji(null);
  }

  return { currentEmoji, set, clear };
}

export default useEmojiFullscreen;
