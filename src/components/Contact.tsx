import { Mail, MapPin, Calendar, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-800 mb-12 text-center">
          Contact
        </h2>
        <div className="flex justify-between gap-8">

          <div className="w-1/2 space-y-6 place-content-center">
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-stone-600" />
              <span className="ml-4 text-stone-600">École: Epitech Lyon</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-6 h-6 text-stone-600" />
              <span className="ml-4 text-stone-600">
                2 jours en formation / 3 jours en entreprise
              </span>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-stone-600" />
              <a
                href="mailto:kenza.aouicha@epitech.eu"
                className="ml-4 text-stone-600 hover:text-stone-800 transition-colors"
              >
                kenza.aouicha@epitech.eu
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="https://www.linkedin.com/in/kenza-aouicha/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-stone-800 hover:text-stone-600 transition duration-200"
              
              >
                <Linkedin />
              </a>
            </div>

            <div className="flex items-center">
              <a

                href="https://github.com/kenza255"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-stone-800 hover:text-stone-600 transition duration-200"
              >
                <Github />
              </a>
            </div>

          </div>


          <div className="w-1/2 bg-white rounded-lg shadow-lg p-8">
            <h3 className="flex justify-center text-xl font-bold mb-6">Contactez moi</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-stone-600">
                  Votre nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 mt-2 border border-stone-300 rounded-md"
                  placeholder="Votre nom"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-stone-600">
                  Votre Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 mt-2 border border-stone-300 rounded-md"
                  placeholder="example@example.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-stone-600">
                  Votre message
                </label>
                <textarea
                  id="message"
                  // rows="4"
                  className="w-full p-3 mt-2 border border-stone-300 rounded-md"
                  placeholder="Votre Message"
                ></textarea>
              </div>
              <button

                type="submit"
                className="w-full py-3 bg-stone-800 text-white rounded-md hover:bg-stone-700 transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
