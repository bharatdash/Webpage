var locators = require("../locators.js");
var loginpage = require("../Pages/loginPage.js");
var reports = require("../Pages/reportsPage.js");
var headerElements = require("../Pages/headerPage.js");
var openPage = require('../Pages/basePage.js');

//Test Suit for Reports 
describe("To test for reports page",function(){

	//Open the web page and verify
	it("Opens the app and verifies",function(){

		openPage.opensPageAndVerifies();

	});

	//Logs-in the user
	it("Should verify for valid credentials",function(){

		loginpage.verifyForValidCredentials();

	});

	//Verifies for Customer
	it("Should check for Customers ", function(){

		reports.verifiesCustomersIsPresent();

	});

	//Verifies for Orders
	it("Should check for Orders",function(){

		reports.verifiesOrdersIsPresent();

	});

	//Verifies all the header elements
	it("Checks for header elements",function(){

		headerElements.isOnlyForElements();

	});

	//Checks for mouse over in line graph
	it("Checks for mouse over in line graph",function(){

		reports.checksForMouseOverInLineGraph();

	});

	//Checks for mouse over in bar graph
	it("Checks for mouse over in bar graph",function(){

		reports.checksForMouseOverInBarGraph();

	});

});