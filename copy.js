const fs = require('fs');

let fromFile = './base.html';

let toFileHead = './Refs-and-the-DOM/';

let fileName = 'demo01.html';

let newFile = toFileHead + fileName;

fs.createReadStream(fromFile).pipe(fs.createWriteStream(newFile));