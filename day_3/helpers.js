function toInt( binary ) {
	return parseInt( binary, 2 );
}

function toBinaryString( decimal ) {
	return (
		decimal >>> 0
	).toString( 2 );
}

module.exports = {
	toInt,
	toBinaryString
};
