import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";

export default function MyList() {
  // Menggunakan custom hook untuk operasi CRUD dengan API
  const {
    movies,
    loading,
    error,
    handleAddMovie,
    handleUpdateMovie,
    handleDeleteMovie,
  } = useMovies();

  // State untuk form add/edit
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    image: "g1.png",
    genre: "",
    rating: "",
    status: "Belum Selesai",
  });

  // GET DATA - Menggunakan data dari custom hook
  const getMovies = () => {
    return movies || [];
  };

  // ADD DATA - Menambah film baru menggunakan API
  const addMovie = async (newMovie) => {
    // Validasi dan konversi data
    const movieData = {
      title: newMovie.title.trim(),
      image: newMovie.image,
      genre: newMovie.genre.trim(),
      rating: newMovie.rating ? parseFloat(newMovie.rating) : 0,
      status: newMovie.status,
    };
    
    // Validasi rating
    if (isNaN(movieData.rating) || movieData.rating < 0 || movieData.rating > 5) {
      alert("Rating harus berupa angka antara 0-5!");
      return;
    }
    
    const result = await handleAddMovie(movieData);
    if (result.success) {
      resetForm();
      alert("Film berhasil ditambahkan!");
      setIsFormOpen(false);
    } else {
      alert(`Gagal menambahkan film: ${result.error}`);
    }
  };

  // UPDATE DATA - Mengupdate film yang sudah ada menggunakan API
  const updateMovie = async (id, updatedMovie) => {
    // Validasi dan konversi data
    const movieData = {
      title: updatedMovie.title.trim(),
      image: updatedMovie.image,
      genre: updatedMovie.genre.trim(),
      rating: updatedMovie.rating ? parseFloat(updatedMovie.rating) : 0,
      status: updatedMovie.status,
    };
    
    // Validasi rating
    if (isNaN(movieData.rating) || movieData.rating < 0 || movieData.rating > 5) {
      alert("Rating harus berupa angka antara 0-5!");
      return;
    }
    
    const result = await handleUpdateMovie(id, movieData);
    if (result.success) {
      resetForm();
      alert("Film berhasil diupdate!");
      setIsFormOpen(false);
    } else {
      alert(`Gagal mengupdate film: ${result.error}`);
    }
  };

  // DELETE DATA - Menghapus film menggunakan API
  const deleteMovie = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus film ini?")) {
      const result = await handleDeleteMovie(id);
      if (result.success) {
        alert("Film berhasil dihapus!");
      } else {
        alert(`Gagal menghapus film: ${result.error}`);
      }
    }
  };

  // Handler untuk membuka form add
  const openAddForm = () => {
    setEditingMovie(null);
    resetForm();
    setIsFormOpen(true);
  };

  // Handler untuk membuka form edit
  const openEditForm = (movie) => {
    setEditingMovie(movie);
    setFormData({
      title: movie.title,
      image: movie.image,
      genre: movie.genre,
      rating: movie.rating.toString(),
      status: movie.status,
    });
    setIsFormOpen(true);
  };

  // Handler untuk submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingMovie) {
      await updateMovie(editingMovie.id, formData);
    } else {
      await addMovie(formData);
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: "",
      image: "g1.png",
      genre: "",
      rating: "",
      status: "Belum Selesai",
    });
    setEditingMovie(null);
  };

  // Handler untuk perubahan input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[#181A1C] text-white font-sans min-h-screen">
      {/* Header */}
      <header className="bg-[#181A1C] text-white flex justify-between items-center px-6 py-4">
        <nav className="flex items-center gap-10 px-3 py-1 backdrop-blur-sm">
          <Link to="/home">
            <img
              src="/image/Logo.png"
              alt="logo chill"
              className="cursor-pointer hover:opacity-80 transition"
            />
          </Link>
          <Link to="/home" className="hover:text-pink-300 transition cursor-pointer">
            Series
          </Link>
          <Link to="/home" className="hover:text-pink-300 transition cursor-pointer">
            Film
          </Link>
          <Link to="/my-list" className="hover:text-pink-300 transition cursor-pointer text-pink-300">
            Daftar Saya
          </Link>
        </nav>

        <div className="flex gap-2">
          <img
            src="/image/profil.png"
            className="w-10 h-10 rounded-full border cursor-pointer hover:opacity-80 transition"
            alt="Avatar"
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="px-10 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Daftar Saya</h1>
          <button
            onClick={openAddForm}
            className="bg-[#0F1E93] hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition transform hover:scale-105"
          >
            + Tambah Film
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-8">
            <p className="text-gray-400">Memuat data...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-600/20 border border-red-600 rounded-lg p-4 mb-4">
            <p className="text-red-400">Error: {error}</p>
          </div>
        )}

        {/* Info Stats */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#22282A] p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Total Film</p>
              <p className="text-2xl font-bold">{getMovies().length}</p>
            </div>
            <div className="bg-[#22282A] p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Selesai Ditonton</p>
              <p className="text-2xl font-bold">
                {getMovies().filter((m) => m.status === "Selesai").length}
              </p>
            </div>
            <div className="bg-[#22282A] p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Belum Selesai</p>
              <p className="text-2xl font-bold">
                {getMovies().filter((m) => m.status === "Belum Selesai").length}
              </p>
            </div>
          </div>
        )}

        {/* Movie List */}
        {!loading && getMovies().length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl mb-4">Belum ada film di daftar Anda</p>
            <button
              onClick={openAddForm}
              className="bg-[#0F1E93] hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition"
            >
              Tambah Film Pertama
            </button>
          </div>
        ) : !loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getMovies().map((movie) => (
              <div
                key={movie.id}
                className="bg-[#22282A] rounded-lg overflow-hidden hover:transform hover:scale-105 transition"
              >
                <img
                  src={`/image/${movie.image}`}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{movie.genre}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-yellow-400">⭐ {movie.rating}</span>
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        movie.status === "Selesai"
                          ? "bg-green-600"
                          : "bg-yellow-600"
                      }`}
                    >
                      {movie.status}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEditForm(movie)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded text-sm transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteMovie(movie.id)}
                      className="flex-1 bg-red-600 hover:bg-red-700 py-2 rounded text-sm transition"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {/* Modal Form Add/Edit */}
      {isFormOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => {
            setIsFormOpen(false);
            resetForm();
          }}
        >
          <div
            className="bg-[#22282A] rounded-lg p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">
                {editingMovie ? "Edit Film" : "Tambah Film Baru"}
              </h2>
              <button
                onClick={() => {
                  setIsFormOpen(false);
                  resetForm();
                }}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Judul Film</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#181A1C] border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-gray-300"
                  placeholder="Masukkan judul film"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Gambar (nama file)</label>
                <select
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#181A1C] border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-gray-300"
                >
                  <option value="g1.png">g1.png</option>
                  <option value="g2.png">g2.png</option>
                  <option value="g3.png">g3.png</option>
                  <option value="g4.png">g4.png</option>
                  <option value="g5.png">g5.png</option>
                  <option value="g6.png">g6.png</option>
                  <option value="g7.png">g7.png</option>
                  <option value="g8.png">g8.png</option>
                  <option value="g9.png">g9.png</option>
                  <option value="g10.png">g10.png</option>
                  <option value="g11.png">g11.png</option>
                  <option value="g12.png">g12.png</option>
                  <option value="g13.png">g13.png</option>
                  <option value="g14.png">g14.png</option>
                  <option value="g15.png">g15.png</option>
                  <option value="g16.png">g16.png</option>
                  <option value="g17.png">g17.png</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-1">Genre</label>
                <input
                  type="text"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#181A1C] border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-gray-300"
                  placeholder="Contoh: Action, Drama"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Rating (0-5)</label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  required
                  min="0"
                  max="5"
                  step="0.1"
                  className="w-full bg-[#181A1C] border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-gray-300"
                  placeholder="4.5"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#181A1C] border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-gray-300"
                >
                  <option value="Belum Selesai">Belum Selesai</option>
                  <option value="Selesai">Selesai</option>
                </select>
              </div>

              <div className="flex gap-2 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-[#0F1E93] hover:bg-blue-700 py-2 rounded-full font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Memproses..." : editingMovie ? "Update" : "Tambah"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsFormOpen(false);
                    resetForm();
                  }}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 py-2 rounded-full font-semibold transition"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
