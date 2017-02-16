var locator = require('../locators.js');
var dashboardPage = require('../Pages/dashboardPage.js');
var loginPage = require('../Pages/loginPage.js');
//Test for dashboard page
describe("Verification of dashboard page" , function(){
	//Opens the web-site before spec
	browser.get("http://amasik.com/demo/angularjs/angular-app/#/login");

	//it block to check all four windows on the dashboard
	it("Dashboard must contain a window called -Important shortcuts" , function(){
		//login the user
		loginPage.verifyForValidCredentials();
		dashboardPage.dashboardWindows();
	});	

	//Check for various links are present in the Important Shortcut window or not
	it("Should check all the links of the Shortcut window" , function(){
		dashboardPage.checkApps();
		dashboardPage.checkBookmarks(); 
		dashboardPage.checkReports();
		dashboardPage.checkComments(); 
		dashboardPage.checkUsers();
		dashboardPage.checkNotes();
		dashboardPage.checkPhotos(); 
		dashboardPage.checkTags();
		dashboardPage.likeTweetShare();
		dashboardPage.thursdayNewsLink();
		dashboardPage.retinaNewsLink();
	});
	
	
});