var loginpage = require("../Pages/loginPage.js");
var openPage = require('../Pages/basePage.js');


describe("To test the test-cases for log-in page",function(){

	beforeEach (function(){
		
		//Test Suit for login page
		openPage.opensPageAndVerifies();

	});

	//Test case for empty E-mail id
	it("Should prompt to enter valid E-mail id",function(){

		loginpage.verifyForInvalidEmail();

	});

	//Test case for empty password field
	it("Should verify for empty password field",function(){

		loginpage.verfiyForEmptyPassword();

	});

	//Test case for both fields empty
	it("Should verify for fields empty",function(){

		loginpage.verifyForBothFieldsEmpty();

	});

	//Test case for valid credentials
	it("Should verify for valid credentials",function(){

		loginpage.verifyForValidCredentials();

	});

	//Test case for checking the color of the error message
	it("Should verify that the error message is in red colour",function(){

		loginpage.verifyTheColorOfErrorMessage();

	});

	//Test case for checking the default label names
	it("Should verify the default label names",function(){

		loginpage.verifyTheLabelsOfTextField();

	});

	it("Should verify the default label text in password Field",function(){

		loginpage.verifyTheLabelsOfPasswordField();

	});

});
