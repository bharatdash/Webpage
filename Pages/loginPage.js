var locator = require('../locators.js');

//Function to verify for invalid Email
this.verifyForInvalidEmail = function(){

	//Enters blank E-mail id
	locator.userName.sendKeys("123");

	//Password is already entered

	//click on sign-in button
	locator.signInButton.click();

	//Verifies that user is prompted to enter Valid E-mail
	expect(locator.errorMessage).not.toEqual('welcome');

};

//Function to verify for Empty Password
this.verfiyForEmptyPassword = function(){

	//Clears the password field
	locator.password.clear();

	//Click on sign-in button
	locator.signInButton.click();

	//Verifies user is not logged in
	expect(locator.errorMessage).not.toEqual('welcome');

};

//Function to verify for Empty Email
this.verifyForEmptyEmail = function(){

	//clears the email-id field
	locator.userName.clear();

	//Click on sign-in button
	locator.signInButton.click();

	//Verifies user is not logged in
	expect(locator.errorMessage).not.toEqual('welcome');

};

//Function to verify for Empty Email and Password (both)
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

//Function to verify for valid credential
this.verifyForValidCredentials = function(){

	//E-mail id and password are already entered

	//Click on sign-in button
	locator.signInButton.click();
	
	browser.sleep(1000);
	expect(locator.dashboard.getText()).toEqual("Dashboard");
	
};

//Function to verify the color of error message 
this.verifyTheColorOfErrorMessage = function(){

	//clears the email-id field
	locator.userName.clear();

	expect(locator.errorMessage.getCssValue("color")).toEqual("rgba(255, 0, 0, 1)");

};

//Function to verify Label of Input field Email
this.verifyTheLabelsOfTextField = function(){
	
	//verifies the label of email input box
	locator.uName.getAttribute('placeholder').then(function(element){
		
		expect(element).toEqual("Email");
		
	});
	
};

//Function to verify Label of Input field Password
this.verifyTheLabelsOfPasswordField = function(){
	
	//Verifies the label of password box
	locator.pwd.getAttribute('placeholder').then(function(element){
		
		expect(element).toEqual("Password");
		
	});
	
};