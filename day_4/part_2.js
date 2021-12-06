const load = require( "./load" );

const { drawnNumbers, boards } = load( "input.txt" );

let last = {
	draws: 0
};

for ( const board of boards ) {
	let i = 0;
	for ( const drawnNumber of drawnNumbers ) {
		i ++;
		const bingo = board.mark( drawnNumber );
		if ( bingo ) {
			if ( i > last.draws ) {
				last.draws = i;
				last.board = board;
				last.number = drawnNumber;
			}
			break;
		}
	}
}

console.log( last.number, last.board.horizontal );
