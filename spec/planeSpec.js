describe('Plane', function() {

	var plane;

	beforeEach(function() {
		plane = new Plane();
	})

	describe('land', function() {
		it('lands a plane', function() {
			expect(plane.land).toBeDefined();
		});
	});

});