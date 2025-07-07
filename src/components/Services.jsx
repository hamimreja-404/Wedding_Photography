import React from 'react';

const services = [
  {
    title: 'Wedding Photography',
    price: 'From ₹10k',
    image: 'https://images.pexels.com/photos/2058070/pexels-photo-2058070.jpeg',
  },
  {
    title: 'Videography',
    price: 'From ₹20k',
    image: 'https://images.pexels.com/photos/32879257/pexels-photo-32879257.jpeg',
  },
  {
    title: 'Pre-Wedding Shoot',
    price: 'From ₹10k',
    image: 'https://images.pexels.com/photos/32830847/pexels-photo-32830847.jpeg',
  },
  {
    title: 'Combo(Pre-Wedding & Wedding)',
    price: 'From ₹30k',
    image: 'https://images.pexels.com/photos/32738659/pexels-photo-32738659.jpeg',
  },
  {
    title: 'Party',
    price: 'From ₹15k',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
  },
  {
    title: 'Birthday',
    price: 'From ₹5k',
    image: 'https://images.pexels.com/photos/7099957/pexels-photo-7099957.jpeg',
  },
];

export default function ServicesSection() {
  const phoneNumber = '9382426273'; // Your WhatsApp number (no + or spaces)

  return (
    <div id="book" className="bg-[#fcfaf4] py-16 px-4 md:px-10">
      <h2 className="text-4xl md:text-8xl leading-snug mt-10 font-extrabold font-serif text-center text-gray-800 mb-12">
        Discover Our Signature Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const message = `Hello, I'm interested in your ${service.title} service. Could you please provide more details?`;
          const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
          console.log(whatsappLink)
          return (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl group"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex flex-col justify-end p-6 transition-all duration-300 group-hover:bg-black/40">
                <h3 className="text-2xl md:text-3xl text-white font-semibold mb-1 font-serif">
                  {service.title}
                </h3>
                <p className="text-white text-lg">{service.price}</p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full inline-block text-center py-2 text-white text-base font-medium rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
