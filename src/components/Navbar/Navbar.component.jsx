import { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Navbar.component.css';


function Navbar({ setShowLogin }) {
  const [selected, setSelected] = useState('home');
	return (
		<nav>
			<img src={assets.logo} alt='brand logo image' className='logo' />
			<ul className='navbar-menu'>
        <Link to='/' onClick={() => setSelected('home')} className={selected === 'home' ? 'active' : undefined}>home</Link>
        <a href='#explore-menu' onClick={() => setSelected('menu')} className={selected === 'menu' ? 'active' : undefined}>menu</a>
        <a href='#app-download' onClick={() => setSelected('mobile-app')} className={selected === 'mobile-app' ? 'active' : undefined}>mobile app</a>
        <a href='#footer' onClick={() => setSelected('contacts')} className={selected === 'contacts' ? 'active' : undefined}>contacts</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket icon" />
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
		</nav>
	);
}

export default Navbar;
