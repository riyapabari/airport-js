function Airport(weatherReporter) {
	this._weatherReporter = new WeatherReporter();
};

Airport.prototype.land = function(plane) {
	if(weatherReporter.isStormy()) {
		throw new Error('Cannot land plane, too stormy!')
	};
};