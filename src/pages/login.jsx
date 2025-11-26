import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi sederhana
    if (username && password) {
      // Simulasi login berhasil
      console.log("Login attempt:", { username, password });
      navigate("/home");
    } else {
      alert("Harap isi username dan password!");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-0 bg-cover bg-center"
      style={{ backgroundImage: "url(/bg-login.jpg)" }}
    >
      <div className="bg-black/70 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl w-full max-w-[400px] text-white shadow-2xl">
        <div className="text-center mb-6">
          <div className="flex justify-center items-center gap-2 mb-2">
            <div className="font-bold text-xl rounded p-1 px-2">
              <img
                src="/image/logo-chill-2.png"
                alt="logo chill"
                className="w-8 sm:w-10"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide">
              CHILL
            </h1>
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-1">Masuk</h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Selamat datang kembali!
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-1">Username</label>
            <input
              type="text"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-transparent border border-gray-600 rounded-full px-4 py-2 
              focus:outline-none focus:border-gray-300 placeholder-gray-400 text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Kata Sandi</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border border-gray-600 rounded-full px-4 py-2 
                focus:outline-none focus:border-gray-300 placeholder-gray-400 text-sm sm:text-base"
              />
              <span 
                className="absolute right-3 top-2.5 text-gray-400 cursor-pointer hover:text-gray-200 transition"
                onClick={togglePasswordVisibility}
              >
                <img src="/image/mata.png" alt="mata" className="w-4 sm:w-5" />
              </span>
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm text-gray-300 mt-1 gap-2 sm:gap-0 text-center sm:text-left">
            <Link to="/" className="text-sm text-gray-400 hover:text-white transition">
              Belum punya akun?{" "}
              <span className="font-semibold text-white hover:underline">Daftar</span>
            </Link>
            <a href="#" className="hover:underline hover:text-white transition">
              Lupa kata sandi?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-400 hover:bg-gray-500 text-black font-semibold py-2 rounded-full transition text-sm sm:text-base"
          >
            Masuk
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-600"></div>
            <span className="px-2 text-gray-400 text-sm">Atau</span>
            <div className="flex-grow h-px bg-gray-600"></div>
          </div>

          <button 
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-gray-500 hover:bg-gray-800 py-2 rounded-full transition text-sm sm:text-base"
            onClick={() => alert("Login dengan Google - Fitur akan segera hadir!")}
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-4 sm:w-5 h-4 sm:h-5"
            />
            <span>Masuk dengan Google</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
