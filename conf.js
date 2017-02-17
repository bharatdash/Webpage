exports.config = {
		directConnect:true,

		framework: 'jasmine',
		seleniumAddress: 'http://localhost:4444/wd/hub',
<<<<<<< HEAD
		specs: ['spec/securitySpec.js'],
=======
		specs: ['spec/dashboardSpec.js'],
>>>>>>> e517f04346dc929d5041adf20680c2e2a8b19e55
		jasmineNodeOpts: {defaultTimeoutInterval: 600000},
		onPrepare: function(){
			browser.manage().window().maximize();
		} 
};
