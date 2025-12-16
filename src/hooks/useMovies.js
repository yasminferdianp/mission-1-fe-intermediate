import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMoviesThunk,
  addMovieThunk,
  updateMovieThunk,
  deleteMovieThunk,
} from '../store/redux/moviesSlice';

/**
 * Custom hook untuk mengelola operasi CRUD movies
 * Memisahkan logika API + state management (Redux) dari komponen React
 */
export const useMovies = () => {
  const dispatch = useDispatch();
  const { items: movies, loading, error } = useSelector((state) => state.movies);

  // GET - Mengambil semua movies
  const fetchMovies = useCallback(async () => {
    try {
      await dispatch(fetchMoviesThunk()).unwrap();
    } catch (err) {
      console.error('Error fetching movies:', err);
    }
  }, [dispatch]);

  // Load movies saat hook pertama kali digunakan
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  // ADD - Menambahkan movie baru
  const handleAddMovie = useCallback(async (movieData) => {
    try {
      const newMovie = await dispatch(addMovieThunk(movieData)).unwrap();
      return { success: true, data: newMovie };
    } catch (err) {
      const errorMessage = err.message || 'Gagal menambahkan movie';
      return { success: false, error: errorMessage };
    }
  }, [dispatch]);

  // UPDATE - Mengupdate movie yang sudah ada
  const handleUpdateMovie = useCallback(async (id, movieData) => {
    try {
      const updatedMovie = await dispatch(
        updateMovieThunk({ id, movieData }),
      ).unwrap();
      return { success: true, data: updatedMovie };
    } catch (err) {
      const errorMessage = err.message || 'Gagal mengupdate movie';
      return { success: false, error: errorMessage };
    }
  }, [dispatch]);

  // DELETE - Menghapus movie
  const handleDeleteMovie = useCallback(async (id) => {
    try {
      await dispatch(deleteMovieThunk(id)).unwrap();
      return { success: true };
    } catch (err) {
      const errorMessage = err.message || 'Gagal menghapus movie';
      return { success: false, error: errorMessage };
    }
  }, [dispatch]);

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

