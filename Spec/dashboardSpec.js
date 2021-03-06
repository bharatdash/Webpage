var dashboardPage = require('../Pages/dashboardPage.js');
var loginPage = require('../Pages/loginPage.js');
var openPage = require('../Pages/basePage.js');

//Test Suit for dashboard page
describe("Verification of dashboard page" , function(){

	//Open the page and check title
	it("Opens the app and verifies",function(){

		openPage.opensPageAndVerifies();

	});

	//Check names of all four windows on the Dash board
	it("Dashboard must contain a window called -Important shortcuts" , function(){

		dashboardPage.dashboardWindows();

	}); 

	//Check "Apps" is present in the "Important Shortcut" window 
	it("Should check checkApps button present or not" , function(){

		dashboardPage.checkApps();

	});

	//check Bookmark button present or not
	it("Should check Apps button present or not" , function(){

		dashboardPage.checkBookmarks(); 

	});

	//check Reports button present or not
	it("Should check Reports button present or not" , function(){

		dashboardPage.checkReports();

	});

	//check Comments button present or not
	it("Should check Comments button present or not" , function(){

		dashboardPage.checkComments();

	});

	//check Users button present or not
	it("Should check Users button present or not" , function(){

		dashboardPage.checkUsers();

	});

	//check Notes button present or not
	it("Should check Notes button present or not" , function(){

		dashboardPage.checkNotes();

	});

	//check Photos button present or not
	it("Should check Photos button present or not" , function(){

		dashboardPage.checkPhotos(); 

	});

	//check Tags button present or not
	it("Should check Tags button present or not" , function(){

		dashboardPage.checkTags();

	});

	//Checks activity window present or not
	it("Should check activity window present or not" , function(){

		dashboardPage.likeTweetShare();

	});

	//Check the text under anchor tag
	it("Should verify the text under anchor tag" , function(){

		dashboardPage.verifyAnchor();

	});

	//Check the text under likes tag
	it("Should verify the text under anchor tag" , function(){

		dashboardPage.verifyLike();

	});

	//Check the text under tweet tag
	it("Should verify the text under anchor tag" , function(){

		dashboardPage.verifyTweet();

	});

	//Check the text under bull horn tag
	it("Should verify the text under anchor tag" , function(){

		dashboardPage.verifyBullHorn();

	});

	//check Thursday News Link button present or not
	it("Should check activity window present or not" , function(){

		dashboardPage.likeTweetShare();

	});

	//Check Thursday News Link button is there or not
	it("Should check Thursday News Link button present or not" , function(){

		dashboardPage.thursdayNewsLink();

	});

	//check retina News Link button present or not
	it("Should check retina News Link button present or not" , function(){

		dashboardPage.retinaNewsLink();

	});

	//verify the text present under the thursday news link
	it("Should verify the text present under the thursday news link" , function(){

		dashboardPage.thursdayNewsLinkContents();

	});

	//verify the text present under the retina news link
	it("Should verify the text present under the retina news link" , function(){

		dashboardPage.retinaNewsLinkContents();

	});

	//check that thursday news is a link i.e clickable
	it("Should check that thursday news is a link i.e clickable" , function(){

		dashboardPage.verifiesNewsURL();

	});
});
