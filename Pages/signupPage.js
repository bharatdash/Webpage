var locator = require('D:/AutomationProject/Protractor Tool/Webpage/locators.js');

//function to click on Dont have an account function
this.clickOnDontHaveAnAccount = function(){
	locator.signUp.click();
};

//Function for verifying signup page
this.verifySignupPage = function(){
	expect(locator.signupPage.getText()).toEqual("Signup for Free Account");
};	

//function for giving blank credentials
this.verifyWithBlankCredentials = function(){
	locator.signupFirstName.sendKeys('');
	locator.signupLastName.sendKeys('');
	locator.signupEmail.sendKeys('');
	locator.signupPassword.sendKeys('');
	locator.signupConfPassword.sendKeys('');
	locator.signupButton.click();
	expect(locator.signupErrorMessage.getText()).toContain('First Name is required', 'Last Name is required', 'Email is required', 'Password is required' );
};

//function for giving Valid credentials

this.verifyWithValidCredentials = function(){
	locator.signupFirstName.sendKeys('Bharat');
	locator.signupLastName.sendKeys('Dash');
	locator.signupEmail.sendKeys('bharatdash8@gmail.com');
	locator.signupPassword.sendKeys('bharat');
	locator.signupConfPassword.sendKeys('bharat');
	locator.signupButton.click();
	expect(locator.login.getText()).toEqual("Member Login");
};

//function to click on login if user already exist

this.existingUser = function(){
	locator.loginToYourAccount.click();
};

//function to verify that only the login page is opening 
this.verifyLoginPage = function(){
	expect(locator.login.getText()).toEqual("Member Login");
};

