import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.component';
import Home from './pages/Home/Home.page';
import Cart from './pages/Cart/Cart.page';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.page';
import Footer from './components/Footer/Footer.component';
import LoginPopup from './components/LoginPopup/LoginPopup.component';
import './App.css';

function App() {
	const [showLogin, setShowLogin] = useState(false);

	return (
		<>
		{showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : undefined }
			<Navbar setShowLogin={setShowLogin} />
			<div className='app'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/order' element={<PlaceOrder />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
