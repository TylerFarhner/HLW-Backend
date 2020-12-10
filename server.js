const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();


require('dotenv').config();

const scoresRouter = require('./routes/api/scores');
const usersRouter = require('./routes/api/users');
const spotRouter = require('./routes/api/spot')


require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());


app.use('/api/scores', scoresRouter);
app.use('/api/users', usersRouter);
app.use('/api/spot', spotRouter)

const port = process.env.PORT || 3001;
	
app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});