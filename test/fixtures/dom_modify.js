/**
 * Module for modifying DOM elements
 */

/**
 * Module dependencies
 */
var _ = require( 'lodash' );

function setColor( selector, color ) {
	var elements = document.querySelectorAll( selector );

	_.each( elements, function( element ) {
		element.style.color = color;
	} );
}

module.exports = {
	setColor: setColor
};