import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: `url('https://source.unsplash.com/featured/?education')` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-4 animate-fadeIn">
          Solusi Akademik Bayar Seikhlasnya
        </h1>
        <p className="text-lg mb-8 max-w-2xl animate-fadeInDelay">
          Kami menyediakan solusi akademik lengkap, dari joki, konsultasi makalah, cek plagiasi, hingga akses Chegg.
        </p>
        <a href="#services">
          <button className="bg-yellow-500 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-600 transition-all transform hover:scale-105">
            Pay As You Wish
          </button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
