import { useState, useEffect, useCallback } from 'react';
import { getMovies, addMovie, updateMovie, deleteMovie } from '../services/api/movieService';

/**
 * Custom hook untuk mengelola operasi CRUD movies
 * Memisahkan logika API dari komponen React
 */
export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // GET - Mengambil semua movies
  const fetchMovies = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getMovies();
      setMovies(data);
    } catch (err) {
      setError(err.message || 'Gagal mengambil data movies');
      console.error('Error fetching movies:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Load movies saat hook pertama kali digunakan
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  // ADD - Menambahkan movie baru
  const handleAddMovie = useCallback(async (movieData) => {
    setLoading(true);
    setError(null);
    try {
      const newMovie = await addMovie(movieData);
      setMovies((prevMovies) => [...prevMovies, newMovie]);
      return { success: true, data: newMovie };
    } catch (err) {
      const errorMessage = err.message || 'Gagal menambahkan movie';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  // UPDATE - Mengupdate movie yang sudah ada
  const handleUpdateMovie = useCallback(async (id, movieData) => {
    setLoading(true);
    setError(null);
    try {
      const updatedMovie = await updateMovie(id, movieData);
      setMovies((prevMovies) =>
        prevMovies.map((movie) => (movie.id === id ? updatedMovie : movie))
      );
      return { success: true, data: updatedMovie };
    } catch (err) {
      const errorMessage = err.message || 'Gagal mengupdate movie';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  // DELETE - Menghapus movie
  const handleDeleteMovie = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deleteMovie(id);
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
      return { success: true };
    } catch (err) {
      const errorMessage = err.message || 'Gagal menghapus movie';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    movies,
    loading,
    error,
    fetchMovies,
    handleAddMovie,
    handleUpdateMovie,
    handleDeleteMovie,
  };
};

