var locators = require("../locators.js");

this.verifiesAllOptions = function(){
	
	//Click on others
	locators.others.click();
	
	//Matches all options
	expect(locators.other1.getText()).toContain("Icons");
	expect(locators.other2.getText()).toContain("FAQ");
	expect(locators.other3.getText()).toContain("Pricing Plans");
	expect(locators.other4.getText()).toContain("Login");
	expect(locators.other5.getText()).toContain("Signup");
	expect(locators.other6.getText()).toContain("404");
	
};