const requestLogger = (req, _res, next) => {
    console.log('Method:', req.method);
    console.log('Path:', req.path);
    console.log('Body:', req.body);
    console.log('---');
    next();
};

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint'})
}

const errorHandler = (error, req, res, next) => {
    if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }

    next(error)
}


module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler
}