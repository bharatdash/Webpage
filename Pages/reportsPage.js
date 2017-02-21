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

	browser.sleep(1000);

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

this.checksForMouseOverInLineGraph = function(){

	locators.customersGraph.evaluate("data.labels").then(function (span) {
		expect(span).toContain('January', 'February', 'March', 'April', 'May', 'June', 'July');

	});

	locators.customersGraph.evaluate("data.points").then(function (data) {
		expect(data).toContain([ 65, 59, 80, 81, 56, 55, 40 ],
				  [ 28, 48, 40, 19, 86, 27, 90 ]);

	});
};

this.checksForMouseOverInBarGraph = function(){

	locators.ordersGraph.evaluate("data.labels").then(function (span) {
		expect(span).toContain('2006', '2007', '2008', '2009', '2010', '2011', '2012');

	});	

	locators.customersGraph.evaluate("data.points").then(function (data) {
		expect(data).toContain([ 65, 59, 80, 81, 56, 55, 40 ],
				  [ 28, 48, 40, 19, 86, 27, 90 ]);

	});
};
