# 🔧 Troubleshooting Error 500

## ❌ Masalah: "Request failed with status code 500"

Error 500 berarti server MockAPI menolak data yang dikirim. Berikut cara mengatasinya:

---

## ✅ Solusi 1: Cek Struktur Field di MockAPI

### Langkah-langkah:

1. **Buka MockAPI Dashboard**
   - Login ke https://mockapi.io/
   - Pilih project "Chill Movie"
   - Klik resource "movies"

2. **Cek Field yang Ada**
   - Pastikan ada 5 field berikut:
     - `title` (String)
     - `image` (String)
     - `genre` (String)
     - `rating` (Number) ← **PENTING: Harus Number, bukan String!**
     - `status` (String)

3. **Jika Field Tidak Sesuai:**
   - Klik tombol "Edit" pada resource "movies"
   - Pastikan tipe data `rating` adalah **Number** (bukan String)
   - Simpan perubahan

---

## ✅ Solusi 2: Cek Data yang Dikirim

### Cara Cek:

1. **Buka Browser Console**
   - Tekan **F12** di browser
   - Klik tab **"Console"**

2. **Coba Tambah Film Lagi**
   - Isi form
   - Klik "Tambah"

3. **Lihat Log di Console**
   - Akan muncul log: `Sending movie data to API: {...}`
   - Cek apakah data yang dikirim sudah benar

4. **Cek Network Tab**
   - Klik tab **"Network"** di Developer Tools
   - Cari request ke `/movies`
   - Klik request tersebut
   - Lihat tab **"Payload"** untuk melihat data yang dikirim
   - Lihat tab **"Response"** untuk melihat error detail dari server

---

## ✅ Solusi 3: Test API Langsung di MockAPI

### Langkah-langkah:

1. **Buka MockAPI Dashboard**
   - Klik resource "movies"
   - Klik tombol **"Data"**

2. **Tambah Data Manual**
   - Klik tombol **"Add"** atau **"New"**
   - Isi data:
     ```
     title: "Test Movie"
     image: "g1.png"
     genre: "Action"
     rating: 4.5
     status: "Belum Selesai"
     ```
   - Klik **"Save"**

3. **Jika Berhasil:**
   - Berarti MockAPI sudah benar
   - Masalahnya di aplikasi kita

4. **Jika Gagal:**
   - Berarti ada masalah di struktur field MockAPI
   - Edit field di MockAPI sesuai Solusi 1

---

## ✅ Solusi 4: Cek URL API

### Pastikan URL di .env Benar:

1. **Buka file `.env`** di root project
2. **Pastikan isinya:**
   ```env
   VITE_API_BASE_URL=https://69321f8211a8738467d18ebd.mockapi.io/api/v1
   ```
   *(Ganti dengan URL MockAPI Anda)*

3. **Pastikan:**
   - Tidak ada spasi di awal/akhir URL
   - Tidak ada `/movies` di akhir (hanya base URL)
   - Sudah restart server setelah mengubah `.env`

---

## ✅ Solusi 5: Cek Format Data Rating

### Masalah Umum:
Rating dikirim sebagai string `"4.5"` padahal MockAPI butuh number `4.5`

### Sudah Diperbaiki:
Code sudah diperbaiki untuk mengkonversi rating ke number. Tapi pastikan:

1. **Di form, rating diisi dengan angka**
   - Contoh: `4.5` (bukan `"4.5"` atau teks lain)

2. **Cek di Console**
   - Lihat log `Sending movie data to API`
   - Pastikan `rating` adalah number, bukan string

---

## 🔍 Debugging Tips

### 1. Cek Console Browser
```javascript
// Akan muncul log seperti ini:
Sending movie data to API: {
  title: "baru",
  image: "g1.png",
  genre: "Action",
  rating: 4.5,  // ← Harus number, bukan string
  status: "Belum Selesai"
}
```

### 2. Cek Network Tab
- Lihat request POST ke `/movies`
- Cek **Status Code**: Harus 201 (Created) atau 200 (OK)
- Jika 500, lihat **Response** untuk detail error

### 3. Test dengan Postman/Thunder Client
Jika punya Postman atau Thunder Client (VS Code extension):
- Method: POST
- URL: `https://69321f8211a8738467d18ebd.mockapi.io/api/v1/movies`
- Headers: `Content-Type: application/json`
- Body (JSON):
  ```json
  {
    "title": "Test Movie",
    "image": "g1.png",
    "genre": "Action",
    "rating": 4.5,
    "status": "Belum Selesai"
  }
  ```

---

## 📋 Checklist

Cek satu per satu:

- [ ] Field `rating` di MockAPI bertipe **Number** (bukan String)
- [ ] Semua 5 field ada di MockAPI (title, image, genre, rating, status)
- [ ] URL di `.env` sudah benar
- [ ] Server sudah di-restart setelah mengubah `.env`
- [ ] Data yang dikirim sudah benar (cek di Console)
- [ ] Tidak ada field tambahan yang tidak ada di MockAPI

---

## 🆘 Masih Error?

Jika masih error setelah semua langkah di atas:

1. **Screenshot error di Console** (F12 → Console)
2. **Screenshot Network tab** (F12 → Network → klik request yang error)
3. **Screenshot struktur field di MockAPI** (Dashboard → movies → Edit)

Kirim screenshot tersebut untuk debugging lebih lanjut.

