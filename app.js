const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const words = require('./words');

app.get('/', (req, res) => {
    let word = words.words[Math.floor(Math.random() * words.words.length)];
    word = word.toUpperCase();
    res.render('home', { word });
})

app.listen(3000, () => {
	console.log('Listening on port 3000');
});