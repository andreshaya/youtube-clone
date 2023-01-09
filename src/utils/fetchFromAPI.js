import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const {REACT_APP_API_KEY} = process.env

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};