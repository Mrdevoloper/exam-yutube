import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../Pages/HomePage/HomePage';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Profile from '../../Pages/Profile/Profile';
import Photos from '../../Pages/PhotosPage/Photos';

function Home() {
	return (
		<>
			<Routes>
				<Route
					path='/*'
					element={
						<div className='container'>
							<Sidebar />
							<HomePage />
						</div>
					}
				/>
				<Route
					path='/profile/:id'
					element={
						<div className='container'>
							<Sidebar />
							<Profile />
						</div>
					}
				/>
				<Route
					path='/photos/:id'
					element={
						<div className='container'>
							<Photos />
						</div>
					}
				/>
			</Routes>
		</>
	);
}

export default Home;
