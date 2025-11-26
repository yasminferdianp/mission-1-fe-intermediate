import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [isMuted, setIsMuted] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const scrollRefs = {
    continuing: useRef(null),
    topRating: useRef(null),
    trending: useRef(null),
    newRelease: useRef(null),
  };

  const scrollSection = (section, direction) => {
    const ref = scrollRefs[section].current;
    if (ref) {
      const scrollAmount = 400;
      ref.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const openMovieDetail = (movieName) => {
    setSelectedMovie(movieName);
  };

  const closeMovieDetail = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="bg-[#181A1C] text-white font-sans min-h-screen">

      <header className="bg-[#181A1C] text-white flex justify-between items-center px-6 py-4">
        <nav className="flex items-center gap-10 px-3 py-1 backdrop-blur-sm">
          <Link to="/home">
            <img src="/image/Logo.png" alt="logo chill" className="cursor-pointer hover:opacity-80 transition" />
          </Link>
          <a href="#" className="hover:text-pink-300 transition cursor-pointer">Series</a>
          <a href="#" className="hover:text-pink-300 transition cursor-pointer">Film</a>
          <Link to="/my-list" className="hover:text-pink-300 transition cursor-pointer">Daftar Saya</Link>
        </nav>

        <div className="flex gap-2">
          <img src="/image/profil.png" className="w-10 h-10 rounded-full border cursor-pointer hover:opacity-80 transition" alt="Avatar" />
          <img src="/image/profil2.png" className="w-10 h-10 cursor-pointer hover:opacity-80 transition" alt="Avatar" />
        </div>
      </header>

      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/image/g17.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black/60 to-transparent"></div>

        <div className="relative z-20 h-full flex flex-col justify-center md:justify-end px-6 md:px-20 py-5 max-w-[600px]">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Duty After School</h1>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-5">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa
            sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <button 
              className="px-6 py-2 bg-[#0F1E93] hover:bg-blue-700 font-semibold rounded-full transition transform hover:scale-105"
              onClick={() => alert("Memutar film: Duty After School")}
            >
              <img src="/image/mulai.png" alt="mulai" />
            </button>

            <button 
              className="px-4 py-2 bg-[#22282A] hover:bg-gray-700 flex items-center gap-1 rounded-full transition transform hover:scale-105"
              onClick={() => openMovieDetail("Duty After School")}
            >
              <img src="/image/tanda seru.png" alt="info" />
              <span>Selengkapnya</span>
            </button>

            <img src="/image/18+.png" alt="18+" />
          </div>
        </div>

        <div 
          className="absolute bottom-6 right-6 p-3 rounded-full cursor-pointer hover:bg-black/30 transition"
          onClick={toggleMute}
        >
          <img src="/image/volume.png" alt="volume" className={isMuted ? "opacity-50" : ""} />
        </div>
      </section>

      <Section
        title="Melanjutkan Tonton Film"
        images={["g1.png", "g2.png", "g3.png", "g4.png"]}
        scrollRef={scrollRefs.continuing}
        onScroll={scrollSection}
        sectionKey="continuing"
      />

      <Section
        title="Top Rating Film dan Series Hari ini"
        images={["g5.png", "g6.png", "g7.png", "g8.png", "g9.png"]}
        large
        scrollRef={scrollRefs.topRating}
        onScroll={scrollSection}
        sectionKey="topRating"
      />

      <Section
        title="Film Trending"
        images={["g10.png", "g11.png", "g12.png", "g13.png", "g14.png"]}
        large
        scrollRef={scrollRefs.trending}
        onScroll={scrollSection}
        sectionKey="trending"
      />

      <Section
        title="Rilis Baru"
        images={["g14.png", "g15.png", "g9.png", "g8.png", "g16.png"]}
        large
        scrollRef={scrollRefs.newRelease}
        onScroll={scrollSection}
        sectionKey="newRelease"
      />

      {/* Modal untuk detail film */}
      {selectedMovie && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeMovieDetail}
        >
          <div 
            className="bg-[#22282A] rounded-lg p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">{selectedMovie}</h3>
              <button 
                onClick={closeMovieDetail}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            <p className="text-gray-300 mb-4">
              Detail lengkap tentang {selectedMovie} akan ditampilkan di sini.
            </p>
            <button
              onClick={() => {
                alert(`Memutar ${selectedMovie}`);
                closeMovieDetail();
              }}
              className="w-full bg-[#0F1E93] hover:bg-blue-700 py-2 rounded-full transition"
            >
              Tonton Sekarang
            </button>
          </div>
        </div>
      )}

      <footer className="px-10 py-10">
        <hr className="opacity-50 mb-10" />

        <div className="flex flex-col md:flex-row md:justify-between gap-10">

          <div className="max-w-xs">
            <img src="/image/Logo.png" className="w-28 mb-3" />
            <p className="text-gray-400 text-sm">@2023 Chill All Rights Reserved.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-16">

            <FooterColumn
              title="Genre"
              items={[
                "Aksi","Anak-anak","Anime","Britania",
                "Drama","Fantasi Ilmiah & Fantasi","Kejahatan","KDrama",
                "Komedi","Petualangan","Perang","Romantis",
                "Sains & Alam","Thriller"
              ]}
            />

            <FooterColumn
              title="Bantuan"
              items={["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"]}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}


// Section
function Section({ title, images, large, scrollRef, onScroll, sectionKey }) {
  return (
    <section className="px-10 py-5 relative">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>

      <div className="relative group">
        {/* Tombol scroll kiri */}
        <button
          onClick={() => onScroll(sectionKey, "left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition cursor-pointer"
        >
          <img src="/image/panah-kiri.png" alt="scroll left" className="w-6 h-6" />
        </button>

        {/* Container gambar */}
        <div 
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide scroll-smooth"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 group/item cursor-pointer"
              onClick={() => {
                const movieName = `Film ${i + 1} - ${title}`;
                alert(`Klik pada: ${movieName}`);
              }}
            >
              <img
                src={`/image/${img}`}
                alt={`${title} ${i + 1}`}
                className={`${large ? "w-[267px] h-[370px]" : "w-[338px] h-[200px]"} rounded-lg transition transform group-hover/item:scale-105 group-hover/item:brightness-110`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/20 rounded-lg transition"></div>
            </div>
          ))}
        </div>

        {/* Tombol scroll kanan */}
        <button
          onClick={() => onScroll(sectionKey, "right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition cursor-pointer"
        >
          <img src="/image/panah-kanan.png" alt="scroll right" className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}

// Footer Column
function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-3">{title}</h4>
      <ul className="space-y-2 text-gray-300 text-sm">
        {items.map((item, i) => (
          <li key={i}>
            <a 
              href="#" 
              className="hover:text-white transition cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                alert(`Klik pada: ${item}`);
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}