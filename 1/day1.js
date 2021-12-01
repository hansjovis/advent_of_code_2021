function sonar_sweep( data ) {
	if ( data.length === 0 ) {
		return 0;
	}

	let increases = 0;
	for ( let i = 0; i < data.length - 1; i ++ ) {
		if ( data[ i + 1 ] > data[ i ] ) {
			increases += 1;
		}
	}

	return increases;
}

module.exports = sonar_sweep;
