var locators = require("../locators.js");
var loginpage = require("../Pages/loginPage.js");
var others = require("../Pages/otherDropdownPage.js");
var openPage = require('../Pages/basePage.js');

describe("To check the add customer tab",function(){

	it("Opens the app and verifies",function(){
		openPage.opensPageAndVerifies();
	
	});


	//Logs-in the user
	it("Should verify for valid credentials",function(){
		loginpage.verifyForValidCredentials();

	});

	it("Should check every option in others dropd-down menu",function(){
		
		//Matches all options
		others.verifiesAllOptions();
	});
});