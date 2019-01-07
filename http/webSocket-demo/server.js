var app    = require('express')();
var server = require('http').createServer(app);
var io     = require('socket.io')(server);

// view
app.set('views', __dirname + '/view');//模板目录
app.set('view engine', 'ejs'); //模板语法设置成ejs
app.engine('ejs', require('ejs').__express);//

app.get('/', function(req, res){
	res.render('index');
});

io.on('connection', function (socket) {
    console.log('a user connected');
    console.log(socket);

    socket.on('chat message', function (data) {
        io.emit('chat message', data);
    });

    socket.on('message', function (data) {
        console.log(data);
        // io.emit('chat message', data);
    });

    
    socket.on('disconnect', function () {
        console.log('a user left');
    })
});

// start server
server.listen(3500, function(){
	var host = server.address().address;
  	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
})