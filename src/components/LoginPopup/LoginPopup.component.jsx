import { useState } from 'react';
import { assets } from '../../assets/assets';
import './LoginPopup.component.css';

function LoginPopup({ setShowLogin }) {
  const [currState, setCurrentState] = useState('Login');

  return (
		<div className='login-popup'>
			<form className='login-popup-container'>
				<div className='login-popup-title'>
					<h2>{currState}</h2>
					<img
						onClick={() => setShowLogin(false)}
						src={assets.cross_icon}
						alt='Cross icon image'
					/>
				</div>
				<div className='login-popup-inputs'>
          {currState === 'Login' ? undefined : (<input type='text' placeholder='Enter your full name' required />)}
          <input type="email" placeholder='Enter your email' required />
          <input type="password" placeholder='Password' required />
				</div>
        <button>{currState === 'Sign Up' ? 'Sign Up' : 'Login' }</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
        {currState === 'Login' ? <p>Do you want to sign up? <span onClick={() => setCurrentState('Sign Up')}>Click here</span></p> : <p>Already signed up? <span onClick={() => setCurrentState('Login')}>Login</span></p>}
			</form>
		</div>
	);
}

export default LoginPopup;
