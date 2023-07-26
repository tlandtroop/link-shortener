import React from 'react';


const LinkDisplay = ({ shortenedUrl }) => {
  return (
    <div className=''>
      {shortenedUrl ? (
        <p>Shortened Link: <a href={shortenedUrl} target='_blank'>{shortenedUrl}</a></p>
      ) : (
        <p>No shortened URL available yet.</p>
      )}
    </div>
  );
};

export default LinkDisplay;