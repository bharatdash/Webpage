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
	it("Should check checkApps button present or not" , function(){
		dashboardPage.checkApps();
	});

	it("Should check Apps button present or not" , function(){
		dashboardPage.checkBookmarks(); 
	});

	it("Should check Reports button present or not" , function(){
		dashboardPage.checkReports();
	});

	it("Should check Comments button present or not" , function(){
		dashboardPage.checkComments();
	});

	it("Should check Users button present or not" , function(){
		dashboardPage.checkUsers();
	});

	it("Should check Notes button present or not" , function(){
		dashboardPage.checkNotes();
	});

	it("Should check Photos button present or not" , function(){
		dashboardPage.checkPhotos(); 
	});

	it("Should check Tags button present or not" , function(){
		dashboardPage.checkTags();
	});

	it("Should check activity window present or not" , function(){
		dashboardPage.likeTweetShare();
	});

	it("Should check Thursday News Link button present or not" , function(){
		dashboardPage.thursdayNewsLink();
	});

	it("Should check retina News Link button present or not" , function(){
		dashboardPage.retinaNewsLink();
	});

	it("Should check that thursday news is a link i.e clickable" , function(){
		dashboardPage.verifiesNewsURL();

	});
});