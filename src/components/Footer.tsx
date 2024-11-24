import { Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="flex flex-col space-y-6 bg-customBeige font-lacquer text-black-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Kenza. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
