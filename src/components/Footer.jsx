import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white/90 backdrop-blur-sm border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
        
        {/* Logo & description */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/ico.png" alt="Skin Girl Labs" className="h-8 w-8 rounded-full" />
            <span className="text-xl font-serif font-semibold text-pink-600">Skin Girl Labs</span>
          </div>
          <p className="text-gray-500 leading-relaxed">
            Votre alliée beauté pour une peau éclatante sans prise de tête. Sélections testées, tendances validées 💖
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-pink-600 font-semibold mb-3">Liens utiles</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-pink-500 transition">Accueil</Link></li>
            <li><Link to="/products" className="hover:text-pink-500 transition">Nos produits</Link></li>
            <li><Link to="/cart" className="hover:text-pink-500 transition">Panier</Link></li>
            <li><a href="https://wa.me/695749209" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">Support WhatsApp</a></li>
          </ul>
        </div>

        {/* Newsletter ou Réseaux sociaux */}
        <div>
          <h4 className="text-pink-600 font-semibold mb-3">Restons connectées</h4>
          <p className="mb-4 text-gray-500">Suis-nous sur nos réseaux pour des conseils skincare & des offres !</p>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-pink-500 hover:text-pink-700">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-pink-500 hover:text-pink-700">
              <i className="fab fa-tiktok text-xl"></i>
            </a>
            <a href="mailto:contact@skingirllabs.com" className="text-pink-500 hover:text-pink-700">
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 py-4 border-t border-gray-100">
        © {new Date().getFullYear()} Skin Girl Labs. Tous droits réservés.
      </div>
    </footer>
  );
}
