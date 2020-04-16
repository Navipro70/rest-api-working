import {axiosInstance} from "./axiosInstance";

export const countriesApi = {
   getAllCountries() {
       return axiosInstance.get("all").then(response => {
           return response.data
       })
   }
};