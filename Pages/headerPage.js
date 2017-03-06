var locators = require("../locators.js");
var loginpage = require("../Pages/loginPage.js");

//Function to verify all header elements except for logout
this.isOnlyForElements = function(){

	//Pause the browser so that the user can sign in
	browser.sleep(1000);
	
	//Function to verify that heading is present or not
	this.verifiesThatHeadingIsPresent = function(){
		
		expect(locators.heading.getText()).toContain('Framework with Bootstrap');

	};

	//Function to verify that Account is present or not
	this.verifiesAccountsIsPresent = function(){

		//Click on account
		locators.accounts.click();

		//Check if settings option is present
		expect(locators.settings.getText()).toContain("settings");

		//Check if help option is there
		expect(locators.help.getText()).toContain("help");

	};

	//Function to verify that Profile is present or not
	this.verifiesProfileIsPresent = function(){

		//Click on user-icon
		locators.userIcon.click();

		//Check if profile option is there
		expect(locators.profile.getText()).toContain("profile");

	};
};

//Function to verify that Logout is present or not also working or not
this.verifiesLogout = function(){
	
	//click on user icon
	locators.userIcon.click();
	
	//click on logout
	locators.logout.click();
	
	//sleep for 2sec
	browser.sleep(2000);
	
	//Check logout is working or not
	expect(locators.login.getText()).toEqual("Member Login");

};

//Function to verify that amasik.com is present or not and verify the URL after clicking the link
this.clickOnAmasik = function(){
	
	//click on amasik.com
	locators.amasik.click();
	
	//Ignore sync for non angular application
	browser.ignoreSynchronization = true;
	
	//Matches the URL after clicking amasik.com
	expect(browser.getCurrentUrl()).toEqual("http://www.amasik.com/");

};

//Function to verify that Search field is present or not
this.verifesSearchBar = function(){
	
	expect(element(by.xpath("//input[@class='search-query']")).isPresent()).toBe(true);

};