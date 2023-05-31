/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../assets/img/logo.svg';
import user from '../../assets/img/user.svg';
import globe from '../../assets/img/globe.svg';
import mail from '../../assets/img/mail.svg';
import phone from '../../assets/img/phone.svg';

import './header.scss';
export const Header = () => {
	return (
		<>
			<nav className='navbar bg-body-tertiary fixed-top'>
				<div className='container'>
					<a href='#' className='navbar-brand'>
						<img src={logo} alt='' />
					</a>

					<ul className='header-list'>
						<li className='header-item me-3 item-phone'>
							<a className='header-mail' href='tell:+998(77)777-30-30'>
								<img src={phone} alt='' /> <span>+998(77)777-30-30</span>
							</a>
						</li>
						<li className='header-item me-2 item-mail'>
							<a className='header-mail' href='mailto:faarobiy@gmail.uz'>
								<img src={mail} alt='' /> <span>faarobiy@gmail.uz</span>
							</a>
						</li>
						<li className='header-item'>
							<a className='lang-btn' type='submit'>
								<img src={globe} alt='' />{' '}
								<select className='header-select' aria-label='Default select example'>
									<option value={1}>Uz</option>
									<option value={2}>Ru</option>
									<option value={3}>En</option>
								</select>
							</a>
						</li>
						<li className='header-item'>
							<a className='help-btn' type='submit'>
								<img src={user} alt='' /> <span>Yordam</span>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};
