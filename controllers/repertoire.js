const repertoireRouter = require('express').Router()
const Piece = require('../models/piece')

repertoireRouter.post('/', async (req, res) => {
    const body = req.body
    console.log('The object has been received by the server', body)
    const piece = new Piece({
        title: body.title,
        artist: body.artist,
        copies: body.copies,
        voicing: body.voicing,
        publisher: body.publisher,
        scoreNum: body.scoreNum,
        notes: body.notes
    })
    const savedPiece = await piece.save()
    res.status(201).json(savedPiece)
})

repertoireRouter.put('/:id', async (req, res) => {
    const body = req.body

    const piece = {
        title: body.title,
        artist: body.artist,
        copies: body.copies,
        voicing: body.voicing,
        publisher: body.publisher,
        scoreNum: body.scoreNum,
        notes: body.notes
    }

    const updatedPiece = await Piece.findByIdAndUpdate(req.params.id, piece, { new: true })
    res.json(updatedPiece)
})

repertoireRouter.get('/', async (_req, res) => {

    const repertoire = await Piece
        .find({})
    res.json(repertoire)
});

repertoireRouter.get('/:id', async (req, res) => {
    const piece = await Piece.findById(req.params.id)
    if (piece) {
        res.json(piece)
    } else {
        res.status(404).end()
    }
});

repertoireRouter.delete('/:id', async (req, res) => {
    console.log(req.params.id)
    await Piece.findByIdAndDelete(req.params.id)
    console.log('piece deleted!')
    res.status(204).end()
})

module.exports = repertoireRouter