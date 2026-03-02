
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen ramen-gradient flex items-center justify-center text-center px-6">
      <div className="max-w-4xl">
        <h2 className="text-red-500 font-bold tracking-widest uppercase mb-4 font-jp">Professional Training Academy</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Master the Art of <span className="text-red-600">Authentic</span> Ramen
        </h1>
        <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          From noodle chemistry to the deep science of umami broth. Join the world's leading laboratory for ramen professionals and enthusiasts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#courses" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl">
            View Courses
          </a>
          <a href="#about" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition-all">
            Our Philosophy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
