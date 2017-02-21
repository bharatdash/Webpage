var locator = require('../locators.js');

//Function to click on customer tab
this.clickOnCustomerTab = function(){
	locator.customers.click();
};

//Function to verify that only customer page is opened
this.verifyCustomerPage = function(){
	expect(locator.customers.getText()).toEqual("Customers");
};

//Function to sort by first name
this.sortByFname = function(){
	expect(locator.sort_by_firstname.getText()).toEqual("FIRST NAME");
};

//Function to sort by last name
this.sortByLname = function(){
	expect(locator.sort_by_lastname.getText()).toEqual("LAST NAME");
};

//Function to sort by email
this.sortByEmail = function(){
	expect(locator.sort_by_email.getText()).toEqual("EMAIL");
};


//Function to sort by phone number
this.sortByPhone = function(){
	expect(locator.sort_by_phone.getText()).toEqual("PHONE");
};

//Function to sort by Country name
this.sortByCountry = function(){
	expect(locator.sort_by_country.getText()).toEqual("COUNTRY");
};

//function for search a customer by giving a value to the search field
this.searchForCustomer = function(){

	//Search By First-Name
	locator.search_by_firstname.sendKeys("Abdul");

	//Verifes the result
	expect(locator.first_row.getText()).toContain("Abdul");

	//Clears the field
	locator.search_by_firstname.clear();

	//Search by Last-Name
	locator.search_by_lastname.sendKeys("Kalam");

	//Verifes the result
	expect(locator.first_row.getText()).toContain("Kalam");

	//Clears the field
	locator.search_by_lastname.clear();

	//Search by Email
	locator.search_by_email.sendKeys("Abdul@gmail.com");

	//Verifes the result
	expect(locator.first_row.getText()).toContain("Abdul@gmail.com");

	//Clears the field
	locator.search_by_email.clear();

	//Search by phone
	locator.search_by_phone.sendKeys("(777)-888-99994");

	//Verifes the result
	expect(locator.first_row.getText()).toContain("(777)-888-99994");

	//Clears the field
	locator.search_by_phone.clear();

	//Search by Country
	locator.search_by_country.sendKeys("Australia");

	//Verifes the result
	expect(locator.first_row.getText()).toContain("Australia");

	//Clears the field
	locator.search_by_country.clear();

};

//Function to check that max record per page is ten
this.maxRecordsTen = function(){
	locator.view.getText().then(function(totalView){
		expect(totalView.length).toEqual(10);

	});
};

//Function to check that max record per page is 25
this.maxRecords25 = function(){
	locator.view_25_records.click();
	locator.view.getText().then(function(totalView){
		expect(totalView.length).toBeLessThan(26);
		expect(totalView.length).toBeGreaterThan(10);
	});
};

//Function to check page number two is present when number of records per page is 10
this.pageTwo = function(){
	locator.view_10_records.click();
	locator.page2.click();
	expect(locator.first_row).not.toBe(null);
};

//Function to check page number one is present when number of records per page is 10
this.pageOne = function(){
	locator.page1.click();
	expect(locator.first_row).not.toBe(null);
};

//Function to check on view tab after clicking the view button
this.viewTab = function(){

	locator.search_by_firstname.sendKeys("John");
	var name = locator.first_row.getText();
	locator.viewButton.click();
	locator.view_tab.click();
	var viewName = locator.view_name.getText();
	expect(name).toContain(viewName);

};