var locators = require("../locators.js");
var headerElements = require("../Pages/headerPage.js");
var loginpage = require("../Pages/loginPage.js");
var addCustomerPage = require("../Pages/addCustomerPage.js");
var openPage = require('../Pages/basePage.js');

describe("To check the add customer tab",function(){

	//Open page and verify
	it("Opens the app and verifies",function(){
		
		openPage.opensPageAndVerifies();
	
	});

	//Logs-in the user
	it("Should verify for valid credentials",function(){
		
		loginpage.verifyForValidCredentials();

	});
	
	//Test case to click on add customer and verify the page 
	it("Should navigate to add customer page and validate the page" , function(){
		
		addCustomerPage.verifyaddCustomer();
		
	});
	
	//Test case for checking the default label name of First name input field
	it("Should verify the default label name of First name input field",function(){
		
		addCustomerPage.verifyTheLabelsOfFnameField();
		
	});
	
	//Test case for checking the default label name of last name input field
	it("Should verify the default label name of last name input field",function(){
		
		addCustomerPage.verifyTheLabelsOfLnameField();
		
	});
	
	//Test case for checking the default label names of Email field
	it("Should verify the default label names of Email field",function(){
		
		addCustomerPage.verifyTheLabelsOfEmailField();
		
	});
	
	//Test case for checking the default label name of Phone number input field
	it("Should verify the default label text in password Field",function(){
		
		addCustomerPage.verifyTheLabelsOfPhoneField();
		
	});
	
	//Test case for checking the default label name of bio field
	it("Should verify the default label text in password Field",function(){
		
		addCustomerPage.verifyTheLabelsOfBioField();
		
	});

	//Test case for checking the mandatory fields
	it("Checks for the mandatory fields",function(){

		addCustomerPage.forMandatoryFields();

	});

	//Test case to check for valid email id
	it("Checks for valid E-mail id",function(){

		addCustomerPage.verifiesForEmail();

	});

	//Checks for cancel button
	it("Checks for cancel button",function(){

		addCustomerPage.verifiesCancelButtonRedirectsBack();

	});

	//Verifies all the header elements
	it("Checks for header elements",function(){

		headerElements.isOnlyForElements();

	});
	
});	
