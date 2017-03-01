var headerElements = require("../Pages/headerPage.js");
var loginpage = require("../Pages/loginPage.js");
var openPage = require('../Pages/basePage.js');

//Test Suit for Header of the web page
describe("To check the header elements of the webpage",function(){

	//Open the web page and verify
	it("Opens the app and verifies",function(){

		openPage.opensPageAndVerifies();

	});

	//Logs-in the user
	it("Should verify for valid credentials",function(){

		loginpage.verifyForValidCredentials();

	});

	//Verifies all the header elements except for logout
	it("Should verify that all elements are present",function(){

		headerElements.isOnlyForElements();

	});	

	//Verifies Search bar is present or not
	it("Should verify that search bar is present",function(){

		headerElements.verifesSearchBar();

	});

	//verifies logout function
	it("Should verify the log-out function",function(){

		headerElements.verifiesLogout();

	});

	//click amasik.com and verify the link
	it("Should verify the link at the bottom" , function(){

		headerElements.clickOnAmasik();

	});
	
});