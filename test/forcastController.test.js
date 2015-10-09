"use strict"

describe('forcastController', function() {
	var forcastController,
		cityServiceMock,
		scope,
		locationMock,
		weatherServiceMock,
		routeParamsMock;

	beforeEach(module('weatherApp'));
	beforeEach(module(initMocks));
  	beforeEach(inject(initController)); // Inject function is created by angular mocks

  	it('Should exist',function () {
  		expect(forcastController).to.exist;
  	});

    describe('Checking default params',function () {
      beforeEach(inject(function($controller){
        forcastController = $controller('forcastController', {
          $scope:scope,
          $location:locationMock,
        });  
      }));

      it('Default number of days should be set if route params is empty', function(){
        expect(forcastController.days).to.equal(2);
      });

      it('Should call weatherdays with default params', function(){
        expect(weatherServiceMock.getWeather.called).to.be.true;
        expect(weatherServiceMock.getWeather.calledWith('NewYork, NY',2));
      });
    });

    it('Days should be valid number',function () {
        assert.isNumber(forcastController.days);
        expect(forcastController.days).to.equal(5);
    });

    it('Should contain city name same as that of cityService',function () {
        expect(forcastController.city).to.exist;
        expect(forcastController.city).to.equal('NewYork, NY');
    });

    it('weatherService should be atLeast called once',function () {
        expect(weatherServiceMock.getWeather.called).to.be.true;
        expect(weatherServiceMock.getWeather.calledWith('NewYork, NY',5))
    });

    it('Should convert milli seconds to date',function(){
        expect(forcastController.convertToDate).to.exist;
        var date = new Date(1443182050668 * 1000);
        expect(forcastController.convertToDate(1443182050668).toString()).to.equal(date.toString());
    });

  	function initMocks($provide) {
		cityServiceMock = {
	      city: 'NewYork, NY'
	    };
  		weatherServiceMock = sinon.stub({
            getWeather:function(){}
        })
	 	$provide.factory('cityService', function () { // to Provide services mock using $provide function
	      return cityServiceMock;
	    });
	    $provide.factory('weatherService', function () {
	      return weatherServiceMock;
	    });
  	}
  	
  	function initController($rootScope,$controller){
  		scope = $rootScope.$new();
  		locationMock = sinon.stub({path:function(){}});
  		routeParamsMock = {"days":5};
  		forcastController = $controller('forcastController', {
  			$scope:scope,
  			$location:locationMock,
  			$routeParams:routeParamsMock
  		})
  	}
});