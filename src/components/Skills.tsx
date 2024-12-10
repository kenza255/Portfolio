import {
  Code2,
  Database,
  Terminal,
  Briefcase
} from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "WordPress", "Figma", "Tailwind", "TypeScript", "Vite"],
      icon: <Code2 className="w-6 h-6" />
    },
    {
      category: "Backend",
      items: ["Java", "PHP", "MySQL", "Python", "Node.js", "Express"],
      icon: <Database className="w-6 h-6" />
    },
   
    {
      category: "Logiciel",
      items: ["GitHub", "VSCode", "Postman", "Notion", "Canva", "Gantt"],
      icon: <Terminal className="w-6 h-6" />
    },
    {
      category: "Soft Skills",
      items: ["Gestion de projet", "Organisation", "Autonomie", "Rigueur", 'Orientation Client', "Apprentissage continue" ],
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-800 mb-12 text-center">
          Compétences
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-stone-50 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-stone-200 rounded-lg">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-800 ml-3">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 bg-white text-stone-600 rounded-full text-sm shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}