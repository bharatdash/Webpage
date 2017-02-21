var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
		directConnect:true,

		framework: 'jasmine',
		seleniumAddress: 'http://localhost:4444/wd/hub',

		specs: ['spec/addCustomerSpec.js'],

		jasmineNodeOpts: {defaultTimeoutInterval: 600000},
		onPrepare: function(){
			browser.manage().window().maximize();
			jasmine.getEnv().addReporter(
					new Jasmine2HtmlReporter({
						savePath: 'target/screenshots'
					})
			);
		}
};