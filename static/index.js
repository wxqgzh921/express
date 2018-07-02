利用express.static 拖管静态文件
app.use(express.static('public'));

现在 ,public 目录下面的文件就可以访问了。

http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/hello.html

所有文件的路径都是相对于存放目录的，因此，存放静态文件的目录名不会出现在 URL 中。

如果你的静态资源存放在多个目录下面，你可以多次调用 express.static 中间件：

app.use(express.static('public'));
app.use(express.static('files'));

如果你希望所有通过 express.static 访问的文件都存放在一个“虚拟（virtual）”目录（即目录根本不存在）下面，可以通过为静态资源目录指定一个挂载路径的方式来实现，如下所示：

app.use('/static', express.static('public'));
现在，你就爱可以通过带有 “/static” 前缀的地址来访问 public 目录下面的文件了。

http://localhost:3000/static/images/kitten.jpg
http://localhost:3000/static/css/style.css
http://localhost:3000/static/js/app.js
http://localhost:3000/static/images/bg.png
http://localhost:3000/static/hello.html

-----------------------------------------------------------
使用多个回调函数处理路由（记得指定 next 对象）：

app.get('/example/b', function (req, res, next) {
  console.log('response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
});

------------------------------------------------------------
使用回调函数数组处理路由：

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);