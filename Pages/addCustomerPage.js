var locator = require("../locators.js");
var loginpage = require("../Pages/loginPage.js");

//Function to click on add customer tab and 
this.verifyAddCustomer = function(){

	//click on add customer
	locator.addcustomer.click();

	//verifies addCustomer page title
	expect(browser.getCurrentUrl()).toEqual("http://amasik.com/demo/angularjs/angular-app/#/addCustomer");

};

//Function to verify the label names inside input box "First name" 
this.verifyTheLabelsOfFnameField = function(){

	//Verifies the label of First name box
	locator.add_firstname.getAttribute('placeholder').then(function(element){

		expect(element).toEqual("First Name");

	});

};

//Function to verify the label names inside input box "Last name"
this.verifyTheLabelsOfLnameField = function(){

	//Verifies the label of password box
	locator.add_lastname.getAttribute('placeholder').then(function(element){

		expect(element).toEqual("Last Name");

	});

};

//Function to verify the label names inside input box "Email"
this.verifyTheLabelsOfEmailField = function(){

	//Verifies the label of password box
	locator.add_email.getAttribute('placeholder').then(function(element){

		expect(element).toEqual("Email");

	});

};

//Function to verify the label names inside input box "Phone Number"
this.verifyTheLabelsOfPhoneField = function(){

	//Verifies the label of password box
	locator.add_phone.getAttribute('placeholder').then(function(element){

		expect(element).toEqual("Phone");

	});

};

//Function to verify the label names inside input box "Bio"
this.verifyTheLabelsOfBioField = function(){

	//Verifies the label of password box
	locator.add_bio.getAttribute('placeholder').then(function(element){

		expect(element).toEqual("Bio");

	});

};

//Function to click on SAVE button without any Entries
this.forMandatoryFields = function(){

	//Opens add customer tab
	locator.addcustomer.click();

	//Finds all the mandatory fields 
	locator.save_button.click();
	expect(locator.error_message.getText()).toContain('First Name is required', 'Last Name is required', 'Email is required', 'Phone is required', 'Country is required');

	//Check the color of the message
	expect(locator.error_message.getCssValue('color')).toContain("rgba(255, 0, 0, 1)");

};

//Function to verify the Email
this.verifiesForEmail = function(){

	//Opens add customer tab
	locator.addcustomer.click();

	//Fills all the fields
	locator.add_firstname.sendKeys("Abdul");
	locator.add_lastname.sendKeys("Kalam");
	locator.add_email.sendKeys("123");
	locator.add_phone.sendKeys("123456789");
	locator.select_country.click();
	locator.ind.click();

	//Clicks on save Button
	locator.save_button.click();

	//Verifies for Error Message
	expect(locator.error_message.getText()).toContain('Invalid email address');

};

//Function to verify the cancel button in the add customer tab
this.verifiesCancelButtonRedirectsBack = function(){

	//Opens add customer tab
	locator.addcustomer.click();

	//Clicks the cancel button
	locator.cancel_button.click();
	expect(browser.getCurrentUrl()).toEqual("http://amasik.com/demo/angularjs/angular-app/#/customers");

};