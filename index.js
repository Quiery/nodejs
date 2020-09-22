const express = require('express'); const app = express();

app.get('/users/:id', function(req, res) { 
    let response = {"Hello" : req.params };
    res.send(JSON.stringify(response));
});

app.listen(3000, function() {
console.log('Example routing');
});

