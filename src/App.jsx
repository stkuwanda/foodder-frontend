import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.component';
import Home from './pages/Home/Home.page';
import Cart from './pages/Cart/Cart.page';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.page';
import './App.css';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/order' element={<PlaceOrder />} />
			</Routes>
		</div>
	);
}

export default App;
