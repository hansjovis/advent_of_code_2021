const load = require( "./load" );

describe( "The load function", () => {
	it( "loads the input correctly.", () => {
		const data = load( "./day_6/input.txt" );
		expect( data.length ).toBeGreaterThan( 0 );
		data.forEach(
			item => {
				expect( item ).toEqual( expect.any( Number ) );
			}
		)
	} );
} );
