import React, { useState } from 'react';

const CopyButton = ({ textToCopy }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(textToCopy);
        setIsCopied(true);
    }
  return (
    <button
        onClick={handleCopyClick}
        className={`px-3 py-1 bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isCopied ? 'bg-green-500' : 'hover:bg-blue-600'}`}
    >
        {isCopied ? 'Copied!' : 'Copy'}
    </button>
  )
}

export default CopyButton;