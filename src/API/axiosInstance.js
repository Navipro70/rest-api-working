import * as axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://restcountries-v1.p.rapidapi.com",
    headers: {
        "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
        "x-rapidapi-key": "032385256fmsh5782b43ae628cb9p1b5223jsna2c69835e69e"
    }
});