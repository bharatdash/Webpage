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
	
		//logout
		headerElements.verifiesLogout();
		browser.sleep(1000);

		//spec for checking the page 
		browser.navigate().back();
		expect(browser.getCurrentUrl()).toEqual("http://amasik.com/demo/angularjs/angular-app/#/login");
	});
});
