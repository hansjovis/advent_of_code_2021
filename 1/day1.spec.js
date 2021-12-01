const sonar_sweep = require( "./day1.js" );

describe( "The sonar sweep function", () => {
	it( "counts the number of increases for an empty array", () => {
		expect( sonar_sweep( [] ) ).toEqual( 0 );
	} );
} );
