var locator = require('../locators.js');
var loginpage = require("../Pages/loginPage.js");
var headerElements = require("../Pages/headerPage.js");

describe("check security after logout by pressing back button" , function(){
	browser.get("http://amasik.com/demo/angularjs/angular-app/#/login");

	it("Should login , logout and check the link after pressing back button" , function(){
		//login into the page with valid credentials
		loginpage.verifyForValidCredentials();

		//logout
		headerElements.verifiesLogout();

		//spec for checking the page 
		//it("Should not go to the home page when back button is pressed after logout " , function(){
		browser.navigate().back();
		expect(browser.getCurrentUrl()).toEqual("http://amasik.com/demo/angularjs/angular-app/#/login");
	});
});
