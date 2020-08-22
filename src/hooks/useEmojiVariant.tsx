import React, { createContext, ReactChild, useContext, useState } from 'react';
import { EmojiVariants } from '../util/emoji/emoji.type';

type provideEmojiVariant = {
  variant: EmojiVariants;
  setVariant: (e: EmojiVariants) => void;
};

const localStorageKey = 'emoji-variant';

const emojiVariantContext = createContext<provideEmojiVariant>(
  {} as provideEmojiVariant
);

export function ProvideEmojiVariant({ children }: { children: ReactChild }) {
  const emojiVariant = useProvideEmojiVariant();
  return (
    <emojiVariantContext.Provider value={emojiVariant}>
      {children}
    </emojiVariantContext.Provider>
  );
}

export const useEmojiVariant = () => {
  return useContext(emojiVariantContext);
};

function getInitialValue(): EmojiVariants {
  const storedValue = parseInt(localStorage.getItem(localStorageKey) || '', 10);

  if (storedValue && !isNaN(storedValue) && EmojiVariants[storedValue]) {
    return storedValue;
  } else {
    return 0;
  }
}

function useProvideEmojiVariant() {
  const [variant, setStoredVariant] = useState<EmojiVariants>(
    getInitialValue()
  );

  const setVariant = (newVariant: EmojiVariants) => {
    localStorage.setItem(localStorageKey, String(newVariant));
    setStoredVariant(newVariant);
  };

  return { variant, setVariant };
}
export default useEmojiVariant;
