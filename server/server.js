const express = require('express');
const app = express();
const path = require('path');
const hostname = '127.0.0.1';
const port = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, '../', 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
});

app.listen(port);