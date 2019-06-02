const express = require('express');
const app = express();

// handles cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// serve static files
app.use(express.static('public'));

app.get('/address', (req, res) => {
    res.json({
        header: 'Hilton Chicago',
        line1: '720 South Michigan Avenue',
        line2: 'Chicago, Illinois, 60605',
        phoneNum: '1-132-922-4400'
    });
});

app.set('port', 4200);
const port = app.get('port');

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
