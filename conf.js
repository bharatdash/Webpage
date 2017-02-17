exports.config = {
		directConnect:true,

		framework: 'jasmine',
		seleniumAddress: 'http://localhost:4444/wd/hub',
<<<<<<< HEAD
		specs: ['spec/securitySpec.js'],
=======

		specs: ['spec/securitySpec.js'],

>>>>>>> 3aa5c858e3ed4c07ddbb969306b6a783764b699b
		jasmineNodeOpts: {defaultTimeoutInterval: 600000},
		onPrepare: function(){
			browser.manage().window().maximize();
		} 
};