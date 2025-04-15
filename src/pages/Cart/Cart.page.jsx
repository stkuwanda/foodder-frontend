import { useStoreContext } from '../../context/StoreContext/StoreContext.tools';
import './Cart.page.css';

function Cart() {
	const { cartItems, food_list, removeFromCart } = useStoreContext();

	return (
		<main className='cart'>
			<section className='cart-items'>
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
				{food_list.map(
					(item) =>
						cartItems[item._id] > 0 && (
							<div>
								<div className='cart-items-title cart-item'>
									<img src={item.image} alt={`Image of ${item.name}`} />
									<p>{item.name}</p>
									<p>${item.price}</p>
									<p>{cartItems[item._id]}</p>
									<p>${item.price * cartItems[item._id]}</p>
									<p className='cross' onClick={() => removeFromCart(item._id)}>x</p>
								</div>
								<hr />
							</div>
						)
				)}
			</section>
		</main>
	);
}

export default Cart;
