import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product, onAddToCart, isFeatured = false, categoryName }) {
  const navigate = useNavigate();

  const handleAction = () => {
    if (isFeatured) {
      navigate(`/products`);
    } else {
      onAddToCart();
    }
  };

  return (
    <div className={`bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 ease-in-out flex flex-col ${isFeatured ? 'border-2 border-pink-200' : 'border border-gray-100'}`}>
      
      {/* Image avec badges */}
      <div className="relative aspect-square overflow-hidden">
        {categoryName && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full shadow-sm z-10">
            {categoryName}
          </div>
        )}
        {isFeatured && (
          <div className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
            BEST-SELLER
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="absolute h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Contenu */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        {/* Titre + prix */}
        <div>
          <div className="flex justify-between items-start mb-3">
            <h3 className={`font-medium text-gray-900 text-lg leading-tight ${isFeatured ? 'font-serif' : ''}`}>
              {product.name}
            </h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${isFeatured ? 'bg-pink-500 text-white' : 'bg-pink-50 text-pink-600'}`}>
              {product.price} XAF
            </span>
          </div>

          {/* Description avec clamp */}
          <p className={`text-sm leading-relaxed mb-5 ${isFeatured ? 'text-gray-600' : 'text-gray-500'} line-clamp-3 min-h-[4.5rem]`}>
            {product.description}
          </p>
        </div>

        {/* Bouton */}
        <button
          onClick={handleAction}
          className={`mt-auto w-full py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
            isFeatured
              ? 'bg-pink-600 text-white hover:bg-pink-700'
              : 'bg-pink-50 text-pink-600 hover:bg-pink-100'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isFeatured ? "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" : "M12 6v6m0 0v6m0-6h6m-6 0H6"}
            />
          </svg>
          {isFeatured ? 'Découvrir' : 'Ajouter'}
        </button>
      </div>
    </div>
  );
}
