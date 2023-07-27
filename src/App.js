import React, { useState } from 'react';
import LinkDisplay  from './components/LinkDisplay';
import LinkForm from './components/LinkForm';


function App() {
  const [shortenedUrl, setShortenedUrl] = useState('');

  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-lg mx-auto my-10 p-5">
        <h1 className="text-5xl font-bold mb-4 text-center">Link Shortener</h1>
        <LinkForm setShortenedUrl={setShortenedUrl}/>
        {shortenedUrl && <LinkDisplay shortenedUrl={shortenedUrl} />}
      </div>
    </div>
  );
}

export default App;
