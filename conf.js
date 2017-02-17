exports.config = {
		directConnect:true,

		framework: 'jasmine',
		seleniumAddress: 'http://localhost:4444/wd/hub',
		specs: ['spec/securitySpec.js'],
		jasmineNodeOpts: {defaultTimeoutInterval: 600000},
		onPrepare: function(){
			browser.manage().window().maximize();
		} 
};