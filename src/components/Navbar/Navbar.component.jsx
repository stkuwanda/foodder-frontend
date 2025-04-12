import { useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.component.css';

function Navbar() {
  const [selected, setSelected] = useState('home');
	return (
		<nav>
			<img src={assets.logo} alt='brand logo image' className='logo' />
			<ul className='navbar-menu'>
        <li onClick={() => setSelected('home')} className={selected === 'home' ? 'active' : undefined}>home</li>
        <li onClick={() => setSelected('menu')} className={selected === 'menu' ? 'active' : undefined}>menu</li>
        <li onClick={() => setSelected('mobile-app')} className={selected === 'mobile-app' ? 'active' : undefined}>mobile app</li>
        <li onClick={() => setSelected('contacts')} className={selected === 'contacts' ? 'active' : undefined}>contacts</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket icon" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
		</nav>
	);
}

export default Navbar;
