import { Link } from 'react-router-dom';
import './NotFound.page.css';

function NotFound() {
	return (
		<main className='not-found-container'>
			<section>
				<h1>404 Page Not Found</h1>
				<Link to='/' className='not-found-link'>Return to Home page</Link>
			</section>
		</main>
	);
}

export default NotFound;
