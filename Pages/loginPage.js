var locator = require('D:/AutomationProject/Protractor Tool/Webpage/locators.js');

this.verifyForInvalidEmail = function(){

	//Enters blank E-mail id
	locator.userName.sendKeys("123");

	//Password is already entered

	//click on sign-in button
	locator.signInButton.click();

	//Verifies that user is prompted to enter Valid E-mail
	expect(locator.errorMessage).not.toEqual('welcome');

};

this.verfiyForEmptyPassword = function(){
	
	//Clears the password field
	locator.password.clear();
	
	//Click on sign-in button
	locator.signInButton.click();
	
	//Verifies user is not logged in
	expect(locator.errorMessage).not.toEqual('welcome');
	
};

this.verifyForEmptyEmail = function(){
	
	//clears the email-id field
	locator.userName.clear();
	
	//Click on sign-in button
	locator.signInButton.click();
	
	//Verifies user is not logged in
	expect(locator.errorMessage).not.toEqual('welcome');
	
};

this.verifyForBothFieldsEmpty = function(){
	//clears the email-id field
	locator.userName.clear();
	
	//Clears the password field
	locator.password.clear();
	
	//Click on sign-in button
	locator.signInButton.click();
	
	//Verifies user is not logged in
	expect(locator.errorMessage).not.toEqual('welcome');
};

this.verifyForValidCredentials = function(){

	//E-mail id and password are already entered
	
	//Click on sign-in button
	locator.signInButton.click();
	
	expect(locator.dashboard.getText()).toEqual("Dashboard");
};
