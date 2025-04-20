import { useState } from 'react';
import { storeContext as StoreContext } from './StoreContext.tools';
import { food_list } from '../../assets/assets';
import { serverUrl } from '../../utils';


function StoreProvider({ children }) {
  const [cartItems, setCartItems] = useState({});

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

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

  // calculates total amount in cart
  function getTotalCartAmount() {
    let totalAmount = 0;

    for (const idKey in cartItems) {
      if (cartItems[idKey] > 0) {
				let product = food_list.find((product) => product._id === idKey);
				totalAmount += product.price * cartItems[idKey];
			}
    }

    return totalAmount;
  }

	const contextValue = { food_list, cartItems, setCartItems, addToCart, removeFromCart, getTotalCartAmount, serverUrl };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider;
