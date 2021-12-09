// 这是一个静态资源服务器，打包后可以访问 localhost:3000 打开页面查看效果
const { homepage } = require('../package.json')
const express = require('express');
const path = require('path');
const app = express();

const port = 3110;

const filePath = ".." + homepage;

// 根域名指向默认文件，使前端路由能够以【不直接访问 html 文件的形式】打开网页
app.use('/', express.static(path.join(__dirname, filePath), { index: 'index.html' }));
app.use(homepage, express.static(path.join(__dirname, filePath)));

app.use(homepage, function (req, res) {
	res.sendFile(path.resolve(__dirname, filePath, './index.html'));
})
// ajax 请求均以 api 打头
app.use('/api', (req, res) => {
	res.send({
		code: 200,
		data: req.query,
		message: ''
	});
});

// 前端路由（非静态资源）指向 html 文件，处理刷新白屏
app.use(/^\/(?!js|css|media).+/, (req, res) => {
	res.sendFile(path.join(__dirname, filePath + '/index.html'));
});

app.listen(port, () => {
	console.log('start server http://localhost:' + port)
});
