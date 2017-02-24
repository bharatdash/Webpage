var locator = require('../locators.js');
var loginPage = require('../Pages/loginPage.js');
var customerPage = require('../Pages/customersPage.js');
var openPage = require('../Pages/basePage.js');

//Test Suit for Customer page
describe("Verification of Customer page" , function(){

	//Open the page and verify the page
	it("Opens the app and verifies",function(){

		openPage.opensPageAndVerifies();

	});

	//login the user
	it("logs in the customer",function(){

		loginPage.verifyForValidCredentials();

	});


	//click on customer tab
	it("Opens customer tab",function(){

		customerPage.clickOnCustomerTab();

	});

	//Verify the tab is opened or not
	it("Verifies that desired tab is open",function(){

		customerPage.verifyCustomerPage();

	});

	//It block to sort the records of the customer table
	it("Should sort by first name" , function(){

		customerPage.sortByFname();

	});

	//Sort by last name
	it("Should sort by last name",function(){

		customerPage.sortByLname();

	});

	//Sort by Email
	it("Should sort by Email name",function(){

		customerPage.sortByEmail();

	});

	//Sort by phone Number
	it("Should sort by Phone number",function(){

		customerPage.sortByPhone();

	});

	//Sort by Country
	it("Should sort by Country",function(){

		customerPage.sortByCountry();

	});


	//Verify the search fields
	it("Should verify all the search fields",function(){

		customerPage.searchForCustomer();

	});

	//to verify Number of records per pages should not exceed the max limit and page number of the table
	it("Number of records per pages should not exceed the max limit of 10 " , function(){

		customerPage.maxRecordsTen();

	});
	
	//to verify Number of records per pages should not exceed the max limit and page number of the table
	it("Number of records per pages should not exceed the max limit of 25 " , function(){

		customerPage.maxRecords25();

	});

	//Open page number 2
	it("Opens second page" , function(){

		customerPage.pageTwo();

	});

	//open page number 1
	it("Opens second page" , function(){	

		customerPage.pageOne();

	});

	//To verify that view button and view tab are working
	it("Verifiy that we can view the customer details",function(){

		customerPage.viewTab();

	});

});