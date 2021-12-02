function calculate_position( input ) {
	let position = { x: 0, depth: 0 };

	input.forEach(
		command => {
			const [ direction, steps ] = command;
			switch ( direction ) {
				case "forward": {
					position.x += steps;
					break;
				}
				case "up": {
					position.depth -= steps;
					break;
				}
				case "down": {
					position.depth += steps;
					break;
				}
				default: {}
			}
		}
	);

	return position;
}

module.exports = calculate_position;
