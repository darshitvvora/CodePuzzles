var tail = require('tail.js');


  tail.tailFile(path.join(cwd, 'data/text2.txt'), 500, false,
                function onData(err, data, unsubscribe) {
   console.log(data);
  });