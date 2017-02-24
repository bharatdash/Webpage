var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
		directConnect:true,

		//Specifies the framework we are using
		framework: 'jasmine',
		
		//Address of the selenium-webserver (Although we dont reuire it here since we are using driect connect)
		seleniumAddress: 'http://localhost:4444/wd/hub',

		//The spec files to be run
		specs: ['spec/*Spec.js'],
		
		//Default Time out
		jasmineNodeOpts: {defaultTimeoutInterval: 600000},
		
		//Callback function before the specs are executed 
		onPrepare: function(){
			browser.manage().window().maximize();
			jasmine.getEnv().addReporter(
					new Jasmine2HtmlReporter({
						
						//Saves the reports in the specified folder in the same directory
						savePath: 'reports/screenshots'
					})
			);
		}
};