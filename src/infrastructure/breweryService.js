// src/infrastructure/breweryService.js
import axios from 'axios';

const apiUrl = 'https://api.openbrewerydb.org/v1/breweries?per_page=20';

export const fetchBreweries = async () => {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error("Error fetching breweries:", error);
        throw error;
    }
};
