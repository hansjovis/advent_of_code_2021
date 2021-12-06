const load = require( "../load" );
const LanternFish = require( "./LanternFish" );

function simulate( numberOfDays ) {
	const data = load( "../input.txt" );

	let fish = data.map( number => new LanternFish( number ) );

	for ( let i = 0; i < numberOfDays; i ++ ) {
		const newFish = fish.map( f => f.simulate() ).filter( Boolean );
		fish = fish.concat( newFish );
		console.log( `Day ${i+1}: ${fish.length}`);
	}
}

simulate( 80 );
