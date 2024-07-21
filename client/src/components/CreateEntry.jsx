import { useState } from 'react'
import { TextField, Button } from "@mui/material"
import { useNavigate } from 'react-router-dom'
import { createPiece } from '../reducers/repertoireReducer'
import { useDispatch } from 'react-redux'

const CreateEntry = () => {
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [publisher, setPublisher] = useState('')
    const [voicings, setVoicings] = useState('')
    const [copies, setCopies] = useState('')
    const [scoreNum, setScoreNum] = useState('')
    const [notes, setNotes] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const submitEntry = async (e) => {
        e.preventDefault()
        console.log('submitting entry')
        dispatch(createPiece({
            title: title,
            artist: artist,
            copies: copies,
            publisher: publisher,
            voicing: voicings,
            scoreNum: scoreNum,
            notes: notes
        }))
        setTitle('')
        setArtist('')
        setPublisher('')
        setVoicings('')
        setCopies('')
        setScoreNum('')
        setNotes('')
        navigate('/')
    }

    const cancel = (e) => {
        e.preventDefault()
        navigate('/')
    }


    return (
        <div>
            <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <TextField
                    label="title"
                    value={title}
                    onChange={({ target }) => setTitle(target.value)}
                />
                <TextField
                    label="artist"
                    value={artist}
                    onChange={({ target }) => setArtist(target.value)}
                />
                <TextField
                    label="publisher"
                    value={publisher}
                    onChange={({ target }) => setPublisher(target.value)}
                />
                <TextField
                    label="voicing"
                    value={voicings}
                    onChange={({ target }) => setVoicings(target.value)}
                />
                <TextField
                    label="copies"
                    value={copies}
                    onChange={({ target }) => setCopies(target.value)}
                />
                <TextField
                    label="score #"
                    value={scoreNum}
                    onChange={({ target }) => setScoreNum(target.value)}
                />
                <TextField
                    label="notes"
                    multiline
                    value={notes}
                    onChange={({ target }) => setNotes(target.value)}
                />
                <Button
                 onClick={submitEntry}
                >Submit</Button>
                <Button 
                 onClick={cancel}
                >Cancel</Button>
            </form>
        </div>
    )
}

export default CreateEntry