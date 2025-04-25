import { useEffect, useState } from 'react';
import { useStoreContext } from '../../context/StoreContext/StoreContext.tools';
import './PlaceOrder.page.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PlaceOrder() {
	const [orderData, setOrderData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		street: '',
		city: '',
		state: '',
		province: '',
		zipCode: '',
		country: '',
		phone: '',
	});

	const navigate = useNavigate();

	const { getTotalCartAmount, token, foodList, cartItems, serverUrl } =
		useStoreContext();

	function onChangeHandler(event) {
		const name = event.target.name;
		const value = event.target.value;

		setOrderData((prev) => ({ ...prev, [name]: value }));
	}

	async function onPlaceOrderHandler(event) {
		event.preventDefault();
		let orderItems = [];

		for (const item of foodList) {
			if (cartItems[item._id] > 0) {
				let itemInfo = structuredClone(item);
				itemInfo.quantity = cartItems[item._id];
				orderItems.push(itemInfo);
			}
		}

		let order = {
			address: orderData,
			items: orderItems,
			amount: getTotalCartAmount() + 2, // 2 dollars delivery charge
		};

		try {
			let response = await axios.post(`${serverUrl}/api/order/place`, order, {
				headers: { token },
			});

			if (response.data.success) {
				const { sessionUrl } = response.data;
				window.location.replace(sessionUrl);
			} else {
				alert(
					'This operation has failed due to an unspecified error. Try again later.'
				);
			}
		} catch {
			alert(
				'This operation has failed due to an unspecified error. Try again later.'
			);
		}
	}

	useEffect(() => {
		if (!token) {
			navigate('/cart');
		}

		if (getTotalCartAmount() <= 0) {
			navigate('/cart');
		}
	}, [token]);

	return (
		<form onSubmit={onPlaceOrderHandler} className='place-order'>
			<div className='place-order-left'>
				<p className='title'>Delivery information</p>
				<div className='multi-fields'>
					<input
						required
						type='text'
						name='firstName'
						onChange={onChangeHandler}
						value={orderData.firstName}
						placeholder='First name'
					/>
					<input
						required
						type='text'
						name='lastName'
						onChange={onChangeHandler}
						value={orderData.lastName}
						placeholder='Last name'
					/>
				</div>
				<input
					required
					type='email'
					name='email'
					onChange={onChangeHandler}
					value={orderData.email}
					placeholder='Email address'
				/>
				<textarea
					required
					type='text'
					name='street'
					onChange={onChangeHandler}
					value={orderData.street}
					placeholder='Street Address'
					rows={3}
				/>
				<div className='multi-fields'>
					<input
						required
						type='text'
						name='city'
						onChange={onChangeHandler}
						value={orderData.city}
						placeholder='City'
					/>
					<input
						type='text'
						name='province'
						onChange={onChangeHandler}
						value={orderData.province}
						placeholder='Province'
					/>
				</div>
				<div className='multi-fields'>
					<input
						type='text'
						name='zipCode'
						onChange={onChangeHandler}
						value={orderData.zipCode}
						placeholder='Zip Code'
					/>
					<input
						required
						type='text'
						name='country'
						onChange={onChangeHandler}
						value={orderData.country}
						placeholder='Country'
					/>
				</div>
				<input
					required
					type='tel'
					name='phone'
					onChange={onChangeHandler}
					value={orderData.phone}
					placeholder='Phone: +263...'
				/>
			</div>
			<div className='place-order-right'>
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
							<b>
								${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
							</b>
						</div>
					</div>
					<button type='submit'>Proceed to payment</button>
				</div>
			</div>
		</form>
	);
}

export default PlaceOrder;
