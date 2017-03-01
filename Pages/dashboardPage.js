var locator = require('../locators.js');
var loginPage = require('../Pages/loginPage.js');

//function to Verify all the windows on the page
this.dashboardWindows = function(){
	
	//login the user
	loginPage.verifyForValidCredentials();
	
	//verify all the text
	expect(locator.dImportantShorcuts.getText()).toEqual("Important Shortcuts");
	expect(locator.dstats.getText()).toEqual("Today's Stats");
	expect(locator.dRecentNews.getText()).toEqual("Recent News");
	expect(locator.dCustomers.getText()).toEqual("Customers");

};

//Function to verify the Apps icon and it's name
this.checkApps = function(){
	
	expect(locator.dapps.getText()).toEqual("Apps");
	locator.dapps.getCssValue('font-size').then(function(size){
		
		expect(size).toBe('13px');
	
	});
	
};

//Function to verify the Bookmarks Icon and it's name
this.checkBookmarks = function(){
	
	expect(locator.dbookmarks.getText()).toEqual("Bookmarks");
	locator.dbookmarks.getCssValue('font-size').then(function(size){
		
		expect(size).toBe('13px');
		
	});

};


//Function to verify the Reports and it's Icon name
this.checkReports = function(){
	
	expect(locator.dreports.getText()).toEqual("Reports");
	locator.dreports.getCssValue('font-size').then(function(size){
		
		expect(size).toBe('13px');
	
	});

};


//Function to verify the Comments Icon and it's name
this.checkComments = function(){
	
	expect(locator.dcomments.getText()).toEqual("Comments");
	locator.dcomments.getCssValue('font-size').then(function(size){
		
		expect(size).toBe('13px');
	
	});

};


//Function to verify the Users icon and it's name
this.checkUsers = function(){
	
	expect(locator.dusers.getText()).toEqual("Users");
	locator.dusers.getCssValue('font-size').then(function(size){
		
		expect(size).toBe('13px');
		
	});
	
};


//Function to verify the Notes Icons and it's name
this.checkNotes = function(){
	
	expect(locator.dnotes.getText()).toEqual("Notes");
	locator.dnotes.getCssValue('font-size').then(function(size){
		
		expect(size).toBe('13px');
		
	});
	
};

//Function to verify the Photos Icon and it's name
this.checkPhotos = function(){
	
	expect(locator.dphotos.getText()).toEqual("Photos");
	locator.dphotos.getCssValue('font-size').then(function(size){
		
		expect(size).toBe('13px');
		
	});
	
};


//Function to verify the Tags Icon and it's name
this.checkTags = function(){
	
	expect(locator.dtags.getText()).toEqual("Tags");
	locator.dtags.getCssValue('font-size').then(function(size){
		
		expect(size).toBe('13px');
		
	});
	
};

//Function to verify the number of activities present inside stats window
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

//Function to verify Thursday news contents
this.thursdayNewsLinkContents = function(){
	
	expect(locator.thursdayNewsContents.getText()).toEqual("This is our web design and development news series where we share our favorite design/development related articles, resources, tutorials and awesome freebies.");

};

//Function to verify retina news contents
this.retinaNewsLinkContents = function(){
	
	expect(locator.retinaNewsContents.getText()).toEqual("App Landing is a retina ready responsive app " +
			"landing page website template perfect for software and application developers and small business" +
	" owners looking to promote their iPhone, iPad, Android Apps and software products.");
	
};

//Function to verify the "Retina Ready Responsive App Landing Page Website Template" link present or not
this.retinaNewsLink = function(){
	
	expect(locator.retinaNews.getText()).toEqual("Retina Ready Responsive App Landing Page Website Template");
	
};

//Function to verify number of anchors present
this.verifyAnchor = function(){
	
	expect(locator.anchorTag.getText()).toEqual("851");
	
};

//Function to verify number of likes present
this.verifyLike = function(){
	
	expect(locator.likeTag.getText()).toEqual("423");
	
};

//Function to verify number of tags present
this.verifyTweet = function(){
	
	expect(locator.tweetTag.getText()).toEqual("922");
	
};

//Function to verify percentage of bull horns present
this.verifyBullHorn = function(){
	
	expect(locator.bullHornTag.getText()).toEqual("25%");
	
};

//Function to check that news elements are click able or not
this.verifiesNewsURL = function(){
	
	var EC = protractor.ExpectedConditions; 
	browser.wait(EC.elementToBeClickable(locator.thursdayNews , 3000));
	browser.wait(EC.elementToBeClickable(locator.retinaNews , 3000));
	
};