const fs = require('fs');

let fromFile = './base.html';

let toFileHead = './Jsx-In-Depth/';

let fileName = 'demo01.html';

let newFile = toFileHead + fileName;

fs.createReadStream(fromFile).pipe(fs.createWriteStream(newFile));