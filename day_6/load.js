const fs = require( "fs" );

/**
 * Load the input for day 6.
 *
 * @param {string} filePath The path to the input file.
 *
 * @returns {number[]} The loaded data.
 */
function load( filePath ) {
	const input = fs.readFileSync( filePath, "utf-8" );
	return input.split( "," ).map( Number );
}

module.exports = load;
