var locator = require('../locators.js');
var loginpage = require("../Pages/loginPage.js");
var headerElements = require("../Pages/headerPage.js");
var openPage = require('../Pages/basePage.js');

//Test Suit for security function
describe("check security after logout by pressing back button" , function(){

	it("Opens the app and verifies",function(){

		//Open the web page and verify
		openPage.opensPageAndVerifies();
	
	});

	//login into the page with valid credentials
	it("Should login , logout and check the link after pressing back button" , function(){

		loginpage.verifyForValidCredentials();
	});

	//logout from the current user
	it("Should logout form the current user profile" , function(){	

		headerElements.verifiesLogout();
		
	});

	//spec for checking the page  after clicking back button
	it("Should check the link after clicking back button" , function(){	
	
		browser.navigate().back();
		expect(browser.getCurrentUrl()).toEqual("http://amasik.com/demo/angularjs/angular-app/#/login");
		
	});
	
});