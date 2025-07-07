import React from 'react';
import CountUp from 'react-countup';
import image from '../assets/image.png';

export default function About() {
  return (
    <>
      {/* Top Section with Centered Logo + Headline */}
      <div id='about' className='bg-[#fcfaf4] w-full grid place-content-center text-center px-4 py-10'>
        <img className='w-32 mx-auto' src={image} alt="Wedding Photographer" />
        <p className='text-4xl md:text-8xl font-bold text-gray-900 leading-snug mt-10'>
          We are Epic Story's <br /> Your wedding photographer
        </p>
        <p className='text-2xl md:text-4xl mt-4 text-gray-700'>
          Your moment. My view. Great photos that will last.
        </p>
      </div>

      {/* Stats + Text + Image Section */}
      <div className="bg-[#fcfaf4] py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Left Side: Stats + Info */}
          <div className="grid grid-cols-2 gap-4">
            {/* Stat 1 */}
            <div className="bg-[#2d2c2c] rounded-xl p-6 text-white text-center">
              <p className="text-6xl font-bold">
                <CountUp end={541} duration={2.5} />
              </p>
              <p className="mt-2 text-lg">Shootings</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-xl p-6 text-[#fbbc4c] text-center border border-gray-200">
              <p className="text-6xl font-bold">
                <CountUp end={25} duration={2.5} />
              </p>
              <p className="mt-2 text-lg">Years Photographer</p>
            </div>

            {/* Text Block */}
            <div className="col-span-2 bg-[#46b3e6] text-white p-6 md:p-8 rounded-xl space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#ffc845]">
                Your wedding photographer in Kolkata
              </h2>
              <p className="leading-relaxed">
                Authentic, emotional wedding reports are born of trust – and that begins with a frank conversation.
                I accompany you personally, with heart and experience.
              </p>

              {/* Contact Info */}
              <div>
                <p className="text-xl font-bold text-[#ffc845]">Barish Baur</p>
                <p>+91 927384647</p>
                <p>hello@weddingphoto.com</p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition">
                  Book Now
                </button>
                <button className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition">
                  Gallery
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div>
            <img
              src="https://images.pexels.com/photos/1214566/pexels-photo-1214566.jpeg"
              alt="Photographer smiling"
              className="w-full h-[30rem] rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
      {/* Book Now Section */}
{/* Services Section */}


    </>
  );
}
