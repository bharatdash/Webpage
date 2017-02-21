var locator = require('../locators.js');

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
	
	browser.sleep(1000);
	expect(locator.dashboard.getText()).toEqual("Dashboard");
};

this.verifyTheColorOfErrorMessage = function(){

	//clears the email-id field
	locator.userName.clear();

	expect(locator.errorMessage.getCssValue("color")).toEqual("rgba(255, 0, 0, 1)");

};

this.verifyTheLabelsOfTextField = function(){
	//verifies the label of email input box
	locator.uName.getAttribute('placeholder').then(function(element){
		expect(element).toEqual("Email");
	});
};


this.verifyTheLabelsOfPasswordField = function(){
	//Verifies the label of password box
	locator.pwd.getAttribute('placeholder').then(function(element){
		expect(element).toEqual("Password");
	});
};
