var locators = require("D:/AutomationProject/WebpageFinal/locators.js");

this.verifyForInvalidEmail = function(){

	//Enters blank E-mail id
	locators.userName.sendKeys("123");

	//Password is already entered

	//click on sign-in button
	locators.signInButton.click();

	//Verifies that user is prompted to enter Valid E-mail
	expect(locators.errorMessage).not.toEqual('welcome');

};

this.verfiyForEmptyPassword = function(){
	
	//Clears the password field
	locators.password.clear();
	
	//Click on sign-in button
	locators.signInButton.click();
	
	//Verifies user is not logged in
	expect(locators.errorMessage).not.toEqual('welcome');
	
};

this.verifyForEmptyEmail = function(){
	
	//clears the email-id field
	locators.userName.clear();
	
	//Click on sign-in button
	locators.signInButton.click();
	
	//Verifies user is not logged in
	expect(locators.errorMessage).not.toEqual('welcome');
	
};

this.verifyForBothFieldsEmpty = function(){
	//clears the email-id field
	locators.userName.clear();
	
	//Clears the password field
	locators.password.clear();
	
	//Click on sign-in button
	locators.signInButton.click();
	
	//Verifies user is not logged in
	expect(locators.errorMessage).not.toEqual('welcome');
};

this.verifyForValidCredentials = function(){

	//E-mail id and password are already entered
	
	//Click on sign-in button
	locators.signInButton.click();
	
	expect(locators.dashboard.getText()).toEqual("Dashboard");
};
