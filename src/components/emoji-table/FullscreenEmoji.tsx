import React, { useEffect } from 'react';
import { DisplayEmoji } from '../emoji/DisplayEmoji';
import useEmojiFullscreen from '../../hooks/useEmojiFullscreen';

export function FullscreenEmoji() {
  const { currentEmoji, clear } = useEmojiFullscreen();

  useEffect(() => {
    if (currentEmoji) {
      // disable scrollbar from body
      document.body.style.overflow = 'hidden';

      // Push a dummy state into history, this enables the user to close the fullscreen emoji by pressing the
      // back-button. There is no need to check if there already is a dummy state in the history as we're always
      // pushing the same one. This way the browser recognized them as one.
      window.history.pushState(
        null,
        'Emoji fullscreen open',
        window.location.pathname
      );
    } else {
      // re-enable scrollbar
      document.body.style.overflow = 'auto';
    }

    const popStateHandler = (e: PopStateEvent) => {
      // catch the pop state event when there is an emoji in fullscreen view and just hide the fullscreen instead
      if (currentEmoji) {
        clear();
      } else {
        window.history.back();
      }
    };

    window.addEventListener('popstate', popStateHandler);

    return () => {
      window.removeEventListener('popstate', popStateHandler);
    };
  }, [currentEmoji, clear]);

  return (
    <div>
      {currentEmoji && <div
          className="fixed top-0 left-0 w-screen h-screen bg-white z-50 flex items-center justify-center"
          onClick={clear}>
          <DisplayEmoji
              emoji={currentEmoji}
              className="w-96 h-96 max-h-vmin max-w-vmin object-contain p-8"
          />
      </div>}
    </div>
  );
}
