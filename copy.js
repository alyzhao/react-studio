const fs = require('fs');

let fromFile = './State-Lifecycle/demo01.html';

let toFileHead = './Handling-Events/';

let fileName = 'demo01.html';

let newFile = toFileHead + fileName;

fs.createReadStream(fromFile).pipe(fs.createWriteStream(newFile));
