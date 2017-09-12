var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

// 从命令行参数获取root目录，默认是当前目录:
var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir: ' + root);

// 创建服务器:
var server = http.createServer(function (request, response) {
    // 获得URL的path，类似 '/css/bootstrap.css':
    var pathname = url.parse(request.url).pathname;
    console.log("pathname:" + pathname);

    // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
    var filepath = path.join(root, pathname);

    if (pathname == "/") {
        filepath = path.join(root, "/react-zero/zero.html");
        console.log("newFilePath:" + filepath);
    }


    // 获取文件状态:
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) {
            // 没有出错并且文件存在:
            // console.log('200 ' + request.url);
            // 发送200响应:
            response.writeHead(200);
            // 将文件流导向response:
            fs.createReadStream(filepath).pipe(response);
        } else {
            filepath = path.join(root, "/default.html");
            console.log(filepath);
            fs.stat(filepath, function(err, stats) {
                if (!err &&　stats.isFile()) {
                    response.writeHead(200);
                    fs.createReadStream(filepath).pipe(response);
                } else {
                    response.writeHead(404);
                    response.end("404 Not Found default.html");
                }

            })
        }
    });
});

server.listen(8000);
