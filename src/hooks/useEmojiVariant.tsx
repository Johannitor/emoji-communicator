import React, { createContext, ReactChild, useContext, useState } from 'react';
import { EmojiVariants } from '../util/emoji/emoji-list.const';

type provideEmojiVariant = {
  variant: EmojiVariants;
  setVariant: (e: EmojiVariants) => void;
};

const emojiVariantContext = createContext<provideEmojiVariant>(
  {} as provideEmojiVariant
);

export function ProvideEmojiVariant({ children }: { children: ReactChild }) {
  const auth = useProvideEmojiVariant();
  return (
    <emojiVariantContext.Provider value={auth}>
      {children}
    </emojiVariantContext.Provider>
  );
}

export const useEmojiVariant = () => {
  return useContext(emojiVariantContext);
};

function getInitialValue(): EmojiVariants {
  // const possibleStoredValue = localStorage.getItem('emoji-variant');
  return EmojiVariants.WHATSAPP;
}

function useProvideEmojiVariant() {
  const [variant, setStoredVariant] = useState<EmojiVariants>(
    getInitialValue()
  );

  const setVariant = (newVariant: EmojiVariants) => {
    setStoredVariant(newVariant);
  };

  return { variant, setVariant };
}
export default useEmojiVariant;
