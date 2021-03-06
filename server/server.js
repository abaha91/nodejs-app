const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, '../', 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
});

const listener = app.listen(port, function(){
    console.log('Listening on port ' + listener.address().port);
});