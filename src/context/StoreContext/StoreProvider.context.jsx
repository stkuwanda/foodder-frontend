import { useState } from 'react';
import { storeContext as StoreContext } from './StoreContext.tools';
import { food_list } from '../../assets/assets';


function StoreProvider({ children }) {
  const [cartItems, setCartItems] = useState({});

  // adds item count on cart
  function addToCart(itemId) {
		if (!cartItems[itemId]) {
			setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
		} else {
			setCartItems((prev) => ({ ...prev, [itemId]: ++prev[itemId] }));
		}
	}

	// subtracts item count on cart
	function removeFromCart(itemId) {
		setCartItems((prev) => ({ ...prev, [itemId]: --prev[itemId] }));
	}

	const contextValue = { food_list, cartItems, setCartItems, addToCart, removeFromCart };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider;
