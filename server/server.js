const express = require('express');
const path = require('path');
const logRoutes = require('./middleware/log-routes');
const blogControllers = require('./controllers/blogs')

const app = express();

app.use(logRoutes);
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/blogs', blogControllers.list);
app.post('/api/blogs', blogControllers.create);
app.get('*', (req, res, next) => {
  if (req.originalUrl.startsWith('/api')) next();
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});


module.exports = app;