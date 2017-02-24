var locators = require("../locators.js");

//Function to verify the report button
this.verifiesReportButtonIsWorking = function(){

	//Opens the reports page
	locators.reports.click();

	//Verifies that reports page is open
	expect(browser.getCurrentUrl()).toEqual("http://amasik.com/demo/angularjs/angular-app/#/reports");

};

//Function to verify the customer is present or not
this.verifiesCustomersIsPresent = function(){

	//Opens the reports page
	locators.reports.click();

	browser.sleep(1000);

	//Checks for customers tab
	expect(locators.reportsCustomers.getText()).toEqual("Customers");

};

//Function to verify the orders graph is present or not
this.verifiesOrdersIsPresent = function(){

	//Opens the reports page
	locators.reports.click();

	browser.sleep(1000);

	//Checks for Orders tab
	expect(locators.reportsOrders.getText()).toEqual("Orders");

};

//Function to verify data points on line graph
this.checksForMouseOverInLineGraph = function(){

	locators.customersGraph.evaluate("data.labels").then(function (span) {
		expect(span).toContain('January', 'February', 'March', 'April', 'May', 'June', 'July');

	});

	locators.customersGraph.evaluate("data.points").then(function (data) {
		expect(data).toContain([ 65, 59, 80, 81, 56, 55, 40 ],
				  [ 28, 48, 40, 19, 86, 27, 90 ]);

	});
	
};

//Function to verify data points on Bar graph
this.checksForMouseOverInBarGraph = function(){

	locators.ordersGraph.evaluate("data.labels").then(function (span) {
		expect(span).toContain('2006', '2007', '2008', '2009', '2010', '2011', '2012');

	});	

	locators.customersGraph.evaluate("data.points").then(function (data) {
		expect(data).toContain([ 65, 59, 80, 81, 56, 55, 40 ],
				  [ 28, 48, 40, 19, 86, 27, 90 ]);

	});
	
};
