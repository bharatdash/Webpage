var locator = require('D:/AutomationProject/Protractor Tool/Webpage/locators.js');
var dashboardPage = require('D:/AutomationProject/Protractor Tool/Webpage/Pages/dashboardPage.js');
//Test for dashboard page
describe("Verification of dashboard page" , function(){
	browser.get("http://amasik.com/demo/angularjs/angular-app/#/dashboard");
	//it block for Important shortcuts
	it("Dashbord must contain a frame called Important shortcuts" , function(){
		dashboardPage.dashboardShortcuts();
	});
	
});