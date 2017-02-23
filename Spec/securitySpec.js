var locator = require('../locators.js');
var loginpage = require("../Pages/loginPage.js");
var headerElements = require("../Pages/headerPage.js");
var openPage = require('../Pages/basePage.js');

describe("check security after logout by pressing back button" , function(){

	it("Opens the app and verifies",function(){
		openPage.opensPageAndVerifies();
	
	});


	it("Should login , logout and check the link after pressing back button" , function(){
		//login into the page with valid credentials
		loginpage.verifyForValidCredentials();
	});


	it("Should logout form the current user profile" , function(){	
	//logout
		headerElements.verifiesLogout();
	});

	it("Should check the link after clicking after clicking back button" , function(){	
		//spec for checking the page 
		browser.navigate().back();
		expect(browser.getCurrentUrl()).toEqual("http://amasik.com/demo/angularjs/angular-app/#/login");
	});
});
