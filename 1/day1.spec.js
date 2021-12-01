const sonar_sweep = require( "./day1.js" );

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
} );
