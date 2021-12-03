const func = require( "." );
const fs = require( "fs" );
const { toInt } = require( "../helpers" );

function load_input( path ) {
	const input = fs.readFileSync( path, "utf-8" );

	return input.split( "\n" );
}

describe( "The func", () => {
	it( "does stuff", () => {
		const input = load_input( "day_3/input.txt" );

		const res = func( input );

		console.log( parseInt( "101101100111", 2 ), parseInt( "011111010101", 2 ) );

		expect( toInt( res ) ).toEqual( 2005 );
	} );
} );
