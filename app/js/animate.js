'use strict';
import $ from 'jquery';

export function animateDiamondOnClick() {
	$('.js-diamond').on('click', moveShapeLeft);
}

export function animateSixPointedStarOnClick() {
	$('.js-six-pointed-star').on('click', moveShapeUp);
}

export function animateFourPointedShapeOnClick() {
	$('.js-four-pointed-shape').on('click', moveShapeDown);
}

export function animateEightPointedStarOnClick() {
	$('.js-eight-pointed-star').on('click', moveShapeRight);
}

export function animateHeaderOnMobile() {
	$('.nav-group').one('click', moveMobileHeader);
}

export function handleMobileNavClick() {
	$('.nav-group').on('click', changeSection);
}

function moveMobileHeader() {
	const $header = $('header');
	const section = $(this).data('section');
	const $section = $(`#${section}`);
	let offset = getYOffset($header);
	$header.css({
		'position': 'relative',
		'top': '13%'
	})
	setTimeout(function() {
		$section.addClass('showing');
		$section.css({
			'display': 'block'
		});
	}, 1000);
	$('.nav-group').off('click');
	handleMobileNavClick();
}

function changeSection() {
	const $navItem = $(this);
	const $navSection = $(`#${$(this).data('section')}`);
	const sectionLinkedFromNavItem = $navItem.data('section');
	const $activeSection = getActiveSection();
	const activeSectionID = $activeSection.attr('id');
	console.log($navSection, activeSectionID);

	if (sectionLinkedFromNavItem !== activeSectionID) {
		console.log('We need to change the active section!');
		toggleMobileVisibility($activeSection);
		toggleMobileVisibility($navSection);
	}

	if (sectionLinkedFromNavItem === activeSectionID) {
		console.log('This page is already open!');
	}
}

function getActiveSection() {
	let section;
	$('section').each(function() {
		if ($(this).hasClass('showing')) {
			section = $(this);
		}
	});
	return section;
}

function moveShapeUp() {
	const $container = getElementContainer($(this));
	moveShapes($container, $('#services'), getYOffset, translateYPixels, 'up');
}

function moveShapeLeft() {
	const $container = getElementContainer($(this));
	moveShapes($container, $('#about'), getXOffset, translateXPixels, 'left');
}

function moveShapeDown() {
	const $container = getElementContainer($(this));
	moveShapes($container, $('#portfolio'), getYOffset, translateYPixels, 'down');
}

function moveShapeRight() {
	const $container = getElementContainer($(this));
	moveShapes($container, $('#contact'), getXOffset, translateXPixels, 'right');
}

function fadeToggleSiteTitle() {
	toggleVisibility($('.js-site-title'));
}

function fadeToggleSection($content) {
	toggleVisibility($content);
}

function moveShapes($container, $content, getOffset, translatePixels, direction) {
	translatePixels($container, direction, getOffset($container));
	moveRemainingShapesOffscreen($container.siblings());
	fadeToggleSiteTitle();
	fadeToggleSection($content);
	$('.nav-link').fadeToggle();
}

function toggleVisibility($element) {
	if ($element.css('visibility') !== 'hidden') {
		$element.addClass('hidden');
		$element.removeClass('showing');
	} else {
		$element.addClass('showing');
		$element.removeClass('hidden');
	}
}

function toggleMobileVisibility($element) {
	if ($element.css('visibility') !== 'hidden') {
		$element.addClass('hidden');
		$element.removeClass('showing');
		$element.css('display', 'none');
	} else {
		$element.addClass('showing');
		$element.css('display', 'block');
		$element.removeClass('hidden');
	}
}

function getElementContainer($element) {
	return $($element.parent());
}

function getXOffset($element) {
	return $element.offset().left;
}

function getYOffset($element) {
	return $element.offset().top;
}

function applyTransform($element, transformCSS) {
	$element.css({
		"-webkit-transform": transformCSS,
		"-ms-transform": transformCSS,
		"transform": transformCSS
	});
}

function translateXPixels($element, direction, XOffset, $elementWidth = 0) {
	let transformCSS = ``;
	let pixelsFromRight = $(window).width() - (XOffset + $element.width());

	if (direction == 'left') {
		transformCSS = `translateX(-${XOffset + $elementWidth}px)`;
	} 

	if (direction == 'right') {
		transformCSS = `translateX(${pixelsFromRight + $elementWidth}px)`;
	}

	applyTransform($element, transformCSS);
}

function translateYPixels($element, direction, YOffset, $elementHeight = 0) {
	let transformCSS = ``;
	let pixelsFromBottom = $(window).height() - (YOffset + $element.height());

	if (direction == 'up') {
		transformCSS = `translateY(-${YOffset + $elementHeight}px)`;
	} 

	if (direction == 'down') {
		transformCSS = `translateY(${pixelsFromBottom + $elementHeight}px)`;
	}

	applyTransform($element, transformCSS);
}

function moveRemainingShapesOffscreen(siblings) {
	var categorizedSiblings = categorizeSiblings(siblings);
	categorizedSiblings.forEach(function(sibling) {
		let $siblingElement = sibling.element;
		
		switch (sibling.type) {
			case 'diamond':
				translateXPixels($siblingElement, 'left', getXOffset($siblingElement), $siblingElement.width());
				break;
			case 'six-pointed-star':
				translateYPixels($siblingElement, 'up', getYOffset($siblingElement), $siblingElement.height());
				break;
			case 'four-pointed-shape':
				translateYPixels($siblingElement, 'down', getYOffset($siblingElement), $siblingElement.height());
				break;
			case 'eight-pointed-star':
				translateXPixels($siblingElement, 'right', getXOffset($siblingElement), $siblingElement.width());
				break;
			default:
				console.log('No siblings match the given types.');
		}
	});
}

function categorizeSiblings (siblings) {
	var categorizedSiblings = [];

	siblings.map(function() {
		let $sibling = $(this);
		let isDiamond = $sibling.children('div').hasClass('js-diamond');
		let isSixPointedStar = $sibling.children('div').hasClass('js-six-pointed-star');
		let isFourPointedShape = $sibling.children('div').hasClass('js-four-pointed-shape');
		let isEightPointedStar = $sibling.children('div').hasClass('js-eight-pointed-star');
		let obj = {
			element: $sibling
		};

		if (isDiamond) {
			obj.type = 'diamond';
		}

		if (isSixPointedStar) {
			obj.type = 'six-pointed-star';
		}

		if (isFourPointedShape) {
			obj.type = 'four-pointed-shape';
		}

		if (isEightPointedStar) {
			obj.type = 'eight-pointed-star';
		}

		categorizedSiblings.push(obj);
	});

	return categorizedSiblings;
}

