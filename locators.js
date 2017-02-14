describe("It should have all the locators" , function(){
	
	//locators of home-page
	var heading = element(by.xpath("//a[@class='brand']"));
	var signUp = element(by.xapth("//a[@data-ui-sref='signup']"));
	var login = element(by.xpath("//form//*[text()='Member Login']"));
	var helpHome = element(by.xpath("//i[@class='icon-chevron-left']"));
	var userName = element(by.model("login.email"));
	var password = element(by.model("login.password"));
	var checkbox = element(by.xpath("//input[@id='Field']"));
	var resetPassword = element(by.xpath("//div[@class='login-extra ng-scope']"));
	var signInButton = element(by.buttonText("Sign In"));

	//locators for sign-up page
	var signupPage = element(by.xpath("//*[text()='Signup for Free Account']"));
	var signupFirstName = element(by.model("signup.firstname"));
	var signupLastName = element(by.model("signup.lastname"));
	var signupEmail = element(by.model("signup.email"));
	var signupPassword = element(by.model("signup.password"));
	var signupConfPassword = element(by.xpath("//input[@id='confirm_password']"));
	var signupTC = elemeny(by.xpath("//label[@class='choice']"));
	var signupButton = element(by.buttonText("Register"));

	//locators for dashboard page
	var dashboard = element(by.xpath("//a[@ui-sref='dashboard']"));
	var dstats = element(by.xpath("//div[@class='widget-header']/*[text()=\" Today's Stats"]"));
	var dImportantShorcuts = element(by.xpath("//div[@class='widget-header']/*[text()='Important Shortcuts']"));
	var dRecentNews = element(by.xpath("//div[@class='widget-header']/*[text()=' Recent News']"));
	var dCustomers = element(by.xpath("//div[@class='widget-header']/*[text()='Customers']"));
	var dapps = element(by.xpath("//a[@class='shortcut']//*[text()='Apps']"));
	var dbookmarks = element(by.xpath("//a[@class='shortcut']//*[text()='Bookmarks']"));
	var dreports = element(by.xpath("//a[@class='shortcut']//*[text()='Reports']"));
	var dcomments = element(by.xpath("//a[@class='shortcut']//*[text()='Comments']"));
	var dusers = element(by.xpath("//a[@class='shortcut']//*[text()='Users']"));
	var dnotes = element(by.xpath("//a[@class='shortcut']//*[text()='Notes']"));
	var dphotos = element(by.xpath("//a[@class='shortcut']//*[text()='Photos']"));
	var dtags = element(by.xpath("//a[@class='shortcut']//*[text()='Tags']"));
	var activities = element.all(by.xpath("//div[@class='stat']"));
	var news = element(by.xpath("//li[@class='ng-scope']"));
	var customerTable = element(by.xpath("//table[@class='table table-striped table-bordered']//tr[1]"));

	//locators for reports page
	var reports = element(by.xpath("//a[@ui-sref='reports']"));
	var reportsCustomers = element(by.xpath("//div[@class='widget-header']/*[text()=' Customers']"));
	var reportsOrders = element(by.xpath("//div[@class='widget-header']/*[text()=' Orders']"));

	//Locators of Customer tab
	var customers = element(by.xpath("//*[@class='icon-facetime-video']/following-sibling::span[1]"));
	var sort_by_firstname = element(by.xpath("//div[@class='ng-binding ng-scope'][text()='First Name']"));
	var sort_by_lastname = element(by.xpath("//div[@class='ng-binding ng-scope'][text()='Last Name']"));
	var sort_by_email = element(by.xpath("//div[@class='ng-binding ng-scope'][text()='Email']"));
	var sort_by_phone = element(by.xpath("//div[@class='ng-binding ng-scope'][text()='Phone']"));
	var sort_by_country = element(by.xpath("//div[@class='ng-binding ng-scope'][text()='Country']"));
	var search_by_firstname = element(by.xpath("//thead[@class='ng-scope']/tr[2]/th[1]/div/div/div/input"));
	var search_by_lastname = element(by.xpath("//thead[@class='ng-scope']/tr[2]/th[2]/div/div/div/input"));
	var search_by_email = element(by.xpath("//thead[@class='ng-scope']/tr[2]/th[3]/div/div/div/input"));
	var search_by_phone = element(by.xpath("//thead[@class='ng-scope']/tr[2]/th[4]/div/div/div/input"));
	var search_by_country = element(by.xpath("//thead[@class='ng-scope']/tr[2]/th[5]/div/div/div/input"));
	var view = element(by.buttonText('View'));
	var previous = element(by.xpath("//a[@ng-switch-when='prev']"));
	var next= element(by.xpath("//a[@ng-switch-when='next']"));
	var page1= element(by.xpath("//span[@ng-bind='page.number'][text()=1]"));
	var page2= element(by.xpath("//span[@ng-bind='page.number'][text()=2]"));
	var view_10_records = element(by.xpath("//span[@ng-bind='count'][text()=10]"));
	var view_25_records = element(by.xpath("//span[@ng-bind='count'][text()=25]"));
	var view_75_records = element(by.xpath("//span[@ng-bind='count'][text()=75]"));
	var view_100_records = element(by.xpath("//span[@ng-bind='count'][text()=100]"));

	//locators of Add customers tab
	var addcustomer= element(by.xpath("//i[@class='icon-bar-chart']"));
	var add_firstname = element(by.xpath("//input[@name='firstname']"));
	var add_lastname = element(by.xpath("//input[@name='lastname']"));
	var add_email = element(by.xpath("//input[@name='email']"));
	var add_phone = element(by.xpath("//input[@name='phone']"));
	var add_bio = element(by.xpath("//textarea[@name='bio']"));
	var select_country = element(by.xpath("//select[@ng-model='customer.country']"));
	var us = element(by.xpath("//select[@ng-model='customer.country']/option[@value='United States']"));
	var uk = element(by.xpath("//select[@ng-model='customer.country']/option[@value='United Kingdom']"));
	var ind = element(by.xpath("//select[@ng-model='customer.country']/option[@value='India']"));
	var aus = element(by.xpath("//select[@ng-model='customer.country']/option[@value='Australia']"));
	var save_button= element(by.xpath("//button[@class='btn btn-primary']"));
	var cancel_button = element(by.xpath("//button[@class='btn']"));


	//locators for others drop-down menu
	var others = element(by.xpath("//*[text()='Others']"));
	var other1 = element(by.xpath("//li[@class='dropdown open']/child::ul[1]/li[1]"));
	var other2 = element(by.xpath("//li[@class='dropdown open']/child::ul[1]/li[2]"));
	var other3 = element(by.xpath("//li[@class='dropdown open']/child::ul[1]/li[3]"));
	var other4 = element(by.xpath("//li[@class='dropdown open']/child::ul[1]/li[4]"));
	var other5 = element(by.xpath("//li[@class='dropdown open']/child::ul[1]/li[5]"));
	var other6 = element(by.xpath("//li[@class='dropdown open']/child::ul[1]/li[6]"));
});