function sonar_sweep( data ) {
	if ( data.length === 0 ) {
		return 0;
	}

	if ( data[ 1 ] > data[ 0 ] ) {
		return 1;
	}

	return 0;
}

module.exports = sonar_sweep;
