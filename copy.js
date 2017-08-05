const fs = require('fs');

let fromFile = './base.html';

let toFileHead = './Conditional-Rendering/';

let fileName = 'demo03.html';

let newFile = toFileHead + fileName;

fs.createReadStream(fromFile).pipe(fs.createWriteStream(newFile));