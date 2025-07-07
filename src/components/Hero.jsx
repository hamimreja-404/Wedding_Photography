import React, { useState } from "react";

export default function Hero() {
  const classData = [
    {
      label: "FRIENDS & FAMILY",
      image:
        "https://images.pexels.com/photos/8617764/pexels-photo-8617764.jpeg",
    },
    {
      label: "RINGS",
      image:
        "https://images.pexels.com/photos/1705066/pexels-photo-1705066.jpeg",
    },
    {
      label: "BLACK & WHITE",
      image:
        "https://images.pexels.com/photos/2034912/pexels-photo-2034912.jpeg",
    },
    {
      label: "BEST MOMENTS",
      image:
        "https://images.pexels.com/photos/1782511/pexels-photo-1782511.jpeg",
    },
    {
      label: "CHURCH",
      image:
        "https://images.pexels.com/photos/1762257/pexels-photo-1762257.jpeg",
    },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Floating Bubbles */}
      <div
        style={{
          left: `${Math.random() * 100}%`,
          width: `${10 + Math.random() * 20}px`,
          height: `${10 + Math.random() * 20}px`,
          bottom: "-50px",
          backgroundColor: "rgba(255, 255, 255, 0.7)", // brighter
          animation: `floatUp ${8 + Math.random() * 5}s linear infinite`,
          animationDelay: `${Math.random() * 5}s`,
          border: "1px solid white", // for visibility testing
        }}
        className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
      >
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 backdrop-blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              bottom: "-50px",
              animation: `floatUp ${8 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative font-sans">
        {/* Background Image */}
        <img
          className="hidden md:block w-full h-screen object-cover"
          src="https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg"
          alt="Wedding"
        />

        {/* Desktop Navbar */}
        <div className="hidden md:flex absolute top-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full px-10 py-3 items-center gap-8 text-white text-sm font-semibold shadow-lg z-40 border border-neutral-400/40">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT US</a>
          <a href="#book">BOOK NOW</a>
          <a href="#revies">REVIEWS</a>
          <a href="#gallery">GALLERY</a>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-full transition">
            <a href="#contact">Contact Us</a>
          </button>
        </div>

        {/* Desktop Hero Content */}
        <div className="hidden md:block absolute top-1/4 left-6 md:left-20 text-white max-w-3xl z-30">
          <p className="uppercase text-sm font-semibold tracking-wider text-white/80">
            24 years of experience · 540+ shoots · Munich & surroundings
          </p>

          <h1 className="text-pink-400 font-extrabold text-5xl md:text-6xl leading-tight mt-4">
            The most beautiful <br /> pictures for your <br /> wedding
          </h1>

          <p className="text-lg font-light mt-6 leading-relaxed text-white">
            Your wedding day is unique. I'll make sure you <br />
            can relive it again and again – with authentic <br />
            images, natural light, and genuine sensitivity.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 text-lg font-medium border border-white rounded-full hover:bg-white/10 transition cursor-pointer">
              <a href="#book">Prices</a>
            </button>
            <a
              href="https://wa.me/9382426273?text=Hello%2C%20I'm%20interested%20in%20your%20wedding%20photography%20services!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 text-lg font-medium bg-sky-400 text-white rounded-full hover:bg-sky-300 transition">
                Enquire now
              </button>
            </a>
          </div>
        </div>

        {/* === MOBILE ONLY START === */}
        <div className="md:hidden relative z-10 bg-[#fcfaf4]">
          {/* Mobile Hero Section */}
          <div className="flex flex-col items-center text-center px-6 pt-24">
            <div className="w-full max-w-sm rounded-3xl overflow-hidden mb-6">
              <img
                src="https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg"
                alt="Bride"
                className="w-full object-cover"
              />
            </div>

            <div className="flex justify-center items-center mb-4">
              <svg width="60" height="60" viewBox="0 0 100 100">
                <g transform="translate(0,0) scale(0.9)">
                  <path fill="#3BA9DE" d="M80.87,37.81c2.42,1.89..." />
                  <path
                    fill="#F48FB1"
                    transform="scale(-1,1) translate(-100,0)"
                    d="M80.87,37.81c2.42,1.89..."
                  />
                  <circle cx="50" cy="10" r="2" fill="#D32F2F" />
                </g>
              </svg>
            </div>

            <p className="text-pink-500 uppercase tracking-wider text-xs font-semibold mb-4">
              24 YEARS OF EXPERIENCE · 540+ SHOOTS · MUNICH & SURROUNDINGS
            </p>

            <h1 className="text-3xl font-bold text-gray-900 leading-snug mb-4">
              The most <br /> beautiful <br /> pictures for <br /> your wedding
            </h1>

            <p className="text-gray-700 text-base font-medium leading-relaxed max-w-md mb-6">
              Your wedding day is unique. I'll make sure you can relive it again
              and again – with authentic images, natural light, and genuine
              sensitivity.
            </p>

            <div className="flex gap-4 mb-10">
              <button className="px-6 py-2 text-sky-500 border border-sky-500 rounded-full text-base font-semibold hover:bg-sky-100 transition cursor-pointer">
                <a href="#book">Prices</a>
              </button>
              <button className="px-6 py-2 bg-sky-500 text-white rounded-full text-base font-semibold hover:bg-sky-600 transition">
                Enquire now
              </button>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="absolute top-4 right-4 w-15 h-15 grid place-content-center bg-white/30 backdrop-blur-md p-3 rounded-full z-50 border border-neutral-300"
          >
            <div className="w-1.5 h-1.5 bg-black rounded-full mb-1"></div>
            <div className="w-1.5 h-1.5 bg-black rounded-full mb-1"></div>
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
          </button>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 text-white flex flex-col justify-center items-center gap-6 text-xl z-50"
            >
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-3xl font-bold"
              >
                ×
              </button>
              <a href="#home">HOME</a>
              <a href="#about">ABOUT US</a>
              <a href="#book">BOOK NOW</a>
              <a href="#revies">REVIEWS</a>
              <a href="#gallery">GALLERY</a>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-full transition">
                <a href="#contact">Contact Us</a>
              </button>
            </div>
          )}
        </div>
        {/* === MOBILE ONLY END === */}
        <div className="w-full overflow-hidden bg-pink-300 py-10">
          <div className="flex w-max gap-6 px-6 auto-scroll">
            {[...classData, ...classData].map((item, index) => (
              <div
                key={index}
                className="relative group rounded-xl overflow-hidden cursor-pointer min-w-[220px]"
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 w-full pt-[10%] pb-4 px-3 bg-gradient-to-t from-pink-300 to-transparent">
                  <h3 className="text-xl font-bold text-[#3f4e50] text-center truncate">
                    {item.label}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
