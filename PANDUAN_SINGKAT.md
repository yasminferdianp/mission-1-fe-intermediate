# 🚀 Panduan Singkat Setup MockAPI (5 Menit)

## ⚡ Quick Start

### 1️⃣ Daftar MockAPI (2 menit)
```
1. Buka: https://mockapi.io/
2. Klik "Sign Up" → Pilih Google atau Email
3. Login → Masuk ke Dashboard
```

### 2️⃣ Buat Resource (2 menit)
```
1. Klik "New Resource"
2. Nama: movies
3. Tambah 5 fields:
   - title (String)
   - image (String)  
   - genre (String)
   - rating (Number)
   - status (String)
4. Klik "Create"
```

### 3️⃣ Salin URL (30 detik)
```
Dari MockAPI, salin URL seperti:
https://67890abcdef1234567890.mockapi.io/api/v1/movies

Hapus "/movies" di akhir, jadi:
https://67890abcdef1234567890.mockapi.io/api/v1
```

### 4️⃣ Update .env (30 detik)
```
Buka file .env, isi:
VITE_API_BASE_URL=https://67890abcdef1234567890.mockapi.io/api/v1
(Ganti dengan URL Anda sendiri)
```

### 5️⃣ Restart Server (10 detik)
```
1. Tekan Ctrl+C di terminal
2. Ketik: npm run dev
3. Buka: http://localhost:5173/my-list
```

## ✅ Selesai! Test dengan menambah film baru.

