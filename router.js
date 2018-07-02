//对网站首页的访问返回‘hello world’字段
app.get('/',function(req,res){
	res.send('Hello world!');
})

//网站首页接受Post请求
app.post('/',function(req,res){
	res.send('Got a POST request')
})

//user节点接受PUT 请求
app.put('/user',function(req,res){
	res.send('Got a PUT request at /user');
})

// user节点接受DELETE 请求
app.delete('/user',function(req,res){
	res.send('Got a DELETE request at /user')
})

// 匹配 acd 和 abcd
app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});

// 匹配 abcd、abbcd、abbbcd等
app.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});

// 匹配 abcd、abxcd、abRABDOMcd、ab123cd等
app.get('/ab*cd', function(req, res) {
  res.send('ab*cd');
});

// 匹配 /abe 和 /abcde
app.get('/ab(cd)?e', function(req, res) {
 res.send('ab(cd)?e');
});

字符 ?、+、* 和 () 是正则表达式的子集，- 和 . 在基于字符串的路径中按照字面值解释。


使用正则表达式的路由路径示例：

// 匹配任何路径中含有 a 的路径：
app.get(/a/, function(req, res) {
  res.send('/a/');
});

// 匹配 butterfly、dragonfly，不匹配 butterflyman、dragonfly man等
app.get(/.*fly$/, function(req, res) {
  res.send('/.*fly$/');
});