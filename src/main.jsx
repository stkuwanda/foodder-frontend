import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import StoreProvider from './context/StoreContext/StoreProvider.context.jsx';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<StoreProvider>
			<App />
		</StoreProvider>
	</BrowserRouter>
);
