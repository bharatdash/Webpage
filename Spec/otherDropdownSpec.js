var locators = require("../locators.js");
var loginpage = require("../Pages/loginPage.js");
var others = require("../Pages/otherDropdownPage.js");

describe("To check the add customer tab",function(){

	it("Opens the website",function(){
		//Opens the web-site
		browser.get("http://amasik.com/demo/angularjs/angular-app/#/login");

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