import React from 'react';
import './some.scss';
import Oval from '../../Assets/Icon/Oval.svg';
import Oval2 from '../../Assets/Icon/Oval2.svg';
import Oval3 from '../../Assets/Icon/Oval3.svg';

function RenderUser() {
	return (
		<>
			<div className='Profile__usersCome'>
				<div className='Profile__usersCom'>
					<img className='Profile__avatarPic' src={Oval} alt='' />
					<p className='things'>Flora Benson</p>
				</div>
				<div className='Profile__usersCom'>
					<img className='Profile__avatarPic' src={Oval2} alt='' />
					<p className='things'>Violet Cobb</p>
				</div>
				<div className='Profile__usersCom'>
					<img className='Profile__avatarPic' src={Oval3} alt='' />
					<p className='things'>Phillip Mullins</p>
				</div>
			</div>
		</>
	);
}

export default RenderUser;
