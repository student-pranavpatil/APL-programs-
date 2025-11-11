const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => {
res.render('index', { title: 'My Pug Page', message: 'Hello from Express and Pug!' });
});
const server = app.listen(5000, () => {
console.log('Node server is running on port 5000');
});