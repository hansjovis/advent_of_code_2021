class Board {
	/**
	 * Constructs a board.
	 *
	 * @param {number[][]} board
	 */
	constructor( board ) {
		this.horizontal = board.map( row => row.map( number => (
			{ number, marked: false }
		) ) );
		this.vertical = this.transpose( this.horizontal );
	}

	transpose( matrix ) {
		return matrix[ 0 ].map( ( _, colIndex ) => matrix.map( row => row[ colIndex ] ) );
	}

	markBoard( board, chosenNumber ) {
		return board.map(
			row => row.map(
				( { number, marked } ) => (
					{ number, marked: marked || chosenNumber === number }
				)
			)
		);
	}

	mark( chosenNumber ) {
		this.horizontal = this.markBoard( this.horizontal, chosenNumber );
		this.vertical = this.markBoard( this.vertical, chosenNumber );
		return this.check();
	}

	checkBoard( board ) {
		return board.some( row => row.every( ( { _, marked } ) => marked === true ) );
	}

	check() {
		const horizontal = this.checkBoard( this.horizontal );
		const vertical = this.checkBoard( this.vertical );
		return horizontal || vertical;
	}
}

module.exports = Board;
