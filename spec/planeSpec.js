'use strict';

describe('Plane', function() {

	var plane;
	var airport;

	beforeEach(function() {
		plane = new Plane();
		airport = jasmine.createSpyObj('airport',['clearForLanding', 'clearForTakeOff']);
	})

	describe('land', function() {
		it('can land at an airport', function() {
			plane.land(airport);
			expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
		});
	});
	describe('takeOff', function() {
		it('can takeoff from an airport', function() {
			plane.land(airport);
			plane.takeOff();
			expect(airport.clearForTakeOff).toHaveBeenCalled();
		});
	});

});