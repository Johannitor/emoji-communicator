import React from 'react';
import useWebInstallPrompt from '../../hooks/useWebInstallPrompt';

export function WebInstallPrompt() {
  const [
    webInstallPrompt,
    handleWebInstallDeclined,
    handleWebInstallAccepted,
  ] = useWebInstallPrompt();

  if (!webInstallPrompt) {
    return null;
  }

  return (
    <div className="w-full max-w-full fixed bottom-2 flex justify-center">
      <div className="flex items-center rounded bg-orange-400 text-orange-900 p-2 gap-1 shadow mx-2">
        <span className="inline-block mr-2">Anwendung lokal installieren?</span>
        <button
          className="px-2 py-1 bg-orange-900 text-white rounded"
          onClick={handleWebInstallAccepted}>
          Installieren
        </button>
        <button
          onClick={handleWebInstallDeclined}
          className="focus:outline-none rounded hover:bg-orange-500 p-1 transition duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}
