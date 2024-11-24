import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 to-stone-100 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-lacquer">
        <h1 className="text-5xl md:text-7xl  text-stone-800 mb-6">
          Bienvenue sur mon portfolio! 
        </h1>

        <p className="text-xl md:text-2xl text-stone-600 mb-12">
          Je m'appelle Kenza, une développeuse en herbe passionnée par la création d'expériences digitales
        </p>
        <a
          href="#about"
          className="inline-flex items-center justify-center animate-bounce"
        >
          <ArrowDown className="w-8 h-8 text-stone-600" /> 
        </a>
      </div>
    </div>
  );
}