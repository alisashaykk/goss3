const Timer = require('timerpromise');

(async () => {
	console.time('common');
	
		console.time('first');
		await new Timer(3).start;
		console.timeEnd('first');
		
		console.time('second');
		await new Timer(2).start;
		console.timeEnd('second');
		
  console.timeEnd('common');
})();