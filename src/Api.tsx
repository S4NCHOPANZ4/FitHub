import axios from "axios";
import { Api_fetchMuscle } from "./typos";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_HOST = import.meta.env.VITE_API_HOST;

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
    // const options = {
    //     method: 'GET',
    //     url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
    //     params: {muscle: 'biceps'},
    //     headers: {
    //         'X-RapidAPI-Key': API_KEY,
    //         'X-RapidAPI-Host': API_HOST
    //     }
    // };

    // axios.request(options).then(function (response) {
    //     console.log(response);
        
    //     return response;

    // }).catch(function (error) {
    //     throw error;
    // });
}


