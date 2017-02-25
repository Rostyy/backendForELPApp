let express = require('express');
let config = require('./config');
let morgan = require('morgan');
let mongoose = require('mongoose');
let app = express();

// DB connect
mongoose.connect(config.database, (err)=> {
  if(err) {
    console.log('Not connected to DB', err);
  } else {
    console.log('Connected to the database');
  }
});

// Logs all requests to a console
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}!`);
})