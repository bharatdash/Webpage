var locators = require("../locators.js");
var headerElements = require("../Pages/headerPage.js");
var loginpage = require("../Pages/loginPage.js");

describe("To check the header elements of the webpage",function(){
	
	it("Opens the website",function(){
		//Opens the web-site
		browser.get("http://amasik.com/demo/angularjs/angular-app/#/login");

	});
	
	//Logs-in the user
	it("Should verify for valid credentials",function(){
		loginpage.verifyForValidCredentials();
		
	});
	
	it("Should verify that all elements are present",function(){
		
		//Verifies all the header elements
		headerElements.isOnlyForElements();
	});	
		
	it("Should verify that search bar is present",function(){
		headerElements.verifesSearchBar();
		
	});
	
	it("Should verify the log-out function",function(){
		
		//Logs-out the user
		headerElements.verifiesLogout();
	});
	
	it("Should verify the link at the bottom" , function(){
		//click amasik.com and verify the link
		headerElements.clickOnAmasik();
	});
	
	
});