var locator = require('../locators.js');
var loginpage = require("../Pages/loginPage.js");

describe("To test the test-cases for log-in page",function(){

	beforeEach (function(){
		
		//Opens the web-site before every spec
		browser.get("http://amasik.com/demo/angularjs/angular-app/#/login");
		
	});

	//Test case for empty E-mail id
	it("Should prompt to enter valid E-mail id",function(){
		loginpage.verifyForInvalidEmail();
		
	});

	//Test case for empty password field
	it("Should verify for empty password field",function(){
		loginpage.verfiyForEmptyPassword();
		
	});

	//Test case for both fields empty
	it("Should verify for fields empty",function(){
		loginpage.verifyForBothFieldsEmpty();
		
	});

	//Test case for valid credentials
	it("Should verify for valid credentials",function(){
		loginpage.verifyForValidCredentials();
		
	});

});
