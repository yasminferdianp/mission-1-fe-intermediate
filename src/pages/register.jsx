import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validasi
    if (!formData.username || !formData.password || !formData.confirmPassword) {
      alert("Harap isi semua field!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Kata sandi tidak cocok!");
      return;
    }

    if (formData.password.length < 6) {
      alert("Kata sandi minimal 6 karakter!");
      return;
    }

    // Simulasi registrasi berhasil
    console.log("Registration attempt:", formData);
    alert("Registrasi berhasil! Silakan login.");
    navigate("/login");
  };

  return (
    <>
      <div className='flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-0 bg-[url(/bg-register.jpg)] bg-cover bg-center'>
        <div className='bg-black/70 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl w-full max-w-[400px] text-white shadow-2xl'>
          <div className='text-center mb-6'>
            <div className='flex justify-center items-center gap-2 mb-2'>
              <div className='font-bold text-xl rounded p-1 px-2'>
                <img
                  src='/image/logo-chill-2.png'
                  alt='logo chill'
                  className='w-8 sm:w-10'
                />
              </div>
              <h1 className='text-2xl sm:text-3xl font-extrabold tracking-wide'>
                CHILL
              </h1>
            </div>
            <h2 className='text-lg sm:text-xl font-semibold mb-1'>Daftar</h2>
            <p className='text-gray-400 text-sm sm:text-base'>
              Selamat datang!
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-5'>
            <div>
              <label className='block text-sm mb-1'>Username</label>
              <input
                type='text'
                name='username'
                placeholder='Masukkan username'
                value={formData.username}
                onChange={handleChange}
                className='w-full bg-transparent border border-gray-600 rounded-full px-4 py-2 focus:outline-none focus:border-gray-300 placeholder-gray-400 text-sm sm:text-base'
              />
            </div>

            <div>
              <label className='block text-sm mb-1'>Kata Sandi</label>
              <div className='relative'>
                <input
                  type={showPassword ? "text" : "password"}
                  name='password'
                  placeholder='Masukkan kata sandi'
                  value={formData.password}
                  onChange={handleChange}
                  className='w-full bg-transparent border border-gray-600 rounded-full px-4 py-2 focus:outline-none focus:border-gray-300 placeholder-gray-400 text-sm sm:text-base'
                />
                <span 
                  className='absolute right-3 top-2.5 text-gray-400 cursor-pointer hover:text-gray-200 transition'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <img
                    src='/image/mata.png'
                    alt='mata'
                    className='w-4 sm:w-5'
                  />
                </span>
              </div>
            </div>

            <div>
              <label className='block text-sm mb-1'>
                Konfirmasi Kata Sandi
              </label>
              <div className='relative'>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name='confirmPassword'
                  placeholder='Masukkan kata sandi'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className='w-full bg-transparent border border-gray-600 rounded-full px-4 py-2 focus:outline-none focus:border-gray-300 placeholder-gray-400 text-sm sm:text-base'
                />
                <span 
                  className='absolute right-3 top-2.5 text-gray-400 cursor-pointer hover:text-gray-200 transition'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <img
                    src='/image/mata.png'
                    alt='mata'
                    className='w-4 sm:w-5'
                  />
                </span>
              </div>
            </div>

            <p className='text-sm text-gray-400'>
              Sudah punya akun?{" "}
              <Link
                to='/login'
                className='text-white font-medium hover:underline'
              >
                Masuk
              </Link>
            </p>

            <button
              type='submit'
              className='w-full bg-gray-400 hover:bg-gray-500 text-black font-semibold py-2 rounded-full transition text-sm sm:text-base'
            >
              Daftar
            </button>

            <div className='flex items-center my-4'>
              <div className='flex-grow h-px bg-gray-600'></div>
              <span className='px-2 text-gray-400 text-sm'>Atau</span>
              <div className='flex-grow h-px bg-gray-600'></div>
            </div>

            <button
              type='button'
              className='w-full flex items-center justify-center gap-2 border border-gray-500 hover:bg-gray-800 py-2 rounded-full transition text-sm sm:text-base'
              onClick={() => alert("Daftar dengan Google - Fitur akan segera hadir!")}
            >
              <img
                src='https://www.svgrepo.com/show/355037/google.svg'
                alt='Google'
                className='w-4 sm:w-5 h-4 sm:h-5'
              />
              <span>Daftar dengan Google</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
