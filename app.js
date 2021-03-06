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

app.post('/products', function(request, response){
    fs.readFile('data.json', function (err, data) {
        if (err){
            throw err;
        }
        else {
            var jsonObj = JSON.parse(data),
                newProduct = {
                    title: request.query.title,
                    price: request.query.price,
                    brand: request.query.brand,
                    resolution: request.query.resolution
                };
            jsonObj[jsonObj.length] = newProduct;
            fs.writeFile('data.json', JSON.stringify(jsonObj), function(err){
                if (err) throw err;
                else response.send(true);
            });
        }
    });
});

app.delete('/products', function(request, response){
    fs.readFile('data.json', function (err, data) {
        if (err){
            throw err;
        }
        else {
            var jsonObj = JSON.parse(data);
            jsonObj.splice(request.query.index, 1);
            fs.writeFile('data.json', JSON.stringify(jsonObj), function(err, data){
                if (err) throw err;
                else response.send(true);
            });
        }
    });
});

app.listen(3000);