import axios from 'axios';

export const BASE_URL = 'https://api.themoviedb.org/3/';
export const ImgAdress = 'https://image.tmdb.org/t/p/w300';

const API_KEY = 'e8683cedff7250ee8b850a9caf6fe30d';

const trending = 'trending/movie/day';
const search = 'search/movie';
const byId = 'movie/';
const actors = '/credits';
const reviews = '/reviews';

export async function searchTrending() {
  try {
    const response = await axios.get(`${BASE_URL}${trending}`, {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Error occurred during API request:', error);
    throw error;
  }
}

export async function searchMovies(query) {
  try {
    const response = await axios.get(`${BASE_URL}${search}`, {
      params: {
        api_key: API_KEY,
        query: query,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error occurred during API request:', error);
    throw error;
  }
}

export async function searchById(id) {
  try {
    const response = await axios.get(`${BASE_URL}${byId}${id}`, {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error occurred during API request:', error);
    throw error;
  }
}

export async function searchCredits(id) {
  try {
    const response = await axios.get(`${BASE_URL}${byId}${id}${actors}`, {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error occurred during API request:', error);
    throw error;
  }
}

export async function searchReviews(id) {
  try {
    const response = await axios.get(`${BASE_URL}${byId}${id}${reviews}`, {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error occurred during API request:', error);
    throw error;
  }
}
