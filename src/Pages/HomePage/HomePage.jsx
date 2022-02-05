import React from 'react';
import './HomePage.scss';
// import { useParams } from 'react-router-dom';

import Circle from '../../Assets/Img/food&drink.png';
import { NavLink } from 'react-router-dom';
import im5 from '../../Assets/Img/5-image.jpg';

const HomePage = function () {
	const [users, setUsers] = React.useState([]);
	const [users2, setUsers2] = React.useState([]);

	// const { id } = useParams();

	React.useEffect(() => {
		(async () => {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/photos',
			);
			const data = await response.json();
			const dataClise = data.slice(0, 6);
			if (dataClise?.length > 0) {
				setUsers([...dataClise]);
			}
		})();
	}, []);

	React.useEffect(() => {
		(async () => {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/photos',
			);
			const data = await response.json();
			const infoClise = data.slice(0, 4);
			if (infoClise?.length > 0) {
				setUsers2([...infoClise]);
			}
		})();
	}, []);
	// const [user, setUsers] = React.useState({});

	// React.useEffect(() => {
	// 	(async () => {
	// 		const response = await fetch(
	// 			'https://jsonplaceholder.typicode.com/photos' + id,
	// 		);
	// 		const data = await response.json();
	// 		const dataClise = data.slice(0, 6);
	// 		if (dataClise?.length > 0) {
	// 			setUsers([...dataClise]);
	// 		}
	// 	})();
	// }, [id]);

	return (
		<>
			<div className='HomePage'>
				<div className='HomePage__wrapperOfNav'>
					<input
						type='text'
						placeholder='Search'
						className='HomePage__inputSearch'
					/>
					<div className='HomePage__wrapperOfNavIcons'>
						<div className='HomePage__warpperOfCamera'></div>
						<div className='HomePage__wrapperOfMenu'></div>
						<div className='HomePage__wrapperOfQongiroq'></div>
						<div className='HomePage__wrapperOfUser'></div>
					</div>
				</div>
				<div className='HomePage__wrapperTitileUser'>
					<div className='HomePage__blairWrapper'>
						<img className='HomePage__blairPic' src={im5} alt='' />
						<NavLink to='/profile/5' className='HomePage__dollie'>
							Dollie Blair
						</NavLink>
					</div>
					<div className='HomePage__btnwrapper'></div>
				</div>
				<div className='HomePage__cardsALL'>
					{users.length > 0 &&
						users.map((user) => (
							<div key={user.id} className='HomePage__cardPic'>
								<NavLink to={'/photos/' + user.id}>
									<img
										className='HomePage__cardImg'
										src={user.url}
										alt=''
									/>
								</NavLink>
								<span className='HomePage__about'>
									80k views · 3 days Dollie Blair
								</span>
								<p>Medical Care Is Just</p>
							</div>
						))}
				</div>
				<div className='HomePage__wrapperTitileUser'>
					<NavLink to='profile/1'>
						<h2 className='HomePage__Recommended'>Recommended</h2>
					</NavLink>
					<div className='HomePage__btnwrapper'></div>
				</div>
				<div className='HomePage__cardsALL'>
					{users2.length > 0 &&
						users2.map((user) => (
							<div key={user.id} className='HomePage__cardPic'>
								<NavLink to={'/photos/' + user.id}>
									<img
										className='HomePage__cardImg2'
										src={user.url}
										alt=''
									/>
								</NavLink>
								<span className='HomePage__about'>
									80k views · 3 days{' '}
									<span className='HomePage__dblairr'>
										Dollie Blair
									</span>
								</span>
								<p>Medical Care Is Just</p>
							</div>
						))}
				</div>
				<div className='HomePage__wrapperTitileUser'>
					<div className='HomePage__blairWrapper2'>
						<img
							className='HomePage__blairPic'
							src={Circle}
							alt=''
						/>
						<NavLink to='profile/4'>
							<h2 className='HomePage__dolliee'>Food & Drink</h2>
						</NavLink>
						<span className='publish'>
							Recommended channel for you
						</span>
					</div>
					<div className='HomePage__btn3NdBtn'>
						<button className='HomePage__sub3'>
							Subscribe 2.3m
						</button>
						<div className='HomePage__btnwrapper'></div>
					</div>
				</div>
				<div className='HomePage__cardsALL'>
					{users.length > 0 &&
						users.map((user) => (
							<div key={user.id} className='HomePage__cardPic'>
								<NavLink to={'/photos/' + user.id}>
									<img
										className='HomePage__cardImg'
										src={user.url}
										alt=''
									/>
								</NavLink>
								<span className='HomePage__about'>
									80k views · 3 days Dollie Blair
								</span>
								<p>Medical Care Is Just</p>
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export default HomePage;
