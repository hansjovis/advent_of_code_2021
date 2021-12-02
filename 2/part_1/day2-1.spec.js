const calculate_position = require( "./day2-1.js" );
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
		expect( calculate_position( input ) ).toEqual( { x: 15, depth: 10 } );
	} );
	it( "counts the number of increases", () => {
		const input = fs.readFileSync( "2/input.txt", "utf-8" );

		let data = input.split( "\n" );
		data = data.map( line => {
			let [ direction, steps ] = line.split( " " );
			return [ direction, Number( steps ) ];
		} );

		expect( calculate_position( data ) ).toEqual( {
			"depth": 933,
			"x": 2165
		} );

		console.log( 933 * 2165 );
	} );
} );
