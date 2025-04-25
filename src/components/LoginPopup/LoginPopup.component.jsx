import { useState } from 'react';
import axios from 'axios';
import { assets } from '../../assets/assets';
import { useStoreContext } from '../../context/StoreContext/StoreContext.tools';
import { useAuthContext } from '../../context/AuthContext/AuthContext.tools';
import './LoginPopup.component.css';

function LoginPopup() {
	const { setShowLogin } = useAuthContext();
	const [currState, setCurrentState] = useState('Login');
	const [userData, setUserData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const {
		serverUrl,
		setToken,
		loadAndSyncCart,
		loadCartData,
		getTotalCartAmount,
	} = useStoreContext();

	function onChangeHandler(event) {
		const name = event.target.name;
		const value = event.target.value;

		setUserData((prev) => ({ ...prev, [name]: value }));
	}

	async function onSubmitHandler(event) {
		event.preventDefault();

		let url = serverUrl;

		if (currState === 'Login') {
			url += '/api/user/login';
		} else {
			url += '/api/user/register';
		}

		try {
			const response = await axios.post(url, userData);
			if (response.data.success) {
				setToken(response.data.token);
				localStorage.setItem('token', response.data.token);

				if (url.includes('register') && getTotalCartAmount() > 0) {
					await loadAndSyncCart(response.data.token);
				} else {
					await loadCartData(localStorage.getItem('token'));
				}

				setShowLogin(false);
			} else {
				alert(response.data.message);
			}
		} catch (error) {
			if (error.message.includes('409')) {
				alert('This user already exists.');
			} else {
				alert(error.message);
			}
		}
	}

	return (
		<div className='login-popup'>
			<form onSubmit={onSubmitHandler} className='login-popup-container'>
				<div className='login-popup-title'>
					<h2>{currState}</h2>
					<img
						onClick={() => setShowLogin(false)}
						src={assets.cross_icon}
						alt='Cross icon image'
					/>
				</div>
				<div className='login-popup-inputs'>
					{currState === 'Login' ? undefined : (
						<input
							type='text'
							name='name'
							onChange={onChangeHandler}
							value={userData.name}
							placeholder='Enter your full name'
							required
						/>
					)}
					<input
						type='email'
						name='email'
						placeholder='Enter your email'
						onChange={onChangeHandler}
						value={userData.email}
						required
					/>
					<input
						type='password'
						name='password'
						onChange={onChangeHandler}
						value={userData.password}
						placeholder='Password'
						required
					/>
				</div>
				<button type='submit'>
					{currState === 'Sign Up' ? 'Sign Up' : 'Login'}
				</button>
				<div className='login-popup-condition'>
					<input type='checkbox' required />
					<p>By continuing, I agree to the terms of use and privacy policy</p>
				</div>
				{currState === 'Login' ? (
					<p>
						Do you want to sign up?{' '}
						<span onClick={() => setCurrentState('Sign Up')}>Click here</span>
					</p>
				) : (
					<p>
						Already signed up?{' '}
						<span onClick={() => setCurrentState('Login')}>Login</span>
					</p>
				)}
			</form>
		</div>
	);
}

export default LoginPopup;
