import axios from "axios";
import React, { useState } from 'react'


const LinkForm = ({ setShortenedUrl }) => {
    const [originalUrl, setOriginalUrl] = useState('');

    const encodedParams = new URLSearchParams();
    encodedParams.set('url', originalUrl);

    const options = {
        method: 'POST',
        url: 'https://url-shortener-service.p.rapidapi.com/shorten',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': "1434f4c9b6msh5d5b4dd205c6566p167693jsne51d1a3c19bd",
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
            setShortenedUrl(shortenedUrl);
        } catch (error) {
            console.error('Error shortening the link: ', error);
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
        </form>
    </div>
  )
}

export default LinkForm;