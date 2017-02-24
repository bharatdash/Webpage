//This spec is to verify that we are navigating to the same page we are looking for

this.opensPageAndVerifies = function(){
	
	//Enter the URL of the page
	browser.get("http://amasik.com/demo/angularjs/angular-app/#/login");
	expect(browser.getTitle()).toEqual("AngularJS POC");

};
