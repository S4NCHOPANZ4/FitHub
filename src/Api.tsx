import axios from "axios";
import { Api_fetchMuscle } from "./typos";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_HOST = import.meta.env.VITE_API_HOST;
const API_HOST_VIDEO = import.meta.env.VITE_API_HOST_VIDEO;

export async function fetchMuscle(params: Api_fetchMuscle) {

  try {
    const response = await axios.get('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises', {
      params,
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching muscle:", error);
    throw error;
  }
}

export async function fetchVideo(params: string | undefined) {

  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: { q: params, part: 'snippet,id', maxResults: '1', regionCode: 'US' },
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST_VIDEO
    }
  };


  console.log(params);
  try {
    const response = await axios.request(options)
    return response.data;
  } catch (error) {
    console.error("Error fetching video:", error);
    throw error;
  }
}


