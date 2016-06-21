'use strict';

describe('WeatherReporter', function() {

	describe('isStormy', function() {

		var weatherReporter;

		beforeEach(function() {
		weatherReporter = new WeatherReporter();
		});

		it('can be non-stormy', function() {
			spyOn(Math, 'random').and.returnValue(0);
			expect(weatherReporter.isStormy()).toBe(false);
		});
		it('can be stormy', function() {
			spyOn(Math, 'random').and.returnValue(1);
			expect(weatherReporter.isStormy()).toBe(true);
		});
	});

});