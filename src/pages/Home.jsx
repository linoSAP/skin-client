import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function Home({ products }) {
  const [bestSellers, setBestSellers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length > 0) {
      setIsLoading(false);
      const premiumProducts = [...products]
        .sort((a, b) => b.price - a.price)
        .slice(0, 3);
      setBestSellers(premiumProducts);
    }
  }, [products]);

  const handleDiscoverProducts = () => {
    navigate('/products');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6">
              <span className="block font-serif italic">Bienvenue chez</span>
              <span className="block font-bold mt-2">Skin Girl Labs</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez notre sélection exclusive de soins haut de gamme pour une peau rayonnante
            </p>
            <button
              onClick={handleDiscoverProducts}
              className="mt-8 bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors duration-200 inline-flex items-center"
            >
              Découvrir nos produits
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://img.icons8.com/ios/100/000000/flower--v1.png')] bg-repeat bg-[length:100px_100px]"></div>
        </div>
      </div>

      {/* Best Sellers Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">
            Nos Crèmes Élites
          </h2>
          <div className="w-24 h-1 bg-pink-300 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Les produits les plus prisés par nos clientes exigeantes
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-pink-200 h-12 w-12"></div>
            </div>
          </div>
        ) : bestSellers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {bestSellers.map((product, index) => (
              <div 
                key={product.id} 
                className={`transform transition-all duration-500 hover:-translate-y-2 ${index === 1 ? 'lg:-translate-y-6' : ''}`}
              >
                <ProductCard product={product} isFeatured={true} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-12">Aucun produit vedette disponible</p>
        )}
      </section>

      {/* Value Proposition */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-pink-600 font-semibold tracking-wide uppercase">
              Pourquoi nous choisir
            </h2>
            <p className="mt-2 text-3xl leading-8 font-serif font-medium text-gray-900 sm:text-4xl">
              L'excellence au service de votre peau
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Tendance & Approuvé",
                description: "Des milliers de clientes satisfaites dans le monde entier",
                icon: "💖"
              },
              {
                name: "Meilleur Rapport Qualité/Prix",
                description: "Des soins haut de gamme à prix accessibles",
                icon: "💸"
              },
              {
                name: "Formules Douces",
                description: "Adaptées aux peaux sensibles et sujettes aux imperfections",
                icon: "🧴"
              },
              {
                name: "Livraison Rapide",
                description: "Expédié sous 48h avec suivi de commande",
                icon: "🚚"
              },
              {
                name: "Marques Recommandées",
                description: "CeraVe, Medicube, Beauty of Joseon... plébiscitées sur TikTok & Instagram",
                icon: "🌟"
              },
              {
                name: "Satisfait(e)s par milliers",
                description: "Des milliers de clientes font déjà confiance à nos sélections",
                icon: "💬"
              }
            ].map((feature) => (
              <div key={feature.name} className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-pink-100 text-2xl mx-auto">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}