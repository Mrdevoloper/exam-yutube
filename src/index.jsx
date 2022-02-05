import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ProviderGamburger } from '../src/Context/GamburgerMenu';
import { Provider as AuthProvider } from './Context/Enterance';

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<ProviderGamburger>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ProviderGamburger>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
