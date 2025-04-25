import { useEffect, useState } from 'react';
import { useStoreContext } from '../../context/StoreContext/StoreContext.tools';
import './MyOrders.page.css';
import axios from 'axios';
import { assets } from '../../assets/assets';

function MyOrders() {
	const [orders, setOrders] = useState([]);
	const { serverUrl, token } = useStoreContext();

	async function fetchOrders() {
		const response = await axios.post(
			`${serverUrl}/api/order/orders`,
			{},
			{ headers: { token } }
		);

		if (response.data.success) {
			setOrders(structuredClone(response.data.data));
		} else {
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
              <p>{order.items.map((item, i) => {
                if(i === (order.items.length - 1)) {
                  return `${item.name} x ${item.quantity}`
                } else {
                  return `${item.name} x ${item.quantity}, `
                }
              })}</p>
              <p>${order.amount}</p>
              <p>Items: {order.items.length}</p>
              <p><span>&#x25cf; </span> <b>{order.status}</b></p>
              <button>Track order</button>
						</div>
					);
				})}
			</div>
		</main>
	);
}

export default MyOrders;
