function Airport(weatherReporter) {
	this._weatherReporter = typeof weatherReporter !== 'undefined' ? weatherReporter : new WeatherReporter();
}

Airport.prototype.land = function(plane) {
	if(this._weatherReporter.isStormy()) {
		throw new Error('Cannot land plane, too stormy!');
	}
};