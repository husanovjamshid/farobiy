/* eslint-disable no-unused-vars */
import React from 'react';
import education from '../../../assets/img/education.svg';
import certificate from '../../../assets/img/certificate.svg';
import graph from '../../../assets/img/graphic.svg';
import './knowLevel.scss';

export const KnowLevel = () => {
	return (
		<div className='know-level'>
			<div className='container'>
				<div className='know-inner'>
					<h1 className='know-title'>Bilim darajangizni qanday?</h1>
					<p className='know-desc'>
						Grant sovrindori bo’lish uchun siz 3 yonalishda test topshirib bilim
						darajangizni ko’rsatishingiz kerak bo’ladi. Matematika fanidan 20 ta
						savol, Ingliz tili fanidan 10ta va 3ta IQ test uchun tog’ri javoblarni
						belgilashingiz kerak. Vaqt chegaralangan va testni qatyta topshirish
						imkoniyati yo’q.
					</p>
					<button className='know-btn'>Test topshirish</button>
				</div>
			</div>
		</div>
	);
};
