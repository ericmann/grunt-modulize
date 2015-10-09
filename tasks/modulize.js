/*
 * grunt-modulize
 * https://github.com/ericmann/grunt-modulize
 *
 * Copyright (c) 2015 Eric Mann
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function( grunt ) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask( 'modulize', 'Browserify and Factor-Bundle plugin for Grunt.', function() {
		var done = this.async();

		var path = require( 'path' ),
			fs = require( 'fs.extra' ),
			browserify = require( 'browserify' ),
			factor = require( 'factor-bundle' );

		var entries = [],
			output = [],
			outputPath = this.data.output;

		this.data.modules.forEach( function( file ) {
			grunt.log.writeln( 'Adding `' + file + '` to bundle ...' );
			entries.push( file );

			var filename = path.basename( file );
			output.push( path.join( outputPath, filename ) );
		} );

		// Make sure output directories exist
		fs.mkdirRecursiveSync( this.data.output );
		fs.mkdirRecursiveSync( path.dirname( this.data.bundle ) );

		var bundle = browserify( {
			entries: entries
		} );

		// Group common dependencies
		// -o outputs the entry files without the common dependencies
		bundle.plugin( 'factor-bundle', {
			o: output
		} );

		// Create Write Stream
		var dest = fs.createWriteStream( this.data.bundle );

		// Once the destination file is present, write it.
		dest.on( 'open', function() {
			bundle.bundle().pipe( dest ).on( 'close', function() {
				// Print a success message.
				grunt.log.writeln( 'Bundle created.' );

				done();
			} );
		} );
	} );
};