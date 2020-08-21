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
    <div className="fixed bottom-4 right-4">
      <div className="flex items-center rounded border-1 border-gray-700 bg-white p-2 gap-1 shadow ml-4">
        <span className="inline-block mx-2 font-semibold">
          Anwendung lokal installieren?
        </span>
        <button
          className="focus:outline-none rounded text-green-700 hover:bg-gray-300 p-1 transition duration-200"
          onClick={handleWebInstallAccepted}>
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
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </button>
        <button
          onClick={handleWebInstallDeclined}
          className="focus:outline-none rounded text-red-700 hover:bg-gray-300 p-1 transition duration-200">
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
