'use strict';
import $ from 'jquery';
import * as a from './animate';

$(document).ready(() => {
	if ($(document).width() > 600) {
		a.animateDiamondOnClick();
		a.animateSixPointedStarOnClick();
		a.animateFourPointedShapeOnClick();
		a.animateEightPointedStarOnClick();
	} else {
		a.animateHeaderOnMobile();
		//a.handleMobileNavClick();
	}
});