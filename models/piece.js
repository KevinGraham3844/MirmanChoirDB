const mongoose = require('mongoose');

const pieceSchema = new mongoose.Schema({
    title: {
        type: String
    },
    artist: {
        type: String
    },
    copies: {
        type: Number
    },
    voicing: {
        type: String
    },
    publisher: {
        type: String
    },
    scoreNum: {
        type: mongoose.Schema.Types.Mixed
    },
    notes: {
        type: String
    }
});

pieceSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id
        delete returnedObject.__v
    }
});

const Piece = mongoose.model('Piece', pieceSchema);

module.exports = Piece