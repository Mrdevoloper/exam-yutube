import React from 'react';

const Context = React.createContext();

function Provider({ children }) {
	const [token, setToken] = React.useState(
		JSON.parse(window.localStorage.getItem('token')) || false,
	);

	React.useEffect(() => {
		if (token) {
			window.localStorage.setItem('token', JSON.stringify(token));
		} else {
			window.localStorage.removeItem('token');
		}
	}, [token]);

	return (
		<Context.Provider value={{ token, setToken }}>
			{children}
		</Context.Provider>
	);
}

export { Context, Provider };
