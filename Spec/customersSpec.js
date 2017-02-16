var locator = require('../locators.js');
var loginPage = require('../Pages/loginPage.js');
var customerPage = require('../Pages/customersPage.js');
//Test for Customer page
describe("Verification of Customer page" , function(){
	//Opens the web-site before spec
	browser.get("http://amasik.com/demo/angularjs/angular-app/#/login");

	//it block to check all 5 attributes of customer are present or not
	it("Should login ,click on customer tab and verify customer page" , function(){
		//login the user
		loginPage.verifyForValidCredentials();
		//click on customer tab
		customerPage.clickOnCustomerTab();
		customerPage.verifyCustomerPage();
	});
	
	//It block to sort the records of the customer table
	it("Should sort all the records" , function(){
		customerPage.sortByFname();
		customerPage.sortByLname();
		customerPage.sortByEmail();
		customerPage.sortByPhone();
		customerPage.sortByCountry();
		customerPage.searchForCustomer();
	});
	
	//to verify Number of records per pages should not exceed the max limit and page number of the table
	it("Number of records per pages should not exceed the max limit " , function(){
		customerPage.maxRecordsTen();
		customerPage.maxRecords25();
		customerPage.pageTwo();
		customerPage.pageOne();
	});
});
