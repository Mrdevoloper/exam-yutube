import React from 'react';
import './Profile.scss';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import cover from '../../Assets/Img/Cover.png';
import qongiroq from '../../Assets/Icon/qongiroq.svg';
import search from '../../Assets/Icon/search.svg';
import sixPic from '../../Assets/Img/sixPic.png';
import RenderUsers from '../../Components/PhotosPage/PhotosPage';

function Profile() {
	const [users, setUsers] = React.useState([]);
	const [user2, setUser2] = React.useState([]);

	const { id } = useParams();

	React.useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					'https://reqres.in/api/users/' + id,
				);
				const data = await response.json();

				setUsers(data.data);
			} catch (err) {
				console.log(err);
			}
		})();
	}, [id]);

	// Picturesrender

	React.useEffect(() => {
		(async () => {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/photos/',
			);
			const data = await response.json();
			const dataClise = data.slice(0, 6);
			if (dataClise?.length > 0) {
				setUser2([...dataClise]);
			}
		})();
	}, []);

	return (
		<>
			<div className='Profile'>
				<div className='Profile__wrapperOfNav'>
					<input
						type='text'
						placeholder='Search'
						className='Profile__inputSearch'
					/>
					<div className='Profile__wrapperOfNavIcons'>
						<div className='Profile__warpperOfCamera'></div>
						<div className='Profile__wrapperOfMenu'></div>
						<div className='Profile__wrapperOfQongiroq'></div>
						<div className='Profile__wrapperOfUser'></div>
					</div>
				</div>
				<img
					className='Profile__coverImg'
					src={cover}
					width={1250}
					alt=''
				/>
				<div className='Profile__UserProfileWrapper'>
					<div className='Profile__UserProfile'>
						<img
							className='Profile__renderPhoto'
							src={users.avatar}
							width={70}
							height={70}
							alt=''
						/>
						<div className='Profile__userName'>
							<h2>{users.first_name}</h2>
							<span className='Profile__spansub'>
								245K subscribed
							</span>
						</div>
					</div>
					<div className='Profile__subscribe'>
						<img
							className='Profile__imgsub'
							src={qongiroq}
							alt=''
						/>
						<button type='button' className='Profile__sub'>
							Subscribe 2.3m
						</button>
					</div>
				</div>
				<nav className='Profile__NAvBarUsers'>
					<ul className='Profile__wrapNavuser'>
						<li className='Profile__NavUser'>
							<NavLink
								className='Profile__NavLinkUser Profile__active2'
								to=''>
								Home
							</NavLink>
						</li>
						<li className='Profile__NavUser'>
							<NavLink className='Profile__NavLinkUser' to=''>
								Videos
							</NavLink>
						</li>
						<li className='Profile__NavUser'>
							<NavLink className='Profile__NavLinkUser' to=''>
								Playlists
							</NavLink>
						</li>
						<li className='Profile__NavUser'>
							<NavLink className='Profile__NavLinkUser' to=''>
								Channels
							</NavLink>
						</li>
						<li className='Profile__NavUser'>
							<NavLink className='Profile__NavLinkUser' to=''>
								Discussion
							</NavLink>
						</li>
						<li className='Profile__NavUser'>
							<NavLink className='Profile__NavLinkUser' to=''>
								About
							</NavLink>
						</li>
						<li className='Profile__NavUser'>
							<NavLink className='Profile__NavLinkUser' to=''>
								<img src={search} alt='' />
							</NavLink>
						</li>
					</ul>
					<h3 className='Profile__recommendcahnell'>
						Recommended channel
					</h3>
				</nav>
				<div className='Profile__WarapperVideoText'>
					<NavLink to={'/photos/6'}>
						<img className='Profile__picoq' src={sixPic} alt='' />
					</NavLink>
					<div className='Profile__wrapperTextContent'>
						<h2 className='Profile__title'>
							Choosing The Best Audio Player Software For Your
							Computer
						</h2>
						<p className='Profile__text'>
							Your cheap internet-based banner advertising will
							become one of the sought for ads there are. Today,
							the world of Internet advertising is rapidly
							evolving beyond banner ads and intrusive pop-ups.
							Bayles A common medium for advertising on the
							Internet is the use of banner ads.
						</p>

						<span className='Profile__views'>
							11k views · 6 months ago
						</span>
					</div>
					<RenderUsers />
				</div>
				<h2 className='Profile__phelps'>Margaret Phelps videos</h2>
				<div className='Profile__renderPictures'>
					{user2.length > 0 &&
						user2.map((user) => (
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
}

export default Profile;
