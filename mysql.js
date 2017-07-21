// 1.クライアントから送られてきたID,Passwordを取得する
// 2.salt(ランダムな文字列)を生成する
// 3.salt と passwordを連結して、ハッシュ値を求める
// 4.idにハッシュ値を保存する
// 5.ユーザに登録完了と表示する

// ランダムな文字列


// 生成する文字列の長さ
// var l = 8;
// 生成する文字列に含める文字セット
// var c = "abcdefghijklmnopqrstuvwxyz0123456789";
// var cl = c.length;
// var r = "";
// for(var i=0; i<l; i++){
//     r += c[Math.floor(Math.random()*cl)];
// }

let mysql = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     :'root',
  database :'myblog'
});
connection.connect();
let email = process.argv[];
let password = '1234';
let salt = 'iohhihi'
connection.query('INSERT INTO users VALUES (NULL, ?, ?)',[email,password], function (error, results, fields){ // 直接変数を入れると意図しないものが実行される可能性
  if(error) { 
    throw error;
  }
  console.log('The solution is:',results[0]);
});
connection.end();
// $ mysql -uroot
// mysql> CREATE DATABASE myBlog;
// Query OK, 1 row affected (0.00 sec)