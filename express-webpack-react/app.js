const express = require('express');

// 启动配置
const port = process.env.PORT || 3000;
const app = express();

app.get('/', function(req, res) {
	res.send('hello express!')
})

app.listen(port);
console.log('app started on port ' + port);