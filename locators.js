var locators = function(){

	//header locators
	var heading = element(by.xpath("//a[@class='brand']"));
	var searchBar = element(by.xpath("//input[@class='search-query']"));
	var accounts = element(by.xpath("//li[@class='dropdown open']/child::a[1]"));
	var settings = element(by.xpath("//li[@class='dropdown open']/child::ul[1]/li[1]"));
	var help = element(by.xpath("//li[@class='dropdown open']/child::ul[1]/li[2]"));
	var userIcon = element(by.xpath("//i[@class='icon-user']"));
	var profile = element(by.xpath("//li[@class='dropdown open']/child::ul[1]/li[1]"));
	var logout = element(by.xpath("//li[@class='dropdown open']/child::ul[1]/li[2]"));
	//locators of home-page
	this.heading = element(by.xpath("//a[@class='brand']"));
	this.signUp = element(by.xpath("//a[@data-ui-sref='signup']"));
	this.login = element(by.xpath("//form//*[text()='Member Login']"));
	this.helpHome = element(by.xpath("//i[@class='icon-chevron-left']"));
	this.userName = element(by.model("login.email"));
	this.password = element(by.model("login.password"));
	this.checkbox = element(by.xpath("//input[@id='Field']"));
	this.resetPassword = element(by.xpath("//div[@class='login-extra ng-scope']"));
	this.signInButton = element(by.buttonText("Sign In"));
	this.errorMessage = element(by.xpath("//p[@class='validation-invalid']"));
	this.errorMessagePassword = element(by.xpath("//p[@class='validation-invalid']"));

	//locators for sign-up page
	this.signupPage = element(by.xpath("//*[text()='Signup for Free Account']"));
	this.signupFirstName = element(by.model("signup.firstname"));
	this.signupLastName = element(by.model("signup.lastname"));
	this.signupEmail = element(by.model("signup.email"));
	this.signupPassword = element(by.model("signup.password"));
	this.signupConfPassword = element(by.xpath("//input[@id='confirm_password']"));
	this.signupTC = element(by.xpath("//label[@class='choice']"));
	this.signupButton = element(by.buttonText("Register"));
	this.signupErrorMessage = element.all(by.xpath("//p[@class='validation-invalid']"));
	this.loginToYourAccount = element(by.xpath("//div[@class='login-extra ng-scope']/a"));

	//locators for dashboard page
	this.dashboard = element(by.xpath("//a[@ui-sref='dashboard']"));
	this.dstats = element(by.partialLinkText("Today's Stats"));
	//this.dstats = element(by.xpath("//div[@class='widget-header']/*[text()=" Today's Stats"]"));
	this.dImportantShorcuts = element(by.xpath("//div[@class='widget-header']/*[text()='Important Shortcuts']"));
	this.dRecentNews = element(by.xpath("//div[@class='widget-header']/*[text()=' Recent News']"));
	this.dCustomers = element(by.xpath("//div[@class='widget-header']/*[text()='Customers']"));
	this.dapps = element(by.xpath("//a[@class='shortcut']//*[text()='Apps']"));
	this.dbookmarks = element(by.xpath("//a[@class='shortcut']//*[text()='Bookmarks']"));
	this.dreports = element(by.xpath("//a[@class='shortcut']//*[text()='Reports']"));
	this.dcomments = element(by.xpath("//a[@class='shortcut']//*[text()='Comments']"));
	this.dusers = element(by.xpath("//a[@class='shortcut']//*[text()='Users']"));
	this.dnotes = element(by.xpath("//a[@class='shortcut']//*[text()='Notes']"));
	this.dphotos = element(by.xpath("//a[@class='shortcut']//*[text()='Photos']"));
	this.dtags = element(by.xpath("//a[@class='shortcut']//*[text()='Tags']"));
	this.activities = element.all(by.xpath("//div[@class='stat']"));
	this.news = element(by.xpath("//li[@class='ng-scope']"));
	this.customerTable = element(by.xpath("//table[@class='table table-striped table-bordered']//tr[1]"));

	//locators for reports page
	this.reports = element(by.xpath("//a[@ui-sref='reports']"));
	this.reportsCustomers = element(by.xpath("//div[@class='widget-header']/*[text()=' Customers']"));
	this.reportsOrders = element(by.xpath("//div[@class='widget-header']/*[text()=' Orders']"));

	//Locators of Customer tab
	this.customers = element(by.xpath("//*[@class='icon-facetime-video']/following-sibling::span[1]"));
	this.sort_by_firstname = element(by.xpath("//div[@class='ng-binding ng-scope'][text()='First Name']"));
	this.sort_by_lastname = element(by.xpath("//div[@class='ng-binding ng-scope'][text()='Last Name']"));
	this.sort_by_email = element(by.xpath("//div[@class='ng-binding ng-scope'][text()='Email']"));
	this.sort_by_phone = element(by.xpath("//div[@class='ng-binding ng-scope'][text()='Phone']"));
	this.sort_by_country = element(by.xpath("//div[@class='ng-binding ng-scope'][text()='Country']"));
	this.search_by_firstname = element(by.xpath("//thead[@class='ng-scope']/tr[2]/th[1]/div/div/div/input"));
	this.search_by_lastname = element(by.xpath("//thead[@class='ng-scope']/tr[2]/th[2]/div/div/div/input"));
	this.search_by_email = element(by.xpath("//thead[@class='ng-scope']/tr[2]/th[3]/div/div/div/input"));
	this.search_by_phone = element(by.xpath("//thead[@class='ng-scope']/tr[2]/th[4]/div/div/div/input"));
	this.search_by_country = element(by.xpath("//thead[@class='ng-scope']/tr[2]/th[5]/div/div/div/input"));
	this.view = element(by.buttonText('View'));
	this.previous = element(by.xpath("//a[@ng-switch-when='prev']"));
	this.next= element(by.xpath("//a[@ng-switch-when='next']"));
	this.page1= element(by.xpath("//span[@ng-bind='page.number'][text()=1]"));
	this.page2= element(by.xpath("//span[@ng-bind='page.number'][text()=2]"));
	this.view_10_records = element(by.xpath("//span[@ng-bind='count'][text()=10]"));
	this.view_25_records = element(by.xpath("//span[@ng-bind='count'][text()=25]"));
	this.view_75_records = element(by.xpath("//span[@ng-bind='count'][text()=75]"));
	this.view_100_records = element(by.xpath("//span[@ng-bind='count'][text()=100]"));

	//locators of Add customers tab
	this.addcustomer= element(by.xpath("//i[@class='icon-bar-chart']"));
	this.add_firstname = element(by.xpath("//input[@name='firstname']"));
	this.add_lastname = element(by.xpath("//input[@name='lastname']"));
	this.add_email = element(by.xpath("//input[@name='email']"));
	this.add_phone = element(by.xpath("//input[@name='phone']"));
	this.add_bio = element(by.xpath("//textarea[@name='bio']"));
	this.select_country = element(by.xpath("//select[@ng-model='customer.country']"));
	this.us = element(by.xpath("//select[@ng-model='customer.country']/option[@value='United States']"));
	this.uk = element(by.xpath("//select[@ng-model='customer.country']/option[@value='United Kingdom']"));
	this.ind = element(by.xpath("//select[@ng-model='customer.country']/option[@value='India']"));
	this.aus = element(by.xpath("//select[@ng-model='customer.country']/option[@value='Australia']"));
	this.save_button= element(by.xpath("//button[@class='btn btn-primary']"));
	this.cancel_button = element(by.xpath("//button[@class='btn']"));

	//locators for others drop-down menu
	this.others = element(by.xpath("//*[text()='Others']"));
	this.other1 = element(by.xpath("//li[@class='dropdown open']/child::ul[1]/li[1]"));
	this.other2 = element(by.xpath("//li[@class='dropdown open']/child::ul[1]/li[2]"));
	this.other3 = element(by.xpath("//li[@class='dropdown open']/child::ul[1]/li[3]"));
	this.other4 = element(by.xpath("//li[@class='dropdown open']/child::ul[1]/li[4]"));
	this.other5 = element(by.xpath("//li[@class='dropdown open']/child::ul[1]/li[5]"));
	this.other6 = element(by.xpath("//li[@class='dropdown open']/child::ul[1]/li[6]"));
};
module.exports = new locators();
