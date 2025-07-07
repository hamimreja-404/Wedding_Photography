import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Couple overlooking mountains",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Mountain valley landscape",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Tourists taking photos",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Woman in white dress on cliff",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Cow in old stone village",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Helping each other climb",
  },

];

export default function Gallery() {
  return (
    <>
    <section id='gallery' className="bg-[#f9f9f6] py-16 px-4 md:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-8xl  leading-snug mt-10 font-extrabold font-serif text-center   text-gray-800">
          Gallery
        </h2>
        <p className="italic text-xl text-gray-500 mt-2">
          Wedding stories 
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          ))}
        </div>
      </div>
      </section>
       <div id='contact' className="bg-[#fcfaf4] text-gray-800">
      {/* CONTACT SECTION */}
          <h2 className="text-4xl md:text-8xl  leading-snug  font-extrabold font-serif text-center text-gray-800">Let's Talk</h2>
          <p className="text-lg text-gray-600 text-center">
            Whether it's your wedding, pre-shoot, or a love story – I'm here to capture it beautifully.
          </p>
      <div className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">

        <div className="space-y-6">

          <div className="space-y-4">
            <p className="flex items-center gap-3 text-lg">
              <FaPhoneAlt className="text-pink-500" /> +91 173 239 8338
            </p>
            <p className="flex items-center gap-3 text-lg">
              <FaEnvelope className="text-pink-500" /> hello@weddingphoto-professionals.com
            </p>
            <p className="flex items-center gap-3 text-lg">
              <FaWhatsapp className="text-pink-500" /> WhatsApp Chat Available
            </p>
            <p className="flex items-center gap-3 text-lg">
              <FaMapMarkerAlt className="text-pink-500" /> Malda, Kolkata
            </p>
          </div>


          <div className="flex gap-5 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-3 bg-pink-100 hover:bg-pink-500 hover:text-white rounded-full transition">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-3 bg-pink-100 hover:bg-pink-500 hover:text-white rounded-full transition">
              <FaInstagram />
            </a>
            <a href="https://wa.me/491732398338" target="_blank" rel="noreferrer" className="p-3 bg-pink-100 hover:bg-pink-500 hover:text-white rounded-full transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg ">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.5470457879934!2d11.576124915807263!3d48.13710717922274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e749c3e61c6fb%3A0x2e63e69e947c3f45!2sMarienplatz%2C%2080331%20M%C3%BCnchen%2C%20Germany!5e0!3m2!1sen!2sus!4v1680000000000"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* FOOTER */}

    </div>
      </>
  );
}
