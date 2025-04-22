import { useState, useEffect } from 'react';
import { storeContext as StoreContext } from './StoreContext.tools';
import { serverUrl } from '../../utils';
import axios from 'axios';


function StoreProvider({ children }) {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState('');
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();

      if(localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'));
      }
    }

    loadData();
  }, []);

  async function fetchFoodList() {
    const response = await axios.get(`${serverUrl}/api/food/list`);
    if(response.data.success) {
      setFoodList(response.data.data);
    } else {
      alert(response.data.message);
    }
  }

  // adds item count on cart
  async function addToCart(itemId) {
		if (!cartItems[itemId]) {
			setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
		} else {
			setCartItems((prev) => ({ ...prev, [itemId]: ++prev[itemId] }));
		}

    // reflect in backend
    if(token) {
      await axios.post(`${serverUrl}/api/cart/add`, { itemId }, { headers: { token }});
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
				let product = foodList.find((product) => product._id === idKey);
				totalAmount += product.price * cartItems[idKey];
			}
    }

    return totalAmount;
  }

	const contextValue = { foodList, cartItems, setCartItems, addToCart, removeFromCart, getTotalCartAmount, serverUrl, token, setToken };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider;
