describe("Header files locators",function(){
	var heading = element(by.xpath("//a[@class='brand']"));
	var searchBar = element(by.xpath("//input[@class='search-query']"));
	var accounts = element(by.xpath("//li[@class='dropdown open']/child::a[1]"));
	var settings = element(by.xpath("//li[@class='dropdown open']/child::ul[1]/li[1]"));
	var help = element(by.xpath("//li[@class='dropdown open']/child::ul[1]/li[2]"));
	var userIcon = element(by.xpath("//i[@class='icon-user']"));
	var profile = element(by.xpath("//li[@class='dropdown']/child::ul[1]/li[1]"));
	var logout = element(by.xpath("//li[@class='dropdown']/child::ul[1]/li[2]"));
});