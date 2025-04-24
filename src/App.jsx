import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.component';
import Home from './pages/Home/Home.page';
import Cart from './pages/Cart/Cart.page';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.page';
import Footer from './components/Footer/Footer.component';
import LoginPopup from './components/LoginPopup/LoginPopup.component';
import NotFound from './pages/NotFound/NotFound.page';
import PaymentVerification from './pages/PaymentVerification/PaymentVerification.page';
import './App.css';
import MyOrders from './pages/MyOrders/MyOrders.page';



function App() {
	const [showLogin, setShowLogin] = useState(false);
	const [selected, setSelected] = useState('home');
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
		
		// Scroll to the element with the ID from the fragment identifier
		if (location.hash) {
			const element = document.querySelector(location.hash);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, [location.hash]);

	return (
		<>
			{showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : undefined}
			<Navbar
				setShowLogin={setShowLogin}
				selected={selected}
				setSelected={setSelected}
			/>
			<div className='app'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/order' element={<PlaceOrder />} />
					<Route path='/verify' element={<PaymentVerification />} />
					<Route path='/myorders' element={<MyOrders />} />
					<Route path='*' element={<NotFound />}/>
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
