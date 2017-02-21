var locator = require('../locators.js');
var loginPage = require('../Pages/loginPage.js');
var customerPage = require('../Pages/customersPage.js');
//Test for Customer page
describe("Verification of Customer page" , function(){

		it("Opens the website",function(){
			//Opens the web-site
			browser.get("http://amasik.com/demo/angularjs/angular-app/#/login");

		});

		it("logs in the customer",function(){
			//login the user
			loginPage.verifyForValidCredentials();
		});


		it("Opens customer tab",function(){
			//click on customer tab
			customerPage.clickOnCustomerTab();
		});

		it("Verifies that desired tab is open",function(){
			customerPage.verifyCustomerPage();

		});

		//It block to sort the records of the customer table
		it("Should sort by first name" , function(){

			customerPage.sortByFname();
		});

		it("Should sort by last name",function(){

			customerPage.sortByLname();
		});

		it("Should sort by last name",function(){

			customerPage.sortByEmail();
		});

		it("Should sort by last name",function(){

			customerPage.sortByPhone();
		});

		it("Should sort by last name",function(){

			customerPage.sortByCountry();

		});


		it("Should verify all the search fields",function(){

			customerPage.searchForCustomer();

		});

		//to verify Number of records per pages should not exceed the max limit and page number of the table
		it("Number of records per pages should not exceed the max limit of 10 " , function(){

			customerPage.maxRecordsTen();
		});

		it("Number of records per pages should not exceed the max limit of 25 " , function(){

			customerPage.maxRecords25();
		});

		it("Opens second page" , function(){

			customerPage.pageTwo();
		});

		it("Opens second page" , function(){	
			customerPage.pageOne();

		});

		//To verify that view button and view tab are working
		it("Verifiy that we can view the customer details",function(){
			customerPage.viewTab();

		});

	});