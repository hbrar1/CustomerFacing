const express = require('express');
const app = express();
const config = require('./config');
const port = config.port;


app.use(express.static(__dirname+'/public'));

app.set('view engine', 'ejs');
app.set('views', './views');

const apiRoutes = require('./routes/apiRoutes');


app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => res.render('index')); // Homepage
app.get('/sports', (req, res) => res.render('sports')); // Sports Page
app.get('/contact', (req, res) => res.render('contact',{ errorMsg: null, successMsg: null })); // Contact Us Page
app.get('/about', (req, res) => res.render('about')); // About Us Page
app.use('/api', apiRoutes);


app.listen(port, ()=>console.log(`Main server running on port ${port}`));