import React from 'react';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
import { Context as ContextGamburger } from '../../Context/GamburgerMenu';

const Sidebar = function () {
	const [users, setUsers] = React.useState([]);

	React.useEffect(() => {
		(async () => {
			const response = await fetch('https://reqres.in/api/users');
			const data = await response.json();
			if (data?.data?.length > 0) {
				setUsers([...data.data]);
			}
		})();
	}, []);

	const { burger, setBurger } = React.useContext(ContextGamburger);

	const GamMenu = function () {
		burger ? setBurger(!burger) : setBurger(!burger);
	};

	return (
		<>
			<div className='wrapperSidebar'>
				<div className='wrapperSidebar__youtubeHeaderWiev'>
					<div
						onClick={GamMenu}
						className='wrapperSidebar__hamburger'></div>
					<div className='wrapperSidebar__yutubeNDlogo'></div>
				</div>
				<div className={`site_bar_box ${burger ? null : 'hidden'}`}>
					<ul className='wrapperSidebar__wrapNavLinks  '>
						<li className='wrapperSidebar__listLink wrapperSidebar__Sidebaricon1'>
							<NavLink
								className='wrapperSidebar__NavLinks wrapperSidebar__active'
								to=''>
								Home
							</NavLink>
						</li>
						<li className='wrapperSidebar__listLink wrapperSidebar__Sidebaricon2'>
							<NavLink className='wrapperSidebar__NavLinks' to=''>
								Treading
							</NavLink>
						</li>

						<li className='wrapperSidebar__listLink wrapperSidebar__Sidebaricon3'>
							<NavLink className='wrapperSidebar__NavLinks' to=''>
								Subscriptions
							</NavLink>
						</li>
					</ul>

					<ul className=' wrapperSidebar__wrapNavLinks  '>
						<li className='wrapperSidebar__listLink wrapperSidebar__SidebariconSecond1'>
							<NavLink
								className='wrapperSidebar__NavLinks '
								to='/profile'>
								Library
							</NavLink>
						</li>
						<li className='wrapperSidebar__listLink wrapperSidebar__SidebariconSecond2'>
							<NavLink className='wrapperSidebar__NavLinks' to=''>
								History
							</NavLink>
						</li>
						<li className='wrapperSidebar__listLink wrapperSidebar__SidebariconSecond3'>
							<NavLink className='wrapperSidebar__NavLinks' to=''>
								Watch later
							</NavLink>
						</li>
						<li className='wrapperSidebar__listLink wrapperSidebar__SidebariconSecond4'>
							<NavLink
								className='wrapperSidebar__NavLinks '
								to=''>
								Favourites
							</NavLink>
						</li>
						<li className='wrapperSidebar__listLink wrapperSidebar__SidebariconSecond5'>
							<NavLink className='wrapperSidebar__NavLinks' to=''>
								Liked videos
							</NavLink>
						</li>
						<li className='wrapperSidebar__listLink wrapperSidebar__SidebariconSecond6'>
							<NavLink className='wrapperSidebar__NavLinks' to=''>
								Music
							</NavLink>
						</li>
						<li className='wrapperSidebar__listLink wrapperSidebar__SidebariconSecond7'>
							<NavLink className='wrapperSidebar__NavLinks' to=''>
								Games
							</NavLink>
						</li>
						<li className='wrapperSidebar__listLink wrapperSidebar__SidebariconSecond8'>
							<NavLink className='wrapperSidebar__NavLinks' to=''>
								Show more
							</NavLink>
						</li>
					</ul>
					<ul>
						<li className='wrapperSidebar__warpperUsers'>
							<h3>Subscriptions</h3>
							{users.length > 0 &&
								users.map((user) => (
									<div key={user.id} className='usersList'>
										<img
											className='wrapperSidebar__usersimg'
											width={26}
											height={26}
											src={user.avatar}
											alt='some'
										/>
										<NavLink
											className='wrapperSidebar__NavLinkss'
											to={'/profile/' + user.id}>
											{user.first_name}
										</NavLink>
									</div>
								))}
						</li>
					</ul>

					<div className='wrapperSidebar__settings'>
						<h5 className='wrapperSidebar__NavlinkSet'>Setting</h5>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
