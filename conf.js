var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
		directConnect:true,

		//Specifies the framework we are using
		framework: 'jasmine',

		//Address of the selenium-webserver (Although we dont require it here since we are using direct connect)
		//"seleniumAddress": 'http://111.93.220.154:4444/wd/hub',

		//The spec files to be run
		specs: ['spec/securitySpec.js'],

		//Default Time out
		jasmineNodeOpts: {defaultTimeoutInterval: 600000},

		//Callback function before the specs are executed 
		onPrepare: function(){

			//Maximises the window
			browser.manage().window().maximize();
			jasmine.getEnv().addReporter(
					new Jasmine2HtmlReporter({

						//Saves the reports in the specified folder in the same directory
						savePath: 'reports/screenshots'
					})
			);
		}
};