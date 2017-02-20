var locator = require('../locators.js');
var loginPage = require('../Pages/loginPage.js');
//function to Verify all the windows on the page
this.dashboardWindows = function(){
	expect(locator.dImportantShorcuts.getText()).toEqual("Important Shortcuts");
	expect(locator.dstats.getText()).toEqual("Today's Stats");
	expect(locator.dRecentNews.getText()).toEqual("Recent News");
	expect(locator.dCustomers.getText()).toEqual("Customers");
};

//Function to verify the Apps icon name
this.checkApps = function(){
	expect(locator.dapps.getText()).toEqual("Apps");
};

//Function to verify the Bookmarks Icon name
this.checkBookmarks = function(){
	expect(locator.dbookmarks.getText()).toEqual("Bookmarks");
};


//Function to verify the Roports Icon name
this.checkReports = function(){
	expect(locator.dreports.getText()).toEqual("Reports");
};


//Function to verify the Comments Icon name
this.checkComments = function(){
	expect(locator.dcomments.getText()).toEqual("Comments");
};


//Function to verify the Users icon name
this.checkUsers = function(){
	expect(locator.dusers.getText()).toEqual("Users");
};


//Function to verify the Notes Icons name
this.checkNotes = function(){
	expect(locator.dnotes.getText()).toEqual("Notes");
};

//Function to verify the Photos Icon name
this.checkPhotos = function(){
	expect(locator.dphotos.getText()).toEqual("Photos");
};


//Function to verify the Tags Icon name
this.checkTags = function(){
	expect(locator.dtags.getText()).toEqual("Tags");
};

//Function to verify the number of activies present inside stats window
this.likeTweetShare = function(){
	locator.activities.getText().then(function(count){
		console.log("Types of activies present in stats windows are:"+count.length);
		expect(count.length).toEqual(4);
	});
};


//Function to verify the "Thursday Roundup # 40" news link present or not
this.thursdayNewsLink = function(){
	expect(locator.thursdayNews.getText()).toEqual("Thursday Roundup # 40");
};


//Function to verify the "Retina Ready Responsive App Landing Page Website Template" link present or not
this.retinaNewsLink = function(){
	expect(locator.retinaNews.getText()).toEqual("Retina Ready Responsive App Landing Page Website Template");
};

//Function to check that news elements are clickable
this.verifiesNewsURL = function(){
	var EC = protractor.ExpectedConditions; 
	browser.wait(EC.elementToBeClickable(locator.thursdayNews , 3000));
	browser.wait(EC.elementToBeClickable(locator.retinaNews , 3000));
};








