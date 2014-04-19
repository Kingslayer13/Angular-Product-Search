var express = require('express'),
    app = express(),
    fs = require('fs');


app.use(express.static(__dirname));
app.set('views', __dirname + '/views');
//app.engine('html', require('ejs').renderFile);
app.use(express.static( __dirname + '/' ));

app.get('/products', function(request, response){
    fs.readFile('data.json', function (err, data) {
        if (err) throw err;
        else response.send(data);
    });
});

app.listen(3000);