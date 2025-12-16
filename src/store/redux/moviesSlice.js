import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} from '../../services/api/movieService';

// Thunk untuk mengambil semua movie dari API
export const fetchMoviesThunk = createAsyncThunk(
  'movies/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getMovies();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Gagal mengambil data movies');
    }
  }
);

// Thunk untuk menambah movie baru
export const addMovieThunk = createAsyncThunk(
  'movies/add',
  async (movieData, { rejectWithValue }) => {
    try {
      const newMovie = await addMovie(movieData);
      return newMovie;
    } catch (error) {
      return rejectWithValue(error.message || 'Gagal menambahkan movie');
    }
  }
);

// Thunk untuk mengupdate movie
export const updateMovieThunk = createAsyncThunk(
  'movies/update',
  async ({ id, movieData }, { rejectWithValue }) => {
    try {
      const updatedMovie = await updateMovie(id, movieData);
      return updatedMovie;
    } catch (error) {
      return rejectWithValue(error.message || 'Gagal mengupdate movie');
    }
  }
);

// Thunk untuk menghapus movie
export const deleteMovieThunk = createAsyncThunk(
  'movies/delete',
  async (id, { rejectWithValue }) => {
    try {
      await deleteMovie(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message || 'Gagal menghapus movie');
    }
  }
);

const initialState = {
  items: [], // daftar movies dari API
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all
      .addCase(fetchMoviesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMoviesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload || [];
      })
      .addCase(fetchMoviesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Gagal mengambil data movies';
      })

      // Add
      .addCase(addMovieThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addMovieThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addMovieThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Gagal menambahkan movie';
      })

      // Update
      .addCase(updateMovieThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateMovieThunk.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload;
        state.items = state.items.map((movie) =>
          movie.id === updated.id ? updated : movie
        );
      })
      .addCase(updateMovieThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Gagal mengupdate movie';
      })

      // Delete
      .addCase(deleteMovieThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteMovieThunk.fulfilled, (state, action) => {
        state.loading = false;
        const id = action.payload;
        state.items = state.items.filter((movie) => movie.id !== id);
      })
      .addCase(deleteMovieThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Gagal menghapus movie';
      });
  },
});

export default moviesSlice.reducer;


