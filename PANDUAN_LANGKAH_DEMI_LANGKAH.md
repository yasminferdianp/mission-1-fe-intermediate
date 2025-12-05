# 📚 Panduan Langkah Demi Langkah Setup API

## 🎯 Tujuan
Kita akan membuat API fake menggunakan MockAPI.io agar aplikasi bisa melakukan operasi CRUD (Create, Read, Update, Delete) data movies.

---

## 📝 LANGKAH 1: Membuat Akun MockAPI.io

### 1.1 Buka Website MockAPI
1. Buka browser (Chrome, Firefox, dll)
2. Ketik di address bar: **https://mockapi.io/**
3. Tekan Enter
4. Website MockAPI akan terbuka

### 1.2 Daftar Akun
1. Klik tombol **"Sign Up"** atau **"Get Started"** (biasanya di pojok kanan atas)
2. Pilih salah satu cara:
   - **Opsi A**: Daftar dengan Email
     - Masukkan email Anda
     - Masukkan password
     - Klik "Sign Up"
   - **Opsi B**: Daftar dengan Google (lebih cepat)
     - Klik "Sign in with Google"
     - Pilih akun Google Anda
     - Izinkan akses

### 1.3 Verifikasi Email (jika pakai email)
- Cek email Anda
- Klik link verifikasi yang dikirim MockAPI
- Kembali ke website MockAPI

---

## 📝 LANGKAH 2: Membuat Resource "movies"

### 2.1 Masuk ke Dashboard
1. Setelah login, Anda akan masuk ke **Dashboard** MockAPI
2. Anda akan melihat halaman kosong atau daftar project

### 2.2 Buat Project Baru (jika belum ada)
1. Klik tombol **"New Project"** atau **"Create Project"**
2. Isi nama project (contoh: "Chill Movies" atau "Mission FE1")
3. Klik **"Create"**

### 2.3 Buat Resource "movies"
1. Di dalam project, klik tombol **"New Resource"** atau **"Add Resource"**
2. Akan muncul form untuk membuat resource baru

### 2.4 Isi Form Resource
Isi form dengan data berikut:

**Resource name:**
```
movies
```
*(Tulis persis seperti ini, huruf kecil semua)*

**Fields (Kolom-kolom data):**
Klik tombol **"Add Field"** untuk setiap field berikut:

1. **Field 1:**
   - Name: `title`
   - Type: Pilih **"String"**
   - Klik **"Add"**

2. **Field 2:**
   - Name: `image`
   - Type: Pilih **"String"**
   - Klik **"Add"**

3. **Field 3:**
   - Name: `genre`
   - Type: Pilih **"String"**
   - Klik **"Add"**

4. **Field 4:**
   - Name: `rating`
   - Type: Pilih **"Number"**
   - Klik **"Add"**

5. **Field 5:**
   - Name: `status`
   - Type: Pilih **"String"**
   - Klik **"Add"**

### 2.5 Simpan Resource
1. Setelah semua field ditambahkan, klik tombol **"Create"** atau **"Save"**
2. Resource "movies" akan dibuat
3. MockAPI akan memberikan **URL API** untuk resource ini

---

## 📝 LANGKAH 3: Mendapatkan URL API

### 3.1 Cari URL API
Setelah resource dibuat, Anda akan melihat:

1. **Nama Resource**: `movies`
2. **URL API**: Contoh seperti ini:
   ```
   https://67890abcdef1234567890.mockapi.io/api/v1/movies
   ```

### 3.2 Salin Base URL
Yang kita butuhkan adalah **Base URL**, yaitu bagian sebelum `/movies`:

**Base URL contoh:**
```
https://67890abcdef1234567890.mockapi.io/api/v1
```

**Cara mendapatkan:**
- Lihat URL lengkap: `https://67890abcdef1234567890.mockapi.io/api/v1/movies`
- Hapus bagian `/movies` di akhir
- Base URL: `https://67890abcdef1234567890.mockapi.io/api/v1`

**Atau:**
- Klik pada resource "movies"
- Di bagian atas, ada tulisan "API endpoint"
- Salin URL tersebut, lalu hapus `/movies` di akhir

---

## 📝 LANGKAH 4: Update File .env

### 4.1 Buka File .env
1. Buka folder project di VS Code atau editor Anda
2. Cari file bernama **`.env`** di root folder (folder utama project)
3. Jika tidak ada, buat file baru dengan nama `.env`

### 4.2 Edit File .env
1. Buka file `.env` dengan text editor
2. Isi dengan format berikut:

```env
VITE_API_BASE_URL=https://YOUR_MOCKAPI_ID.mockapi.io/api/v1
```

**Ganti `YOUR_MOCKAPI_ID` dengan ID dari MockAPI Anda**

**Contoh:**
Jika URL MockAPI Anda adalah:
```
https://67890abcdef1234567890.mockapi.io/api/v1/movies
```

Maka Base URL-nya adalah:
```
https://67890abcdef1234567890.mockapi.io/api/v1
```

Jadi file `.env` diisi:
```env
VITE_API_BASE_URL=https://67890abcdef1234567890.mockapi.io/api/v1
```

### 4.3 Simpan File
1. Simpan file `.env`
2. Pastikan tidak ada spasi di awal atau akhir URL

---

## 📝 LANGKAH 5: Restart Development Server

### 5.1 Hentikan Server (jika sedang berjalan)
1. Buka terminal/command prompt di VS Code
2. Tekan **Ctrl + C** untuk menghentikan server
3. Tunggu sampai server benar-benar berhenti

### 5.2 Jalankan Server Lagi
1. Di terminal, ketik:
   ```bash
   npm run dev
   ```
2. Tekan Enter
3. Server akan mulai berjalan
4. Anda akan melihat URL seperti: `http://localhost:5173`

---

## 📝 LANGKAH 6: Test Aplikasi

### 6.1 Buka Aplikasi di Browser
1. Buka browser
2. Ketik di address bar: **http://localhost:5173**
3. Tekan Enter
4. Aplikasi akan terbuka

### 6.2 Buka Halaman My List
1. Login terlebih dahulu (atau register jika belum punya akun)
2. Setelah login, klik menu **"Daftar Saya"** atau akses langsung: **http://localhost:5173/my-list**

### 6.3 Test Operasi CRUD

#### Test 1: GET (Membaca Data)
- Halaman akan otomatis menampilkan daftar movies dari API
- Jika belum ada data, akan muncul pesan "Belum ada film di daftar Anda"

#### Test 2: ADD (Menambah Data)
1. Klik tombol **"+ Tambah Film"**
2. Isi form:
   - **Judul Film**: Contoh: "Avengers"
   - **Gambar**: Pilih salah satu (g1.png, g2.png, dll)
   - **Genre**: Contoh: "Action, Sci-Fi"
   - **Rating**: Contoh: 4.5
   - **Status**: Pilih "Belum Selesai" atau "Selesai"
3. Klik tombol **"Tambah"**
4. Film baru akan ditambahkan ke daftar

#### Test 3: UPDATE (Mengubah Data)
1. Cari film yang ingin diubah di daftar
2. Klik tombol **"Edit"** pada film tersebut
3. Ubah data yang ingin diubah
4. Klik tombol **"Update"**
5. Data film akan terupdate

#### Test 4: DELETE (Menghapus Data)
1. Cari film yang ingin dihapus
2. Klik tombol **"Hapus"**
3. Akan muncul konfirmasi "Apakah Anda yakin ingin menghapus film ini?"
4. Klik **"OK"**
5. Film akan terhapus dari daftar

---

## 🔍 Cara Cek Apakah API Berfungsi

### Cek Console Browser
1. Buka browser
2. Tekan **F12** untuk membuka Developer Tools
3. Klik tab **"Console"**
4. Anda akan melihat log seperti:
   ```
   [API Request] GET /movies
   [API Response] GET /movies [...]
   ```
5. Jika ada error, akan muncul pesan error di console

### Cek Network Tab
1. Di Developer Tools, klik tab **"Network"**
2. Refresh halaman atau lakukan operasi (tambah/edit/hapus)
3. Anda akan melihat request ke API MockAPI
4. Klik pada request tersebut untuk melihat detail

---

## ❗ Troubleshooting (Mengatasi Masalah)

### Masalah 1: "Cannot GET /movies" atau Error 404
**Solusi:**
- Pastikan resource "movies" sudah dibuat di MockAPI
- Pastikan URL di file `.env` sudah benar
- Pastikan sudah restart server setelah mengubah `.env`

### Masalah 2: Data Tidak Muncul
**Solusi:**
- Cek console browser untuk melihat error
- Pastikan URL API di `.env` benar
- Pastikan resource "movies" sudah dibuat di MockAPI

### Masalah 3: Error CORS
**Solusi:**
- MockAPI sudah handle CORS, jadi biasanya tidak ada masalah
- Jika masih error, pastikan URL di `.env` benar

### Masalah 4: File .env Tidak Terbaca
**Solusi:**
- Pastikan file `.env` ada di root folder (folder utama project)
- Pastikan nama file persis `.env` (bukan `.env.txt`)
- Pastikan sudah restart server setelah membuat/mengubah `.env`

---

## ✅ Checklist Selesai

Setelah semua langkah selesai, pastikan:

- [ ] Akun MockAPI sudah dibuat
- [ ] Resource "movies" sudah dibuat dengan 5 fields (title, image, genre, rating, status)
- [ ] File `.env` sudah dibuat dan berisi URL API yang benar
- [ ] Server sudah di-restart
- [ ] Aplikasi bisa menampilkan data dari API
- [ ] Bisa menambah film baru
- [ ] Bisa mengubah film yang ada
- [ ] Bisa menghapus film

---

## 🎉 Selamat!

Jika semua checklist sudah dicentang, berarti API sudah berfungsi dengan baik! 🎊

