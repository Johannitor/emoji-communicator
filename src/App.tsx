import React from 'react';
import './assets/main.css';
import { EmojiTable } from './components/emoji-table/EmojiTable';
import { WebInstallPrompt } from './components/install-prompt/WebInstallPrompt';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { emojiList } from './util/emoji/emoji-list.const';

function App() {
  return (
    <div>
      <Header />
      <div className="max-w-screen-lg mx-auto p-4">
        <EmojiTable emojies={emojiList()} />
      </div>
      <Footer />
      <WebInstallPrompt />
    </div>
  );
}

export default App;
