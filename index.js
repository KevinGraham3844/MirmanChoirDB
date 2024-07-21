
const config = require('./utils/config')
const logger = require('./utils/logger')
const express = require('express');
const app = express();
const cors = require('cors');
const middleware = require('./utils/middleware');
const repertoireRouter = require('./controllers/repertoire');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const mongoose = require('mongoose');

console.log(config.MONGODB_URI)
mongoose.set('strictQuery', false);

logger.info('connecting to MongoDB');

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB');
    })
    .catch((error) => {
        logger.error('error connecting to mongoDB: ', error.message);
    });

app.use(express.static('client/dist'))    
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
    res.send('<h1>choir DB: go to /api/repertoire for list of DB</h1>');
});

app.use(middleware.requestLogger);

app.use('/api/repertoire', repertoireRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});