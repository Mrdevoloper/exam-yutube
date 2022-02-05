import React from 'react';
import './Photos.scss';
import aylana from '../../Assets/Img/aylana.svg';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Photos() {
	const [users2, setUsers2] = React.useState([]);
	const [users3, setUsers3] = React.useState([]);
	const { id } = useParams();
	React.useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					'https://jsonplaceholder.typicode.com/photos/' + id,
				);
				const data = await response.json();

				setUsers3(data);
			} catch (err) {
				console.log(err);
			}
		})();
	}, [id]);

	React.useEffect(() => {
		(async () => {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/photos',
			);
			const data = await response.json();
			const dataClise = data.slice(0, 6);
			if (dataClise?.length > 0) {
				setUsers2([...dataClise]);
			}
		})();
	}, []);
	return (
		<>
			<div className='wrapperofNavPhoots'>
				<div className='HomePage__wrapperOfNav wrapperOfNav'>
					<div className='wrapperSidebar__youtubeHeaderWiev wrapperYutube'>
						<div className='wrapperSidebar__hamburger'></div>
						<div className='wrapperSidebar__yutubeNDlogo'></div>
					</div>
					<input
						type='text'
						placeholder='Search'
						className='HomePage__inputSearch inputt2'
					/>
					<div className='HomePage__wrapperOfNavIcons'>
						<div className='HomePage__warpperOfCamera'></div>
						<div className='HomePage__wrapperOfMenu'></div>
						<div className='HomePage__wrapperOfQongiroq'></div>
						<div className='HomePage__wrapperOfUser'></div>
					</div>
				</div>
				<div className='twoPhotos'>
					<div>
						<img
							className='imgg11'
							src={users3.url}
							width={1050}
							height={500}
							alt=''
						/>
						<div className='playWrapper'>
							<div className='play1'></div>
							<div className='play2'></div>
							<div className='play3'></div>
							<div className='play4'></div>
							<div className='play5'></div>
							{/* <div className='play6'>6</div>
							<div className='play7'>7</div> */}
						</div>
						<h1 className='dude'>
							Dude You Re Getting A Telescope
						</h1>
						<div className='warapperbtnsPlay'>
							<span>123k views</span>
							<div className='buttons3'>
								<button className='button1'>123k</button>
								<button className='button2'>435k</button>
								<button className='button3'>Share</button>
							</div>
						</div>
						<hr />
						<div className='wrapperCircle'>
							<div className='wrapfood'>
								<img src={aylana} alt='' />
								<div className='FoodDrink'>
									<h2>Food & Drink</h2>
									<span className='publish'>
										Published on 14 Jun 2019
									</span>
								</div>
							</div>
							<span className='Profile__sub sub'>
								245K subscribed
							</span>
						</div>
						<p className='textPhotos'>
							A successful marketing plan relies heavily on the
							pulling-power of advertising copy. Writing
							result-oriented ad copy is difficult, as it must
							appeal to, entice, and convince consumers to take
							action. There is no magic formula to write perfect
							ad copy; it is based on a number of factors,
							including ad placement, demographic, even the
							consumer’s mood when they see your ad.
						</p>

						<NavLink className='show_more' to=''>
							{' '}
							Show more
						</NavLink>
					</div>
					<div className='HomePage__cardsALL cardPhotoColumn'>
						<div className='wrapperNext'>
							<h1 className='next'>Next</h1>
							<p className='autoplay'>Autoplay</p>
						</div>
						{users2.length > 0 &&
							users2.map((user) => (
								<div
									key={user.id}
									className='HomePage__cardPic'>
									<NavLink to={'/photos/' + user.id}>
										<img
											className='HomePage__cardImg cardImg'
											src={user.url}
											alt=''
											width={300}
											height={200}
										/>
									</NavLink>
									<span className='medical'>
										Medical Care Is Just
									</span>
									<div className='medical2'>
										<span>123k views</span>
										<span>Dollie Blair</span>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Photos;
