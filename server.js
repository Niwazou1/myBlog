let http = require('http');
let fs = require('fs');
// 1.指定されたパスのファイルを読み込む(req.url)
// http://localhost:3000/foo/bar.html
// req.url = '/foo/bar.html'
//
// 2.ファイルがあれば、それをres.writeして返す
// 3.ファイルがなければ、404を返す

let server = http.createServer(function(req, res){
    let path = 'page.html';
    fs.readFile(path, function(err, data){
        if(err){
            // オープンに失敗
            // 404を返す
            res.write('404');
        }else{
            // オープンに成功
            // 200でデータを返す
            res.write('200');
        }
    });
    res.end();
});
server.listen(3000);