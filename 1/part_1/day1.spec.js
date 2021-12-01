const sonar_sweep = require( "./day1.js" );
const fs = require( "fs" );

describe( "The sonar sweep function", () => {
	it( "counts the number of increases for an empty array", () => {
		expect( sonar_sweep( [] ) ).toEqual( 0 );
	} );
	it( "counts the number of increases for an array with 2 items, with no increase", () => {
		expect( sonar_sweep( [ 5, 3 ] ) ).toEqual( 0 );
	} );
	it( "counts the number of increases for an array with 2 items, with an increase", () => {
		expect( sonar_sweep( [ 3, 5 ] ) ).toEqual( 1 );
	} );
	it( "counts the number of increases for an array with 4 items, with two increases", () => {
		expect( sonar_sweep( [ 3, 5, 2, 4 ] ) ).toEqual( 2 );
	} );
	it( "counts the number of increases for an array with three increases", () => {
		expect( sonar_sweep( [ 3, 5, 2, 4, 2, 1, 8, 3 ] ) ).toEqual( 3 );
	} );
	it( "counts the number of increases for an array with seven increases", () => {
		expect( sonar_sweep( [ 199, 200, 208, 210, 200, 207, 240, 269, 260, 263 ] ) ).toEqual( 7 );
	} );
	it( "counts the number of increases", () => {
		const input = fs.readFileSync( "1/input.txt", "utf-8" );
		const data = input.split( "\n" ).map( Number );

		expect( sonar_sweep( data ) ).toEqual( 1477 );
	} );
} );
