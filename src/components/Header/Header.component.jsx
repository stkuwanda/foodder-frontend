import './Header.component.css';

function Header() {
  return (
    <header>
      <div className="header-content">
        <h1>Order your favorite food here</h1>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining, one delicious meal at a time.</p>
        <a href='/#explore-menu'>View Menu</a>
      </div>
    </header>
  )
}

export default Header;
