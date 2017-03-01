var loginpage = require("../Pages/loginPage.js");
var others = require("../Pages/otherDropdownPage.js");
var openPage = require('../Pages/basePage.js');

//Test Suit for Add customer
describe("To check the add customer tab",function(){

	//Open the web page and verify
	it("Opens the app and verifies",function(){
		
		openPage.opensPageAndVerifies();
	
	});

	//Logs-in the user
	it("Should verify for valid credentials",function(){
		
		loginpage.verifyForValidCredentials();

	});

	//check every option in others drop down menu
	it("Should check every option in others dropd-down menu",function(){
		
		//Matches all options
		others.verifiesAllOptions();
		
	});
	
});