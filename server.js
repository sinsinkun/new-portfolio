const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// fetch API routes
require('./routes.js')(app);

// load built react app
app.use(express.static('./client/build'));
app.get('*', (req, res) => {
  console.log("[HTML GET]: Get React app");
  res.sendFile('./client/build/index.html', {root:"."});
});

// open server
app.listen(PORT, function() {
  console.log( `Serving app on: http://localhost:${PORT}` );
})