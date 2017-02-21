var locators = require("../locators.js");
var loginpage = require("../Pages/loginPage.js");
var reports = require("../Pages/reportsPage.js");
var headerElements = require("../Pages/headerPage.js");

describe("To test for reports page",function(){

	it("Opens the website",function(){
		//Opens the web-site
		browser.get("http://amasik.com/demo/angularjs/angular-app/#/login");

	});
	//Logs-in the user
	it("Should verify for valid credentials",function(){
		loginpage.verifyForValidCredentials();

	});

	it("Should check for Customers ", function(){

		//Verifies for Customer
		reports.verifiesCustomersIsPresnet();
	});

	it("Should check for Orders",function(){

		//Verifies for Orders
		reports.verifiesOrdersIsPresent();

	});

	it("Checks for header elements",function(){

		//Verifies all the header elements
		headerElements.isOnlyForElements();

	});
	
	it("Checks for mouse over in line graph",function(){
		
		reports.checksForMouseOverInLineGraph();
	
	});
	
	
	it("Checks for mouse over in bar graph",function(){
		
		reports.checksForMouseOverInBarGraph();
		
	});
	
});