import React from "react";

export default function FashionContactPage() {
  return (
    <div className="bg-white text-black font-sans">
      {/* CONTACT HEADER */}


      {/* FOOTER SECTION */}
      <footer className="bg-black text-white py-12 px-6 md:px-20 text-sm">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {/* STORES */}
          <div>
            <h4 className="font-semibold text-lg mb-2">Epic Story</h4>
            <p>Malda, West Bengal Kolkata </p>
          </div>

          {/* FOLLOW */}
          <div>
            <h4 className="font-semibold text-lg mb-2">FOLLOW US</h4>
            <div className="flex gap-5">
              <a href="https://instagram.com" target="_blank" className="underline">Instagram</a>
              <a href="https://facebook.com" target="_blank" className="underline">Facebook</a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-lg mb-2">CONTACT</h4>
            <p>JUUNJ.PR@samsung.com</p>
            <p>showroom.it@samsung.com</p>
            <p>+82-2-3451-8000</p>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-10">
          © {new Date().getFullYear()} JUUN.J. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
