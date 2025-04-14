import { assets } from '../../assets/assets';
import './Footer.component.css';

function Footer() {
  return (
		<footer id='footer'>
			<div className='footer-content'>
				<div className='footer-content-right'>
					<img src={assets.logo} alt='' />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
						quos vero, recusandae minus, velit voluptatibus deleniti magni quae,
						ea in ab non. Itaque iusto eaque voluptate? Alias cum dolorem
						quaerat.
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
				<div className='footer-content-left'>
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
