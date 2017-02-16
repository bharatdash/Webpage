var locators = require("../locators.js");
var headerElements = require("../Pages/headerPage.js");
var loginpage = require("../Pages/loginPage.js");
var addCustomerPage = require("../Pages/addCustomerPage.js");

describe("To check the add customer tab",function(){

	//Opens the web-site
	browser.get("http://amasik.com/demo/angularjs/angular-app/#/login");

	//Logs-in the user
	it("Should verify for valid credentials",function(){
		loginpage.verifyForValidCredentials();

	});

	it("Checks for the mandatory fields",function(){

		//Check for all the mandatory fields
		addCustomerPage.forMandatoryFields();

	});

	it("Checks for valid E-mail id",function(){

		//Checks for valid E-mail
		addCustomerPage.verifiesForEmail();

	});

	it("Checks for cancel button",function(){

		//Checks for cancel button
		addCustomerPage.verifiesCancelButtonRedirectsBack();

	});

	it("Checks for header elements",function(){

		//Verifies all the header elements
		headerElements.isOnlyForElements();

	});
});	
