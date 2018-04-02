const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('*', function (request, response) {
    response.redirect('/');
});

app.listen(process.env.PORT || 8080);
