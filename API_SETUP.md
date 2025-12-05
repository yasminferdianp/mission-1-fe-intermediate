# Panduan Setup API untuk Mission FE1

## STEP 1: Siapkan Fake API atau Mock Data

### Menggunakan MockAPI.io

1. **Buat akun di MockAPI.io**
   - Kunjungi: https://mockapi.io/
   - Daftar dengan email atau Google account
   - Login ke dashboard

2. **Buat Resource baru**
   - Klik tombol "New Resource" atau "Add Resource"
   - Isi form:
     - **Resource name**: `movies`
     - **Fields**:
       ```
       title (String)
       image (String)
       genre (String)
       rating (Number)
       status (String)
       ```
   - Klik "Create"

3. **Dapatkan API URL**
   - Setelah resource dibuat, MockAPI akan memberikan URL seperti:
     `https://67890abcdef1234567890.mockapi.io/api/v1/movies`
   - Base URL-nya adalah: `https://67890abcdef1234567890.mockapi.io/api/v1`

## STEP 2: Konfigurasi Environment Variable

1. **Buat file `.env` di root project**
   ```env
   VITE_API_BASE_URL=https://YOUR_MOCKAPI_ID.mockapi.io/api/v1
   ```
   Ganti `YOUR_MOCKAPI_ID` dengan ID dari MockAPI Anda.

2. **Contoh file `.env`:**
   ```env
   VITE_API_BASE_URL=https://67890abcdef1234567890.mockapi.io/api/v1
   ```

3. **Restart development server**
   - Hentikan server (Ctrl+C)
   - Jalankan lagi: `npm run dev`

## Struktur API yang Sudah Diimplementasikan

### ✅ Folder `services/api/`
- `axiosConfig.js` - Konfigurasi Axios dengan interceptors
- `movieService.js` - Fungsi CRUD (GET, ADD, UPDATE, DELETE)
- `index.js` - Export semua services

### ✅ Custom Hooks
- `hooks/useMovies.js` - Custom hook untuk operasi movies

### ✅ Interceptors
- Request interceptor: menangani headers, logging, authorization
- Response interceptor: menangani response dan error handling

### ✅ Fungsi CRUD
- `getMovies()` - GET semua movies
- `getMovieById(id)` - GET movie by ID
- `addMovie(data)` - ADD movie baru
- `updateMovie(id, data)` - UPDATE movie
- `deleteMovie(id)` - DELETE movie

## Testing API

Setelah setup, Anda bisa test API dengan:

1. **Membuka halaman `/my-list`**
2. **Coba operasi:**
   - Tambah film baru
   - Edit film yang ada
   - Hapus film
   - Lihat daftar film

3. **Cek console browser** untuk melihat log API requests/responses

## Troubleshooting

### API tidak terhubung
- Pastikan file `.env` sudah dibuat dan berisi URL yang benar
- Pastikan sudah restart development server setelah membuat `.env`
- Cek console browser untuk error message

### CORS Error
- MockAPI.io sudah handle CORS, jadi tidak perlu khawatir
- Jika masih error, pastikan URL di `.env` sudah benar

### Data tidak muncul
- Pastikan resource `movies` sudah dibuat di MockAPI
- Cek Network tab di browser DevTools untuk melihat request/response
- Pastikan endpoint URL benar: `{BASE_URL}/movies`

## Catatan Penting

- ✅ URL API disimpan di `.env` untuk menghindari hardcoding
- ✅ Interceptors digunakan untuk header, logging, dan authorization
- ✅ Custom hooks memisahkan logika API dari komponen
- ✅ Semua operasi CRUD sudah diimplementasikan dengan error handling

