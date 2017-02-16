var locators = require("../locators.js");
var loginpage = require("../Pages/loginPage.js");

this.forMandatoryFields = function(){

	//Opens add customer tab
	locators.addcustomer.click();

	//Finds all the mandatory fields
	locators.save_button.click();
	expect(locators.error_message.getText()).toContain('First Name is required', 'Last Name is required', 'Email is required', 'Phone is required', 'Country is required');

}

this.verifiesForEmail = function(){

	//Opens add customer tab
	locators.addcustomer.click();

	//Fills all the fields
	locators.add_firstname.sendKeys("Abdul");
	locators.add_lastname.sendKeys("Kalam");
	locators.add_email.sendKeys("123");
	locators.add_phone.sendKeys("123456789");
	locators.select_country.click();
	locators.ind.click();

	//Clicks on save Button
	locators.save_button.click();

	//Verifies for Error Message
	expect(locators.error_message.getText()).toContain('Invalid email address');

}

this.verifiesCancelButtonRedirectsBack = function(){

	//Opens add customer tab
	locators.addcustomer.click();

	//Fills all the fields
	locators.add_firstname.sendKeys("Abdul");
	locators.add_lastname.sendKeys("Kalam");

	//Clicks the cancel button
	locators.cancel_button.click();
	expect(browser.getCurrentUrl()).toEqual("http://amasik.com/demo/angularjs/angular-app/#/customers")

}