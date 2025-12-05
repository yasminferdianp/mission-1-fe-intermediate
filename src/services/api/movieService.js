import apiClient from './axiosConfig';

// Resource endpoint untuk movies
const MOVIES_ENDPOINT = '/movies';

/**
 * GET - Mengambil semua data movies
 * @returns {Promise} Promise yang berisi array of movies
 */
export const getMovies = async () => {
  try {
    const response = await apiClient.get(MOVIES_ENDPOINT);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

/**
 * GET - Mengambil data movie berdasarkan ID
 * @param {string|number} id - ID dari movie
 * @returns {Promise} Promise yang berisi data movie
 */
export const getMovieById = async (id) => {
  try {
    const response = await apiClient.get(`${MOVIES_ENDPOINT}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie with id ${id}:`, error);
    throw error;
  }
};

/**
 * ADD - Menambahkan movie baru
 * @param {Object} movieData - Data movie yang akan ditambahkan
 * @returns {Promise} Promise yang berisi data movie yang baru dibuat
 */
export const addMovie = async (movieData) => {
  try {
    console.log('Sending movie data to API:', movieData);
    const response = await apiClient.post(MOVIES_ENDPOINT, movieData);
    console.log('Movie added successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding movie:', error);
    console.error('Error details:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      requestData: movieData
    });
    throw error;
  }
};

/**
 * UPDATE - Mengupdate data movie yang sudah ada
 * @param {string|number} id - ID dari movie yang akan diupdate
 * @param {Object} movieData - Data movie yang akan diupdate
 * @returns {Promise} Promise yang berisi data movie yang sudah diupdate
 */
export const updateMovie = async (id, movieData) => {
  try {
    const response = await apiClient.put(`${MOVIES_ENDPOINT}/${id}`, movieData);
    return response.data;
  } catch (error) {
    console.error(`Error updating movie with id ${id}:`, error);
    throw error;
  }
};

/**
 * DELETE - Menghapus movie berdasarkan ID
 * @param {string|number} id - ID dari movie yang akan dihapus
 * @returns {Promise} Promise yang berisi response dari server
 */
export const deleteMovie = async (id) => {
  try {
    const response = await apiClient.delete(`${MOVIES_ENDPOINT}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting movie with id ${id}:`, error);
    throw error;
  }
};

