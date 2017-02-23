var locator = require('../locators.js');

//function to click on Dont have an account function
this.clickOnDontHaveAnAccount = function(){
	locator.signUp.click();
};

//Function for verifying signup page
this.verifySignupPage = function(){
	browser.sleep(2000);
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
	expect(locator.signupErrorMessage.getCssValue('color')).toContain("rgba(255, 0, 0, 1)");
};

//function for giving Valid credentials

this.verifyWithValidCredentials = function(){
	locator.signupFirstName.sendKeys('Bharat');
	locator.signupLastName.sendKeys('Dash');
	locator.signupEmail.sendKeys('bharatdash8@gmail.com');
	locator.signupPassword.sendKeys('bharat');
	locator.signupConfPassword.sendKeys('bharat');
	locator.signupButton.click();

	//Sleep browser for 2 seconds
	browser.sleep(2000);

	expect(locator.login.getText()).toEqual("Member Login");

};

//function to click on login if user already exist

this.existingUser = function(){
	locator.signUp.click();
	locator.loginToYourAccount.click();
};

//function to verify that only the login page is opening 
this.verifyLoginPage = function(){
	browser.sleep(1000);
		expect(locator.login.getText()).toEqual("Member Login");
};

this.verifyForLabels = function(){
	locator.signUp.click();

	locator.signupFirstName.getAttribute('placeholder').then(function(element){
		expect(element).toEqual("First Name");
	});

	locator.signupLastName.getAttribute('placeholder').then(function(element){
		expect(element).toEqual("Last Name");
	});

	locator.signupEmail.getAttribute('placeholder').then(function(element){
		expect(element).toEqual("Email");
	});

	locator.signupPassword.getAttribute('placeholder').then(function(element){
		expect(element).toEqual("Password");
	});

	locator.signupConfPassword.getAttribute('placeholder').then(function(element){
		expect(element).toEqual("Confirm Password");
	});

};
