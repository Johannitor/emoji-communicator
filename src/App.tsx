import React, { useMemo } from 'react';
import './assets/main.css';
import { EmojiFavoriteTable } from './components/emoji-table/EmojiFavoriteTable';
import { EmojiTable } from './components/emoji-table/EmojiTable';
import { WebInstallPrompt } from './components/install-prompt/WebInstallPrompt';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { useEmojiVariant } from './hooks/useEmojiVariant';
import { emojiList } from './util/emoji/emoji-list.const';
import { FullscreenEmoji } from './components/emoji-table/FullscreenEmoji';

function App() {
  const { variant } = useEmojiVariant();
  const emojis = useMemo(() => emojiList(variant), [variant]);

  return (
    <div>
      <Header />
      <div className="max-w-screen-lg mx-auto p-4">
        <h2 className="mb-4 text-xl font-semibold">
          <span role="img"
                aria-label="star">
            ⭐
          </span>{' '}
          Favorited Emojis
        </h2>
        <EmojiFavoriteTable emojis={emojis} />
        <h2 className="my-4 text-xl font-semibold">
          <span role="img"
                aria-label="satelite">
            🛰
          </span>{' '}
          Available Emojis
        </h2>
        <EmojiTable emojis={emojis} />
      </div>
      <Footer />
      <FullscreenEmoji />
      <WebInstallPrompt />
    </div>
  );
}

export default App;
