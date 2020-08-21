import React from 'react';
import './assets/main.css';
import { EmojiTable } from './components/emoji-table/EmojiTable';
import { emojiList } from './util/emoji/emoji-list.const';

function App() {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <EmojiTable emojies={emojiList} />
    </div>
  );
}

export default App;
