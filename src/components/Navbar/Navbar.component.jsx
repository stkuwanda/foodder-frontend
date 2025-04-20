import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { useStoreContext } from '../../context/StoreContext/StoreContext.tools';
import './Navbar.component.css';


function Navbar({ setShowLogin, selected, setSelected }) {
  const { getTotalCartAmount } = useStoreContext();

	return (
		<nav>
			<Link to='/'><img src={assets.logo} alt='brand logo image' className='logo' /></Link>
			<ul className='navbar-menu'>
        <Link to='/' onClick={() => setSelected('home')} className={selected === 'home' ? 'active' : undefined}>home</Link>
        <Link to='/#explore-menu' onClick={() => setSelected('menu')} className={selected === 'menu' ? 'active' : undefined}>menu</Link>
        <Link to='/#app-download' onClick={() => setSelected('mobile-app')} className={selected === 'mobile-app' ? 'active' : undefined}>mobile app</Link>
        <Link to='/#footer' onClick={() => setSelected('contacts')} className={selected === 'contacts' ? 'active' : undefined}>contacts</Link>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-search-icon">
          <Link to='/cart' onClick={() => setSelected('cart')}><img src={assets.basket_icon} alt="basket icon" /></Link>
          <div className={getTotalCartAmount() > 0 ? "dot": undefined} ></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
		</nav>
	);
}

export default Navbar;
