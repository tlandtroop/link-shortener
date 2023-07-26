import axios from "axios";
import React, { useState } from 'react'


const LinkForm = ({ setShortenedUrl }) => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [error, setError] = useState('');

    const encodedParams = new URLSearchParams();
    encodedParams.set('url', originalUrl);

    const options = {
        method: 'POST',
        url: 'https://url-shortener-service.p.rapidapi.com/shorten',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
        },
        data: encodedParams,
    };

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const res = await axios.request(options)
            const shortenedUrl = res.data.result_url;
            console.log(res.data.result_url);
            setError('');
            setShortenedUrl(shortenedUrl);
        } catch (error) {
            console.error('Error shortening the link: ', error);
            setError('An error occurred while shortening the link. Please try again later.')
            setShortenedUrl('');
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 flex flex-col justify-center">
                <input
                    type='text' 
                    value={originalUrl} 
                    onChange={(event) => setOriginalUrl(event.target.value)} 
                    placeholder="Enter your URL..."
                    className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            
            <button 
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Shorten
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
    </div>
  )
}

export default LinkForm;