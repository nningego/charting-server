const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));

// HTML templating if required
app.engine('.html', require('ejs').__express);

app.set('views', __dirname);
app.set('view engine', 'html');


app.get('/data.json', (req, res) => {
  res.json([
    { id: 'root', parentId: null },
    { id: 'cat', parentId: 'root', size: 50 + (Math.random() * 40) },
    { id: 'mouse', parentId: 'root', size: 10 },
    { id: 'penguin', parentId: 'root', size: 50 },
    { id: 'horse', parentId: 'root', size: 30 },
  ]);
});

app.get('/charts', (req, res) => {
  res.render('index', {});
});


app.get(['/', '/health'], async (req, res) => {
  res.sendStatus(200);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Charting Server listening on port ${port}!`);
});

module.exports = app;
