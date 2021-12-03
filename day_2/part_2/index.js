function calculate_position( input ) {
	let position = { x: 0, depth: 0 };
	let aim = 0;

	input.forEach(
		command => {
			const [ direction, steps ] = command;
			switch ( direction ) {
				case "forward": {
					position.x += steps;
					position.depth += steps * aim;
					break;
				}
				case "up": {
					aim -= steps;
					break;
				}
				case "down": {
					aim += steps;
					break;
				}
				default: {}
			}
		}
	);

	return position;
}

module.exports = calculate_position;
