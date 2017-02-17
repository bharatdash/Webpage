var locators = require("../locators.js");
var loginpage = require("../Pages/loginPage.js");


this.isOnlyForElements = function(){

this.verifiesThatHeadingIsPresent = function(){
	expect(locators.heading.getText()).toContain('Framework with Bootstrap');
	
};

this.verifiesAccountsIsPresent = function(){
	
	//Click on account
	locators.accounts.click();
	
	//Check if settings option is present
	expect(locators.settings.getText()).toContain("settings");
	
	//Check if help option is there
	expect(locators.help.getText()).toContain("help");
	
};

this.verifiesProfileIsPresent = function(){
	
	//Click on user-icon
	locators.userIcon.click();
	
	//Check if profile option is there
	expect(locators.profile.getText()).toContain("profile");
	
};


this.verifiesLogout = function(){
	locators.userIcon.click();
	locators.logout.click();
	browser.sleep(2000)
	expect(locators.login.getText()).toEqual("Member Login");
	
};

this.clickOnAmasik = function(){
	locators.amasik.click();
	browser.ignoreSynchronization = true;
	expect(browser.getCurrentUrl()).toEqual("http://www.amasik.com/");
};

}

















