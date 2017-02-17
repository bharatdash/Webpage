exports.config = {
		directConnect:true,

		framework: 'jasmine',
		seleniumAddress: 'http://localhost:4444/wd/hub',
<<<<<<< HEAD
		specs: ['spec/loginSpec.js'],
=======
		specs: ['spec/customersSpec.js'],
>>>>>>> 421e9bbcd1de39f1cde2b2b149df700ba9e66ac2
		jasmineNodeOpts: {defaultTimeoutInterval: 600000},
		onPrepare: function(){
			browser.manage().window().maximize();
		} 
};