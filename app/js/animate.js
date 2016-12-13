'use strict';
import $ from 'jquery';

export function animateDiamondOnClick() {
	const $diamond = $('.js-diamond');
	$diamond.on('click', moveDiamondLeft);
}

export function animateSixPointedStarOnClick() {
	const $sixPointedStar = $('.js-six-pointed-star');
	$sixPointedStar.on('click', moveSixPointedStarUp);
}

export function animateFourPointedShapeOnClick() {
	const $fourPointedShape = $('.js-four-pointed-shape');
	$fourPointedShape.on('click', moveFourPointedShapeDown);
}

export function animateEightPointedStarOnClick() {
	const $eightPointedStar = $('.js-eight-pointed-star');
	$eightPointedStar.on('click', moveEightPointedStarRight);
}

function moveSixPointedStarUp() {
	const $container = $(getElementContainer($(this)));
	let YOffset = getYOffset($container);
	translateYPixels($container, 'up', YOffset);
	moveRemainingShapesOffscreen($container.siblings());
}

function moveDiamondLeft() {
	const $container = $(getElementContainer($(this)));
	let XOffset = getXOffset($container);
	translateXPixels($container, 'left', XOffset);
	moveRemainingShapesOffscreen($container.siblings());
}

function moveFourPointedShapeDown() {
	const $container = $(getElementContainer($(this)));
	let YOffset = getYOffset($container);
	translateYPixels($container, 'down', YOffset);
	moveRemainingShapesOffscreen($container.siblings());
}

function moveEightPointedStarRight() {
	const $container = $(getElementContainer($(this)));
	let XOffset = getXOffset($container);
	translateXPixels($container, 'right', XOffset);
	moveRemainingShapesOffscreen($container.siblings());
}

function getElementContainer($element) {
	return $element.parent();
}

function getXOffset($element) {
	return $element.offset().left;
}

function getYOffset($element) {
	return $element.offset().top;
}

function translateXPixels($element, direction, XOffset, $elementWidth = 0) {
	if (direction == 'left') {
		$element.css({
			"-webkit-transform": `translateX(-${XOffset + $elementWidth}px)`,
			"transform": `translateX(-${XOffset + $elementWidth}px)`
		});
	} else {
		let pixelsFromRight = $(window).width() - (XOffset + $element.width());
		$element.css({
			"-webkit-transform": `translateX(${pixelsFromRight + $elementWidth}px)`,
			"transform": `translateX(${pixelsFromRight + $elementWidth}px)`
		});
	}
}

function translateYPixels($element, direction, YOffset, $elementHeight = 0) {
	if (direction == 'up') {
		$element.css({
			"-webkit-transform": `translateY(-${YOffset + $elementHeight}px)`,
			"transform": `translateY(-${YOffset + $elementHeight}px)`
		});
	} else {
		let pixelsFromBottom = $(window).height() - (YOffset + $element.height());
		$element.css({
			"-webkit-transform": `translateY(${pixelsFromBottom + $elementHeight}px)`,
			"transform": `translateY(${pixelsFromBottom + $elementHeight}px)`
		});
	}
}

function moveRemainingShapesOffscreen(siblings) {
	var categorizedSiblings = categorizeSiblings(siblings);
	console.log(categorizedSiblings);
	categorizedSiblings.forEach(function(sibling) {
		let $siblingElement = sibling.element;
		let type = sibling.type;
		
		switch (type) {
			case 'diamond':
				let diamondXOffset = getXOffset($siblingElement);
				translateXPixels($siblingElement, 'left', diamondXOffset, $siblingElement.width());
				break;
			case 'six-pointed-star':
				let sixStarYOffset = getYOffset($siblingElement);
				translateYPixels($siblingElement, 'up', sixStarYOffset, $siblingElement.height());
				break;
			case 'four-pointed-shape':
				let fourShapeYOffset = getYOffset($siblingElement);
				translateYPixels($siblingElement, 'down', fourShapeYOffset, $siblingElement.height());
				break;
			case 'eight-pointed-star':
				let eightStarXOffset = getXOffset($siblingElement);
				translateXPixels($siblingElement, 'right', eightStarXOffset, $siblingElement.width());
				break;
			default:
				console.log('No siblings match the required types');
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

		var obj = {
			element: $sibling
		}

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

