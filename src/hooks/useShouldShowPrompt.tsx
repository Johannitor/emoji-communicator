import { differenceInDays, formatISO, parseISO } from 'date-fns';
import { useState } from 'react';

// Source: https://blog.wick.technology/pwa-install-prompt/

const getInstallPromptLastSeenAt = (promptName: string): string | null =>
  localStorage.getItem(promptName);

const setInstallPromptSeenToday = (promptName: string): void => {
  const today = formatISO(new Date());
  localStorage.setItem(promptName, today);
};

function getUserShouldBePromptedToInstall(
  promptName: string,
  daysToWaitBeforePromptingAgain: number
): boolean {
  const lastSeenAt = getInstallPromptLastSeenAt(promptName);

  if (!lastSeenAt) {
    return true;
  } else {
    const lastPrompt = parseISO(lastSeenAt);
    const daysSinceLastPrompt = differenceInDays(lastPrompt, new Date());
    return (
      isNaN(daysSinceLastPrompt) ||
      daysSinceLastPrompt > daysToWaitBeforePromptingAgain
    );
  }
}

export function useShouldShowPrompt(
  promptName: string,
  daysToWaitBeforePromptingAgain = 30
): [boolean, () => void] {
  const [
    userShouldBePromptedToInstall,
    setUserShouldBePromptedToInstall,
  ] = useState(
    getUserShouldBePromptedToInstall(promptName, daysToWaitBeforePromptingAgain)
  );

  const handleUserSeeingInstallPrompt = () => {
    setUserShouldBePromptedToInstall(false);
    setInstallPromptSeenToday(promptName);
  };

  return [userShouldBePromptedToInstall, handleUserSeeingInstallPrompt];
}
