class LanternFish {
	constructor( daysUntilReproduction = 8 ) {
		this.daysUntilReproduction = daysUntilReproduction;
	}

	simulate() {
		this.daysUntilReproduction--;
		if( this.daysUntilReproduction === -1 ) {
			this.daysUntilReproduction = 6;
			return new LanternFish();
		}
		return null;
	}

	toString() {
		return this.daysUntilReproduction;
	}
}

module.exports = LanternFish;
