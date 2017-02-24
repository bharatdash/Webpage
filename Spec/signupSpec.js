var locator = require('../locators.js');
var signupPage = require('../Pages/signupPage.js');
var openPage = require('../Pages/basePage.js');

//Test Suit for Signup
describe("Create a new account" , function(){
	
	//It block to open the page and verify the page
	it("Opens the app and verifies",function(){
		
		openPage.opensPageAndVerifies();

	});

	//It block to click on Don't have an account?
	it("should navigate to the desired page" , function(){

		signupPage.clickOnDontHaveAnAccount();

	});

	//it block to verify the signup page 
	it("Should verify the signup page ", function(){

		signupPage.verifySignupPage();

	});	

	//When all the fields are left as blank
	it("Should not register the user" , function(){

		signupPage.verifyWithBlankCredentials();

	});

	//Verifies the label of the respective text fields
	it("Should verify labels",function(){

		signupPage.verifyForLabels();

	});

	//Check when valid data are given
	it("Should register the user " , function(){

		signupPage.verifyWithValidCredentials();

	});

	//click to Login if you already have an account
	it("Should navigate the user to login page" , function(){

		signupPage.existingUser();

	});

	//Verify that after clicking on 'Login to your account' it is navigating to the login page
	it("Should navigate to the login page" , function(){

		signupPage.verifyLoginPage();

	});
});