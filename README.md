# Mission FE1 - CHILL Streaming App

Aplikasi streaming film dengan implementasi API dinamis untuk operasi CRUD (Create, Read, Update, Delete) menggunakan ReactJS.

## Fitur

- ✅ Implementasi API dinamis dengan Axios
- ✅ Operasi CRUD lengkap (GET, ADD, UPDATE, DELETE)
- ✅ Custom hooks untuk memisahkan logika API dari komponen
- ✅ Axios interceptors untuk headers, logging, dan authorization
- ✅ Environment variables untuk konfigurasi API URL
- ✅ Error handling dan loading states

## Setup API (MockAPI.io)

### Langkah 1: Buat Akun MockAPI

1. Kunjungi [https://mockapi.io/](https://mockapi.io/)
2. Buat akun gratis
3. Buat project baru

### Langkah 2: Buat Resource "movies"

1. Di dashboard MockAPI, klik "New Resource"
2. Nama resource: `movies`
3. Tambahkan fields berikut:
   - `title` (String)
   - `image` (String)
   - `genre` (String)
   - `rating` (Number)
   - `status` (String)
4. Klik "Create"

### Langkah 3: Konfigurasi Environment Variable

1. Salin URL API dari MockAPI (contoh: `https://67890abcdef1234567890.mockapi.io/api/v1`)
2. Buat file `.env` di root project (jika belum ada)
3. Tambahkan:
   ```
   VITE_API_BASE_URL=https://YOUR_MOCKAPI_URL/api/v1
   ```
   Ganti `YOUR_MOCKAPI_URL` dengan URL MockAPI Anda

4. Restart development server setelah membuat/mengubah file `.env`

## Struktur Folder API

```
src/
├── services/
│   └── api/
│       ├── axiosConfig.js      # Konfigurasi Axios dengan interceptors
│       ├── movieService.js     # Fungsi CRUD untuk movies
│       └── index.js            # Export semua services
├── hooks/
│   └── useMovies.js            # Custom hook untuk operasi movies
└── pages/
    └── myList.jsx              # Komponen yang menggunakan API
```

## Penggunaan

### Menggunakan Custom Hook

```javascript
import { useMovies } from '../hooks/useMovies';

function MyComponent() {
  const {
    movies,           // Array of movies
    loading,          // Loading state
    error,            // Error message
    handleAddMovie,   // Function untuk menambah movie
    handleUpdateMovie,// Function untuk update movie
    handleDeleteMovie // Function untuk delete movie
  } = useMovies();

  // Hook akan otomatis fetch data saat component mount
}
```

### Menggunakan Service Langsung

```javascript
import { getMovies, addMovie, updateMovie, deleteMovie } from '../services/api/movieService';

// GET
const movies = await getMovies();

// ADD
const newMovie = await addMovie({
  title: "Movie Title",
  image: "g1.png",
  genre: "Action",
  rating: 4.5,
  status: "Belum Selesai"
});

// UPDATE
const updated = await updateMovie(id, { title: "New Title" });

// DELETE
await deleteMovie(id);
```

## Teknologi yang Digunakan

- React 19.2.0
- React Router DOM 7.9.6
- Axios (untuk HTTP requests)
- Vite (build tool)
- Tailwind CSS 4.1.17

## Scripts

```bash
# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Lint
npm run lint
```

## Catatan

- API URL disimpan di file `.env` untuk keamanan dan portabilitas
- Interceptors digunakan untuk menangani headers, logging, dan authorization secara terpusat
- Custom hooks membantu memisahkan logika API dari komponen React
- Semua operasi CRUD sudah diimplementasikan dengan error handling

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
