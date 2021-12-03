const sonar_sweep = require( "." );
const fs = require( "fs" );

describe( "The improved sonar sweep function", () => {
	it( "counts the number of increases for an empty array", () => {
		expect( sonar_sweep( [] ) ).toEqual( 0 );
	} );
	it( "counts the number of increases", () => {
		expect( sonar_sweep( [ 3, 5, 2, 4, 2 ] ) ).toEqual( 1 );
	} );
	it( "counts the number of increases for a larger array", () => {
		expect( sonar_sweep( [ 199, 200, 208, 210, 200, 207, 240, 269, 260, 263 ] ) ).toEqual( 5 );
	} );
	it( "counts the number of increases for the input", () => {
		const input = fs.readFileSync( "day_1/input.txt", "utf-8" );
		const data = input.split( "\n" ).map( Number ).slice( 0, - 1 );

		expect( sonar_sweep( data ) ).toEqual( 1523 );
	} );
} );
