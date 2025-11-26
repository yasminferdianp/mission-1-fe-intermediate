import React from "react";

const Login = () => {
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

        <form className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Username</label>
            <input
              type="text"
              placeholder="Masukkan username"
              className="w-full bg-transparent border border-gray-600 rounded-full px-4 py-2 
              focus:outline-none focus:border-gray-300 placeholder-gray-400 text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Kata Sandi</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Masukkan kata sandi"
                className="w-full bg-transparent border border-gray-600 rounded-full px-4 py-2 
                focus:outline-none focus:border-gray-300 placeholder-gray-400 text-sm sm:text-base"
              />
              <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                <img src="/image/mata.png" alt="mata" className="w-4 sm:w-5" />
              </span>
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm text-gray-300 mt-1 gap-2 sm:gap-0 text-center sm:text-left">

            <a href="/login" 
            className="text-sm text-gray-400">
          
              Belum punya akun?{" "}
              <span className="font-semibold text-white hover:underline" >Daftar</span></a>
              
              <a href="/login" className="hover:underline">
                Lupa kata sandi?
              </a>
            

            
          </div>

          <a href="/home">
            <button
              type="button"
              className="w-full bg-gray-400 hover:bg-gray-500 text-black font-semibold py-2 rounded-full transition text-sm sm:text-base"
            >
              Masuk
            </button>
          </a>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-600"></div>
            <span className="px-2 text-gray-400 text-sm">Atau</span>
            <div className="flex-grow h-px bg-gray-600"></div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 border border-gray-500 hover:bg-gray-800 py-2 rounded-full transition text-sm sm:text-base">
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
