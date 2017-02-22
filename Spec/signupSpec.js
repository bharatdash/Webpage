var locator = require('../locators.js');
var signupPage = require('../Pages/signupPage.js');

describe("Create a new account" , function(){

	it("Opens the website",function(){
		//Opens the web-site
		browser.get("http://amasik.com/demo/angularjs/angular-app/#/login");
		
	});

	//1.It block to click on Don't have an account?
	it("should navigate to the desired page" , function(){

		//click on Don't have an account?
		signupPage.clickOnDontHaveAnAccount();

		//Sleep browser for 2 seconds
		browser.sleep(2000);
	
	});

	//2.it block to verify the signup page 
	it("Should verify the signup page ", function(){
		
		//following line verifies the page by form header
		signupPage.verifySignupPage();
	
	});	

	//3.When all the fields are left as blank
	it("Should not register the user" , function(){
		
		signupPage.verifyWithBlankCredentials();

	});
	
	it("Should verify labels",function(){
		
		//It verifies the label of the respective text fields
		signupPage.verifyForLabels();
		
	});
	
	//4.Check when valid data are given
	it("Should register the user " , function(){
		
		signupPage.verifyWithValidCredentials();
	
	});

	browser.get("http://amasik.com/demo/angularjs/angular-app/#/signup");

	//5.click to Login if you already have an account
	it("Should navigate the user to login page" , function(){
	
		signupPage.existingUser();
	
	});

	//6.Verify that after clicking on 'Login to your account' it is navigating to the login page
	it("Should navigate to the login page" , function(){
		
		signupPage.verifyLoginPage();
	
	});
});
