function gamma( input ) {
	let result = new Array( input[ 0 ].length ).fill( 0 );

	input.forEach(
		line => {
			line.split( "" ).forEach(
				( n, i ) => {
					result[ i ] += Number( n );
				}
			);
		}
	);

	const z = result.map( n => Number( n > (
		input.length / 2
	) ) );

	const g = z.join("");

	const y = result.map( n => Number( n < (
		input.length / 2
	) ) );

	const e = y.join("");

	const x = result.map( n => Number( n === (
		input.length / 2
	) ) );

	const f = x.join("");

	return { g, e, f };
}

module.exports = gamma;
