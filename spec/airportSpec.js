describe('airport', function() {

	var airport;
	var plane;
	var weatherReporter;

	beforeEach(function(){
		airport = new Airport(weatherReporter);
		plane = jasmine.createSpy('plane');
		weatherReporter = jasmine.createSpyObj('weatherReporter', ['isStormy']);

	});

	describe('land', function() {
		it('does not allow a plane to land when stormy', function() {
			weatherReporter.isStormy.and.returnValue(true);
			expect(airport.land(plane)).toThrowError('Cannot land plane, too stormy!')

		});
	});
});