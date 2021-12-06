const fs = require( "fs" );

const Board = require( "./Board.js" );

function parseBoard( board ) {
	const rows = board.split( "\n" ).filter( Boolean );
	const numbers = rows.map( row => row.trim().split( /\s+/ ).map( Number ) );
	return new Board( numbers );
}

function parseDrawnNumbers( line ) {
	return line.split( "," ).map( Number );
}

function load( filePath ) {
	const input = fs.readFileSync( filePath, "utf-8" );
	const rows = input.split( "\n\n" );

	const drawnNumbers = parseDrawnNumbers( rows.shift() );
	const boards = rows.map( parseBoard );

	return { drawnNumbers, boards };
}

module.exports = load;
