/* eslint-disable no-unused-vars */

import React from 'react';
import { HomeBanner } from './HomeBanner/HomeBanner';
import { Partners } from './Partners/Partners';
import { KnowLevel } from './KnowLevel/KnowLevel';

export const Home = () => {
	return (
		<div>
			<HomeBanner />
			<Partners />
            <KnowLevel/>
		</div>
	);
};
