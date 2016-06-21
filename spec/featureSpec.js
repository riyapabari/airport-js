describe('Feature Test', function() {

	it('planes can be instructed to land at an airport', function() {
		plane.land(airport)
		expect(airport.planes()).toContain(plane);
	});

});