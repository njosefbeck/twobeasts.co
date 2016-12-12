'use strict';
import $ from 'jquery';

export function animateDiamondOnClick() {
	const $diamond = $('.js-diamond');
	$diamond.on('click', moveDiamondLeft);
}

function moveDiamondLeft() {
	const $container = $(getElementContainer($(this)));
	let XOffset = getXOffset($container);
	translateXPixels($container, XOffset);
	moveRemainingShapesOffscreen($container.siblings());
};

function getElementContainer($element) {
	return $element.parent();
}

function getXOffset($element) {
	return $element.offset().left;
}

function getYOffset($element) {
	return $element.offset().top;
}

function translateXPixels($element, XOffset, $elementHeight = 0) {
	$element.css({
		"-webkit-transform": `translateX(-${XOffset + $elementHeight}px)`,
		"transform": `translateX(-${XOffset + $elementHeight}px)`
	});
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

