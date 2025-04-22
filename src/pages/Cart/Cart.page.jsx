import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStoreContext } from '../../context/StoreContext/StoreContext.tools';
import './Cart.page.css';

function Cart() {
	const { cartItems, foodList, removeFromCart, getTotalCartAmount, serverUrl } =
		useStoreContext();
	const navigate = useNavigate();

	const cartListRef = useRef(null); // Create a ref for the container

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleRemoveItem = (itemId) => {
		if (cartListRef.current) {
			const scrollTop = cartListRef.current.scrollTop;
			// ... your logic to update the cart state (remove the item) ...
			removeFromCart(itemId);
			// After the state update and re-render, restore the scroll position
			setTimeout(() => {
				if (cartListRef.current) {
					cartListRef.current.scrollTop = scrollTop;
				}
			}, 0); // Execute after the re-render
		}
	};

	return (
		<main className='cart'>
			<section ref={cartListRef}>
				<div className='cart-items-title'>
					<p>Items</p>
					<p>Title</p>
					<p>Price</p>
					<p>Quantity</p>
					<p>Total</p>
					<p className='cross'>Remove</p>
				</div>
				<br />
				<hr />
				<div className='cart-items-container'>
					{foodList.map(
						(item) =>
							cartItems[item._id] > 0 && (
								<div className='cart-item-container'>
									<div className='cart-items-title cart-item'>
										<img src={`${serverUrl}/images/${item.image}`} alt={`Image of ${item.name}`} />
										<p>{item.name}</p>
										<p>${item.price}</p>
										<p>{cartItems[item._id]}</p>
										<p>${item.price * cartItems[item._id]}</p>
										<p
											className='cross'
											onClick={() => handleRemoveItem(item._id)}
										>
											x
										</p>
									</div>
									<hr />
								</div>
							)
					)}
				</div>
			</section>
			<section className='cart-bottom'>
				<div className='cart-total'>
					<h2>Cart Totals</h2>
					<div>
						<div className='cart-total-details'>
							<p>Subtotal</p>
							<p>${getTotalCartAmount()}</p>
						</div>
						<hr />
						<div className='cart-total-details'>
							<p>Delivery fee</p>
							<p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
						</div>
						<hr />
						<div className='cart-total-details'>
							<b>Total</b>
							<b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
						</div>
					</div>
					<button
						onClick={() => navigate('/order')}
						disabled={getTotalCartAmount() === 0}
					>
						Proceed to checkout
					</button>
				</div>
				<div className='cart-promo-code'>
					<div>
						<p>If you have a promo code, enter it here.</p>
						<div className='cart-promo-code-input'>
							<input
								type='text'
								placeholder='Enter promo code'
								disabled={getTotalCartAmount() === 0}
							/>
							<button disabled={getTotalCartAmount() === 0}>Submit</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Cart;
