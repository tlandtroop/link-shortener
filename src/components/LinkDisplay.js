import React from 'react';
import CopyButton from './CopyButton';


const LinkDisplay = ({ shortenedUrl }) => {
  return (
    <div className="max-w-md mx-auto mt-8">
      {shortenedUrl ? (
        <div className="flex items-center">
          <p className="text-green-700 font-medium">Shortened URL:</p>
          <a
            href={shortenedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-500 font-medium ml-2 mr-5"
          >
            {shortenedUrl}
          </a>
          <div className='ml-auto'>
            <CopyButton textToCopy={shortenedUrl} />
          </div>
        </div>
      ) : (
        <p className="text-red-500 font-medium">No shortened URL available yet.</p>
      )}
    </div>
  );
};

export default LinkDisplay;