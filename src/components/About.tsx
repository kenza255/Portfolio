import { Download, X } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl text-stone-800 mb-6">
              Étudiante à Epitech Lyon
            </h2>
            <p className="text-lg text-stone-600 mb-6">
              À la recherche d'une alternance en développement web à partir de janvier 2025. .
            </p>
            <div className="space-x-4 flex justiy-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-stone-800 hover:bg-stone-700 transition-colors"
              >
                En savoir plus
              </button>
              <a
                href="/CV_Kenza_AOUICHA.pdf"
                download
                className="inline-flex items-center px-6 py-3 border border-stone-800 text-base font-medium rounded-md text-stone-800 hover:bg-stone-50 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Curriculum Vitae
              </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              src="src/FILE/me.jpeg" 
              alt="Photo de moi"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>

  
        {isModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50">
            <div className="flex items-center justify-center min-h-screen px-4">
              <div className="relative bg-customBeige rounded-lg max-w-3xl p-8">
                <button
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Fermer la modal"
                  className="absolute top-4 right-4 text-stone-400 hover:text-stone-500"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="prose prose-stone max-w-none">
                  <p>
                    Passionnée par le développement web, je suis déterminée à concevoir des applications et des solutions numériques innovantes qui améliorent l'expérience utilisateur et répondent aux défis technologiques de demain.
                  </p>
                  <p>
                    Après un Bac+3 en gestion d'entreprise et commerce international, j’ai décidé de réorienter ma carrière vers la tech, un secteur qui me passionne profondément. Actuellement étudiante en pré-MSC à EPITECH Lyon, je me spécialise dans le développement web et je recherche une alternance dès janvier 2025 pour mettre en pratique mes compétences tout en poursuivant mon parcours.
                  </p>
                  <p>
                    Mon expérience à EPITECH m’a permis de maîtriser des technologies comme JavaScript, React, Node.js, Java, etc. J’ai également eu l’opportunité de travailler sur des projets de développement web qui m’ont appris à créer des solutions efficaces, fonctionnelles et orientées utilisateur.
                  </p>
                  <p>
                    Ce qui me motive chaque jour ? L'idée de résoudre des problèmes complexes par la technologie, tout en restant à l'écoute des utilisateurs pour offrir des interfaces intuitives et performantes. Je suis également avide de continuer à apprendre et à m'auto-former sur les technologies émergentes, pour toujours proposer des solutions à la pointe.
                  </p>
                  <p>
                    Si vous êtes à la recherche d'une personne motivée, prête à relever de nouveaux défis et à contribuer activement à votre équipe, n'hésitez pas à me contacter. Je serai ravie d'échanger avec vous !
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
