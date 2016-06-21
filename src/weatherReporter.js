'use strict';

function WeatherReporter() {
	this._CHANCE_OF_STORMY = 0.5
};

WeatherReporter.prototype.isStormy = function() {
	return (Math.random() > this._CHANCE_OF_STORMY);
};