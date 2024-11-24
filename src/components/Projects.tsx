import { Code, Play, FilePen } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Site de recherche d'emploi",
      description: "Un site web réalisé en HTML, CSS et JavaScript pour afficher et interagir avec des annonces d'emploi.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      tech: ["HTML", "CSS", "JavaScript", "MySQL", "Node.js", "Express"],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Jeu inspiré du mythe d'Orphée",
      description: "Un jeu vidéo en JavaFX avec des animations et des énigmes.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      tech: ["Java", "JavaFX"],
      icon: <Play className="w-6 h-6" />
    },

    {
      title: "Mon CV en version digitale",
      description: "Lors de la piscine Web à Epitech, j'ai du recréer mon CV en utilisant les technologies que je souhaitais",
      image: "https://plus.unsplash.com/premium_photo-1683531060766-c460adea7010?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3VycmljdWx1bSUyMHZpdGFlfGVufDB8fDB8fHww",
      tech: ["HTML", "CSS"],
      icon: <FilePen className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-800 mb-12 text-center">
          Mes projets
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="text-xl font-bold text-stone-800 ml-2">
                    {project.title}
                  </h3>
                </div>
                <p className="text-stone-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}