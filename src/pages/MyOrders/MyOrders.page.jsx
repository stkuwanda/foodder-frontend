import { useEffect, useState } from 'react';
import axios from 'axios';
import { useStoreContext } from '../../context/StoreContext/StoreContext.tools';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import './MyOrders.page.css';

function MyOrders() {
	const [orders, setOrders] = useState([]);
	const { serverUrl, token } = useStoreContext();
	const navigate = useNavigate();

	async function fetchOrders() {
		try {
			const response = await axios.post(
				`${serverUrl}/api/order/orders`,
				{},
				{ headers: { token } }
			);

			if (response.data.success) {
				if (response.data.data.length > 0) {
					setOrders(structuredClone(response.data.data));
				} else {
					navigate('/');
				}
			} else {
				alert('Something went wrong! Reattempt.');
			}
		} catch {
			alert('Something went wrong! Reattempt.');
		}
	}

	useEffect(() => {
		if (token) {
			fetchOrders();
		}
	}, [token]);

	return (
		<main className='my-orders'>
			<h2>My Orders</h2>
			<div className='container'>
				{orders.map((order) => {
					return (
						<div key={order._id} className='my-orders-order'>
							<img src={assets.parcel_icon} alt='Parcel icon image.' />
							<p>
								{order.items.map((item, i) => {
									if (i === order.items.length - 1) {
										return `${item.name} x ${item.quantity}`;
									} else {
										return `${item.name} x ${item.quantity}, `;
									}
								})}
							</p>
							<p>${order.amount}</p>
							<p>Items: {order.items.length}</p>
							<p>
								<span>&#x25cf; </span> <b>{order.status}</b>
							</p>
							<button>Track order</button>
						</div>
					);
				})}
			</div>
		</main>
	);
}

export default MyOrders;
