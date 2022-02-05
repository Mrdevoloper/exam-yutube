import React from 'react';
import './App.scss';
import { Context } from './Context/Enterance';
import Authenapp from './Authenapp';
import UnAputhenapp from './UnAputhenapp';

function App() {
	const { token } = React.useContext(Context);
	if (token) {
		return <Authenapp />;
	} else {
		return <UnAputhenapp />;
	}
}

export default App;
