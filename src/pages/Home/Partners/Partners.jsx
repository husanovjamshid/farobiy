/* eslint-disable no-unused-vars */
import React from 'react';
import rtm from '../../../assets/parters/rtm.svg';
import itPark from '../../../assets/parters/it-park.svg';
import farobiy from '../../../assets/parters/farobiy.svg';
import './partners.scss';

export const Partners = () => {
	return (
		<div className='partners'>
			<div className='container'>
				<div className='partners-inner'>
					<div className='row'>
						<div className=' col-sm-12 col-md-12 col-lg-6'>
							<div className='partners-wrap'>
								<h2 className='partners-title'>
									Ushbu Grant O’zbekiston Respublikasi Raqamli Texnologiyalari Vazirligi
									va IT Park bilan hamkorlikda tashkillashtirildi
								</h2>
							</div>
						</div>
						<div className=' col-sm-12 col-md-12 col-lg-6'>
							<div className='partners-img'>
								<img src={rtm} alt='' />
								<img src={farobiy} alt='' />
								<img src={itPark} alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
