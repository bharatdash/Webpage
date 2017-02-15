//This spec is to verify that we are navigating to the same page we are looking for

describe("Let us test the amasik page" , function(){
	it("should navigate to the desired page" , function(){
		//Enter the URL of the page
		browser.get("http://amasik.com/demo/angularjs/angular-app/#/login");
		expect(browser.getTitle()).toEqual("AngularJS POC");
	});
});