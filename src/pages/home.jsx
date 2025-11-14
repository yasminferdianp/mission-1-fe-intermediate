import React from "react";

export default function Home() {
  return (
    <div className="bg-[#181A1C] text-white font-sans min-h-screen">

      <header className="bg-[#181A1C] text-white flex justify-between items-center px-6 py-4">
        <nav className="flex items-center gap-10 px-3 py-1 backdrop-blur-sm">
          <img src="/image/Logo.png" alt="logo chill" />
          <a href="#" className="hover:text-pink-300">Series</a>
          <a href="#" className="hover:text-pink-300">Film</a>
          <a href="#" className="hover:text-pink-300">Daftar Saya</a>
        </nav>

        <div className="flex gap-2">
          <img src="/image/profil.png" className="w-10 h-10 rounded-full border" alt="Avatar" />
          <img src="/image/profil2.png" className="w-10 h-10" alt="Avatar" />
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
            <button className="px-6 py-2 bg-[#0F1E93] hover:bg-blue-700 font-semibold rounded-full">
              <img src="/image/mulai.png" alt="mulai" />
            </button>

            <button className="px-4 py-2 bg-[#22282A] hover:bg-gray-700 flex items-center gap-1 rounded-full">
              <img src="/image/tanda seru.png" alt="info" />
              <span>Selengkapnya</span>
            </button>

            <img src="/image/18+.png" alt="18+" />
          </div>
        </div>

        <div className="absolute bottom-6 right-6 p-3 rounded-full cursor-pointer">
          <img src="/image/volume.png" alt="volume" />
        </div>
      </section>

      <Section
        title="Melanjutkan Tonton Film"
        images={["g1.png", "g2.png", "g3.png", "g4.png"]}
      />

      <Section
        title="Top Rating Film dan Series Hari ini"
        images={["g5.png", "g6.png", "g7.png", "g8.png", "g9.png"]}
        large
      />

      <Section
        title="Film Trending"
        images={["g10.png", "g11.png", "g12.png", "g13.png", "g14.png"]}
        large
      />

      <Section
        title="Rilis Baru"
        images={["g14.png", "g15.png", "g9.png", "g8.png", "g16.png"]}
        large
      />

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
function Section({ title, images, large }) {
  return (
    <section className="px-10 py-5">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>

      <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((img, i) => (
          <img
            key={i}
            src={`/image/${img}`}
            alt=""
            className={`${large ? "w-[267px] h-[370px]" : "w-[338px] h-[200px]"} rounded-lg flex-shrink-0`}
          />
        ))}
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
          <li key={i}><a href="#" className="hover:text-white">{item}</a></li>
        ))}
      </ul>
    </div>
  );
}