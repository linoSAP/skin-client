import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';

// Dans App.jsx
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Ajoute ce state
  const [error, setError] = useState(null); // Ajoute ce state

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Récupérer les catégories
        const categoriesSnapshot = await getDocs(collection(db, "categories"));
        const categoriesData = categoriesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCategories(categoriesData);

        // Récupérer les produits
        const productsSnapshot = await getDocs(collection(db, "products"));
        const productsData = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);
      } catch (err) {
        setError(err.message); // Capture les erreurs
        console.error("Erreur de chargement:", err);
      } finally {
        setLoading(false); // Arrête le chargement
      }
    };

    fetchData();
  }, []);

  if (loading) return (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="flex flex-col items-center space-y-4">
      <svg className="animate-spin h-10 w-10 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
      </svg>
      <p className="text-gray-600 text-sm">Chargement en cours...</p>
    </div>
  </div>
);
  if (error) return <div className="text-center p-8 text-red-500">Erreur: {error}</div>;

  return (
    <>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route 
          path="/products" 
          element={
            <Products 
              products={products} 
              categories={categories} 
              cartItems={cartItems} 
              setCartItems={setCartItems} 
            />
          } 
        />
        <Route 
          path="/cart" 
          element={
            <Cart 
              cartItems={cartItems} 
              setCartItems={setCartItems} 
            />
          } 
        />
      </Routes>
      <Footer/>
      <a
  href="https://wa.me/+237695749209"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white shadow-lg rounded-full p-4 flex items-center justify-center transition duration-300"
  aria-label="Contactez-nous sur WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
  </svg>
</a>

    </>
  );
}

export default App;
