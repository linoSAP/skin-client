export const saveCart = (cartItems) => {
    localStorage.setItem('skinGirlLabsCart', JSON.stringify(cartItems));
  };
  
  export const loadCart = () => {
    try {
      const cart = localStorage.getItem('skinGirlLabsCart');
      return cart ? JSON.parse(cart) : [];
    } catch {
      return [];
    }
  };