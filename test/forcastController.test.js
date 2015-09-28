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
  	beforeEach(inject(initController));

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
        expect(forcastController.convertToDate(1443182050668).toString()).to.equal('Tue Aug 15 47702 04:27:48 GMT+0530 (IST)');
    });

  	function initMocks($provide) {
		cityServiceMock = {
	      city: 'NewYork, NY'
	    };
  		weatherServiceMock = sinon.stub({
            getWeather:function(){}
        })
	 	$provide.factory('cityService', function () {
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