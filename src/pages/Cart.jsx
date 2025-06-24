import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ cartItems, setCartItems }) {
  const [total, setTotal] = useState(0);
  const [subtotals, setSubtotals] = useState({});

  // 🧠 Calcul total + sous-totaux
  useEffect(() => {
    const newSubtotals = {};
    let newTotal = 0;

    cartItems.forEach(item => {
      const subtotal = item.price * item.quantity;
      newSubtotals[item.id] = subtotal;
      newTotal += subtotal;
    });

    setSubtotals(newSubtotals);
    setTotal(newTotal);
  }, [cartItems]);

  // ➕ ➖
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const sendWhatsAppMessage = () => {
    const itemsList = cartItems.map(item =>
      `- ${item.name} (x${item.quantity}): ${subtotals[item.id] || 0} XAF`
    ).join('%0A');

    const message = `Bonjour, je souhaite passer une commande:%0A%0A${itemsList}%0A%0ATotal: ${total} XAF`;
    window.open(`https://wa.me/695749209?text=${message}`, '_blank');
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XAF' }).format(price);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-serif font-light text-gray-900 mb-10">🛒 Votre Panier</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-600 text-lg mb-6">Votre panier est vide.</p>
          <Link 
            to="/products" 
            className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-colors"
          >
            Découvrir nos produits
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* 🧾 Liste des produits */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map(item => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm p-6 flex flex-col md:flex-row gap-4 border border-gray-100 hover:shadow-md transition">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full md:w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                    <span className="text-pink-600 font-semibold">{formatPrice(item.price)}</span>
                  </div>

                  <div className="flex items-center mt-4 gap-4">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-xl flex items-center justify-center"
                    >−</button>
                    <span className="text-gray-700 w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-xl flex items-center justify-center"
                    >+</button>

                    <div className="ml-auto text-right">
                      <p className="text-gray-800 font-medium">{formatPrice(subtotals[item.id])}</p>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-red-400 hover:text-red-600 mt-1 transition"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Résumé */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 sticky top-20 h-fit">
            <h2 className="text-2xl font-serif font-light text-gray-900 mb-6">Récapitulatif</h2>
            
            <div className="space-y-4 mb-6 text-sm text-gray-600">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name} ×{item.quantity}</span>
                  <span className="text-gray-800 font-medium">{formatPrice(subtotals[item.id])}</span>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 border-gray-200 mb-6">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span className="text-pink-600">{formatPrice(total)}</span>
              </div>
            </div>

            <button
              onClick={sendWhatsAppMessage}
              className="w-full bg-green-500 text-white py-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967..."/>
              </svg>
              Passer commande
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
