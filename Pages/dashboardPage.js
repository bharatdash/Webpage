var locator = require('D:/AutomationProject/Protractor Tool/Webpage/locators.js');
//function to Verify Important Shortcuts window 
this.dashboardShortcuts = function(){
	expect(locator.dImportantShorcuts.getText()).toEqual("Important Shortcuts");
};