import React, { useState } from 'react';
import LinkDisplay  from './components/LinkDisplay';
import LinkForm from './components/LinkForm';


function App() {
  const [shortenedUrl, setShortenedUrl] = useState('');

  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-lg mx-auto my-10 p-5">
        <h1 className="text-5xl font-bold mb-4">Link Shortener App</h1>
        <div className=''>
          <LinkForm setShortenedUrl={setShortenedUrl}/>
          {shortenedUrl && (
            <div className="mt-4">
              <p className="text-green-700 font-medium">Shortened URL:</p>
              <a
                href={shortenedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-500 font-medium"
              >
                {shortenedUrl}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
