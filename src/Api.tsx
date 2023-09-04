import axios from "axios";
import { Api_fetchMuscle } from "./typos";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_HOST = import.meta.env.VITE_API_HOST;

export async function fetchMuscle(params: Api_fetchMuscle) {
    const options = {
        method: 'GET',
        url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
        params,
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST
        }
    };

    axios.request(options).then(function (response) {
        return response.data;

    }).catch(function (error) {
        throw error;
    });
}


