import { useNavigate } from 'react-router-dom';
import { useStoreContext } from '../../context/StoreContext/StoreContext.tools';
import './Cart.page.css';

function Cart() {
	const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useStoreContext();

	const navigate = useNavigate();

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
      <section className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')} disabled={getTotalCartAmount() === 0}>Proceed to checkout</button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have a promo code, enter it here.</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder='Enter promo code' disabled={getTotalCartAmount() === 0} />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </section>
		</main>
	);
}

export default Cart;
