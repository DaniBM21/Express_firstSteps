const express = require('express');
const app = express();
const morgan = require('morgan');

// Settings
app.set('appName', 'Course Express');
app.set('port', 5000);
app.set('view engine', 'ejs');

// Middleware [process data before access any route]
app.use(express.json());
app.use(morgan('dev'));

// Routing
app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/user', (req, res) => {
    res.json({
        username: 'Anastasio',
        lastname: 'Cul gros'
    });
});

app.post('/user/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('POST REQUEST RECEIVED');
});

app.put('/user/:id', (req, res) => {
    console.log(req.body);
    res.send('UPDATE REQUEST REVEIVED');
});

app.delete('/user/:userID', (req, res) => {
    res.send('User ${req.params.userID}');
});

app.use(express.static('public'));

// Start my server
app.listen(5000, (port) => {
    console.log(app.get('appName'));
    console.log('Server on port ', app.get('port'));
});