var locators = require("../locators.js");

this.verifiesReportButtonIsWorking = function(){

	//Opens the reports page
	locators.reports.click();

	//Verifies that reports page is open
	expect(browser.getCurrentUrl()).toEqual("http://amasik.com/demo/angularjs/angular-app/#/reports");

};

this.verifiesCustomersIsPresnet = function(){

	//Opens the reports page
	locators.reports.click();

	//Checks for customers tab
	expect(locators.reportsCustomers.getText()).toEqual("Customers");

};

this.verifiesOrdersIsPresent = function(){

	//Opens the reports page
	locators.reports.click();

	browser.sleep(1000);
	
	//Checks for Orders tab
	expect(locators.reportsOrders.getText()).toEqual("Orders");

};

this.opensWebsite = function(){
	
	//Gets the URL
	
}
