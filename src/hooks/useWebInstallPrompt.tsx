import { useEffect, useState } from 'react';
import { useShouldShowPrompt } from './useShouldShowPrompt';

// Source: https://blog.wick.technology/pwa-install-prompt/

const webInstallPromptedAt = 'webInstallPromptedAt';

const useWebInstallPrompt = (): [any, () => void, () => void] => {
  const [installPromptEvent, setInstallPromptEvent] = useState<
    BeforeInstallPromptEvent
  >();

  const [
    userShouldBePromptedToInstall,
    handleUserSeeingInstallPrompt,
  ] = useShouldShowPrompt(webInstallPromptedAt);

  useEffect(() => {
    const beforeInstallPromptHandler = (event: any) => {
      console.log(event);
      event.preventDefault();

      // check if user has already been asked
      if (userShouldBePromptedToInstall) {
        // store the event for later use
        setInstallPromptEvent(event as BeforeInstallPromptEvent);
      }
    };

    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);

    return () =>
      window.removeEventListener(
        'beforeinstallprompt',
        beforeInstallPromptHandler
      );
  }, [userShouldBePromptedToInstall]);

  const handleInstallDeclined = () => {
    handleUserSeeingInstallPrompt();
    setInstallPromptEvent(undefined);
  };

  const handleInstallAccepted = () => {
    if (installPromptEvent) {
      // show native prompt
      installPromptEvent.prompt();

      // decide what to do after the user chooses
      installPromptEvent.userChoice.then((choice) => {
        // if the user declined, we don't want to show the prompt again
        if (choice.outcome !== 'accepted') {
          handleUserSeeingInstallPrompt();
        }
        setInstallPromptEvent(undefined);
      });
    }
  };
  return [installPromptEvent, handleInstallDeclined, handleInstallAccepted];
};
export default useWebInstallPrompt;
