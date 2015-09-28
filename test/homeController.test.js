"use strict";

describe('HomeController',function () {
	var homeController,cityServiceMock,scope,locationMock;
	beforeEach(module('weatherApp'));
	beforeEach(module(initMocks));
  	beforeEach(inject(initController));
  	
  	it('Should exist',function(){
  		expect(homeController).to.exist;
  	});
  	it('Default city should be set',function(){
  		expect(homeController.city).to.equal('NewYork, NY');
  	});

  	it('Value of city in cityService should change if homeController.city changes',function(){
  		homeController.city = 'London';
  		scope.$digest(); // In order to invoke the $scope.$watch cycle
  		expect(cityServiceMock.city).to.equal('London');
  	});

  	it('Should chage location on submit',function(){
  		homeController.submit();
  		expect(locationMock.path.calledWith('/forcast')).to.be.true;
  	})

  	function initMocks($provide) {
	    cityServiceMock = {
	      city: 'NewYork, NY'
	    };
	    $provide.factory('cityService', function () {
	      return cityServiceMock;
	    });

	}
	function initController($controller,$rootScope){
		scope = $rootScope.$new();
		locationMock = sinon.stub({path:function(){}});
		homeController = $controller('homeController', {
	      $scope:scope,
	      $location:locationMock
	    });
	}
});

