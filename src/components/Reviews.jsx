import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    name: 'Mia & Noah',
    location: 'Nuremberg',
    text: `What won us over? The calm demeanor, the experience, the eye for real moments. 
Everything felt genuine, nothing was forced. All the images – absolutely all of them – thrilled us. 
No half-baked shots, no hidden costs. Simply everything, as promised. We’re so happy with the memories captured forever.`,
  },
  {
    name: 'Felix & Emma',
    location: 'Munich',
    text: `The guy knows what he's doing. Professional from start to finish – but without that stiff, awkward manner 
some people bring. Barish made us feel totally at ease and the results speak for themselves. 
We couldn’t have asked for a better experience. Highly recommend!`,
  },
  {
    name: 'Hannah & Ben',
    location: 'Munich',
    text: `We were afraid a photographer would interrupt the moment or feel intrusive. 
But Barish was so unobtrusive and yet always there when it mattered. The images are stunning and real. 
Truly impressive – he’s more than a photographer, he’s a calming presence and a sharp storyteller.`,
  },
  {
    name: 'Lena & Paul',
    location: 'Berlin',
    text: `We didn’t just get a photographer, we got a storyteller. Barish captured everything — from the laughter to 
the little emotional glances that we didn’t even realize were happening. Every picture feels alive. 
His calm approach and sharp artistic eye made all the difference.`,
  },
];


export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const reviewCards = [...Array(3)].map((_, i) => {
    const review = reviews[(current + i) % reviews.length];
    return (
      <motion.div
        key={review.name}
        className="bg-white border border-gray-200 rounded-3xl shadow-md min-h-[300px] p-6 text-left hover:shadow-xl hover:-translate-y-1 transition-all"
        initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-gray-700 text-base leading-relaxed font-light mb-6">{review.text}</p>
        <p className="text-gray-900 font-semibold">
          {review.name} <span className="text-sm font-medium text-gray-500">| {review.location}</span>
        </p>
      </motion.div>
    );
  });

  return (
    <div id='revies' className="bg-[#fcfaf4] py-16 px-6 md:px-10 text-gray-800 font-sans overflow-hidden">
      <div className="max-w-5xl  mx-auto text-center">
        <h2 className="text-4xl md:text-8xl  leading-snug mt-10 font-extrabold font-serif text-center text-gray-800">Reviews about me</h2>

        {/* Stars */}
        <div className="flex justify-center mb-4">
          {Array(5).fill().map((_, i) => (
            <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946..." />
            </svg>
          ))}
        </div>

        <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
          This is what my clients say about me, my photos, and how they felt about me as a photographer at their wedding.
        </p>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <AnimatePresence mode="wait">
            {reviewCards}
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {reviews.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? 'bg-pink-500 scale-110' : 'bg-pink-300'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-8 space-x-6">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:scale-105 transition"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:scale-105 transition"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
