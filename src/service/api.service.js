import axios from "axios";

const BASE_URL = 'https://restcountries.com/v3.1'

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'rest-countriesapi': 'https://restcountries.com/v3.1'
    }
};

export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URL}/${url}`, options)
        return response.data
    },
}