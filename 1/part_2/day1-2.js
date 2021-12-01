function sonar_sweep( data ) {
	if ( data.length === 0 ) {
		return 0;
	}

	let increases = 0;
	let prevSum = Number.MAX_VALUE;

	for ( let i = 0; i < data.length - 2; i ++ ) {
		const sum = data.slice( i, i + 3 ).reduce( ( val, aggr ) => aggr + val );
		if ( sum > prevSum ) {
			increases += 1;
		}
		prevSum = sum;
	}

	return increases;
}

module.exports = sonar_sweep;
