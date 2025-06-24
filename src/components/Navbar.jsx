import { Link } from 'react-router-dom';

export default function Navbar({ cartItems }) {
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo & nom */}
      <Link to="/" className="flex items-center gap-2">
        <img src="/ico.png" alt="Skin Girl Labs" className="h-10 w-10 object-contain rounded-full" />
        <span className="text-2xl font-bold tracking-tight text-pink-600 font-serif">
          Skin Girl Labs
        </span>
      </Link>

      {/* Icône panier */}
      <Link to="/cart" className="relative group">
  <div className="relative p-2 bg-white rounded-full shadow-md hover:shadow-pink-200 transition duration-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 text-gray-700 group-hover:text-pink-500 transition-colors duration-200"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 
        0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>

    {/* Badge animé */}
    {itemCount > 0 && (
      <span className="absolute -top-1.5 -right-1.5 bg-pink-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center shadow ring-2 ring-white animate-ping-short">
        {itemCount}
      </span>
    )}
  </div>
</Link>

    </nav>
  );
}
