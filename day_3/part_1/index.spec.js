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

		expect( toInt( res.e ) * toInt( res.g ) ).toEqual( 3923414 );
	} );
} );
