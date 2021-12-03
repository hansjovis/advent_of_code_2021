const calculate_position = require( "." );
const fs = require( "fs" );

describe( "The calculate_position function", () => {
	it( "gives back the starting position, given an empty input.", () => {
		const input = [
			[ "forward", 0 ],
		];
		expect( calculate_position( input ) ).toEqual( { x: 0, depth: 0 } );
	} );
	it( "gives back a position, given an input.", () => {
		const input = [
			[ "forward", 5 ],
			[ "down", 5 ],
			[ "forward", 8 ],
			[ "up", 3 ],
			[ "down", 8 ],
			[ "forward", 2 ],
		];
		expect( calculate_position( input ) ).toEqual( { x: 15, depth: 60 } );
	} );
	it( "gives back a position, given the advent calendar input.", () => {
		const input = fs.readFileSync( "day_2/input.txt", "utf-8" );

		let data = input.split( "\n" );
		data = data.map( line => {
			let [ direction, steps ] = line.split( " " );
			return [ direction, Number( steps ) ];
		} );

		const result = calculate_position( data );

		expect( result ).toEqual( {
			"depth": 738712,
			"x": 2165
		} );

		console.log( result.depth * result.x );
	} );
} );
