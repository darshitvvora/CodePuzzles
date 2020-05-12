var tail = require('./tailFile.js');


  tail.tailFile('file.txt', 10, false,
                function onData(err, data, unsubscribe) {
   console.log(Buffer.from(data).toString());
  });