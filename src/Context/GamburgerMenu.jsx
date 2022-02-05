import React from 'react';

const Context = React.createContext();

function Provider({ children }) {
	const [burger, setBurger] = React.useState(true);

	return (
		<Context.Provider value={{ burger, setBurger }}>
			{children}
		</Context.Provider>
	);
}
export { Provider, Context };
