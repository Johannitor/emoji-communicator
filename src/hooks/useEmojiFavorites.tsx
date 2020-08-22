import React, {
  createContext,
  ReactChild,
  useCallback,
  useContext,
  useState,
} from 'react';
import { emojiList } from '../util/emoji/emoji-list.const';
import { Emoji, EmojiVariants } from '../util/emoji/emoji.type';

type provideEmojiFavorites = {
  favorites: Emoji[];
  toggleFavorite: (e: Emoji) => void;
};

const localStorageKey = 'emoji-favories';

const emojiFavoriteContext = createContext<provideEmojiFavorites>(
  {} as provideEmojiFavorites
);

export function ProvideEmojiFavorites({ children }: { children: ReactChild }) {
  const emojiFavorites = useProvideEmojiFavorites();
  return (
    <emojiFavoriteContext.Provider value={emojiFavorites}>
      {children}
    </emojiFavoriteContext.Provider>
  );
}

export const useEmojiFavories = () => {
  return useContext(emojiFavoriteContext);
};

function getInitialValue(): Emoji[] {
  let storedEmojis: Emoji[] | null;
  const localStorageValue = localStorage.getItem(localStorageKey);

  if (localStorageValue) {
    try {
      storedEmojis = JSON.parse(localStorageValue);
    } catch {
      storedEmojis = null;
    }

    if (storedEmojis && Array.isArray(storedEmojis)) {
      let mappedEmojis = storedEmojis.map((storedEmoji) =>
        emojiList(EmojiVariants.APPLE).find(
          (emoji) => storedEmoji.id === emoji.id
        )
      );
      mappedEmojis = mappedEmojis.filter(Boolean);
      return mappedEmojis[0] ? (mappedEmojis as Emoji[]) : [];
    }
  }
  return [];
}

function useProvideEmojiFavorites() {
  const [favorites, setFavorites] = useState<Emoji[]>(getInitialValue());

  const updateLocalStorage = useCallback((newFavorites: Emoji[]) => {
    localStorage.setItem(localStorageKey, JSON.stringify(newFavorites));
  }, []);

  const toggleFavorite = useCallback(
    (favorite: Emoji) => {
      const newState = [...favorites];

      const index = newState.findIndex((emoji) => emoji.id === favorite.id);
      if (index !== -1) {
        newState.splice(index, 1);
      } else {
        newState.push(favorite);
      }

      setFavorites(newState);
      updateLocalStorage(newState);
    },
    [favorites, setFavorites, updateLocalStorage]
  );

  return { favorites, toggleFavorite };
}
export default useEmojiFavories;
