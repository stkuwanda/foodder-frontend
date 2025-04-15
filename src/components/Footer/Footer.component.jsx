import { assets } from '../../assets/assets';
import './Footer.component.css';

function Footer() {
  return (
		<footer id='footer'>
			<div className='footer-content'>
				<div className='footer-content-left'>
					<img src={assets.logo} alt='' />
					<p>
          Fresh Food, Fast Delivery! Enjoy the tastes you love, brought straight to your door with speed and care. Whether it is a snack or a feast, we deliver fresh meals, hassle-free. Order now and turn every bite into a moment to savor!
					</p>
					<div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
				</div>
				<div className='footer-content-center'>
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
				<div className='footer-content-right'>
          <h2>Get In Touch</h2>
          <ul>
            <li>+263 779 550 103</li>
            <li>stkuwanda@gmail.com</li>
          </ul>
        </div>
			</div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 © foodder.com - All Rights Reserved ®
      </p>
		</footer>
	);
}

export default Footer;
