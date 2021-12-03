const p1 = require( "../part_1" );

function co2( input ) {
	let bitIndex = 0;
	while ( input.length > 1 ) {
		const { e, f } = p1( input );
		if ( f[ bitIndex ] === "1" ) {
			input = input.filter(
				line => line[ bitIndex ] === "0"
			);
		} else {
			input = input.filter(
				line => line[ bitIndex ] === e[ bitIndex ]
			);
		}

		bitIndex ++;
	}

	return input[ 0 ];
}

module.exports = co2;
