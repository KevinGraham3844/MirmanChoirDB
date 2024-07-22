import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Table, TableHead, TableCell, TableRow, TableBody, Button } from '@mui/material'
import { deletePiece, updatePiece } from "../reducers/repertoireReducer"
import EntryCell from "./EntryCell"
import { initializeRep } from "../reducers/repertoireReducer"

const SingleEntry = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    window.onload = () => {
        dispatch(initializeRep())
    }

    const id = useParams().id
    const piece = useSelector(state => state.repertoire).find(piece => piece.id === id)

    if (!piece) {
        return (
            <div>...loading</div>
        )
    }
    console.log(piece.title)
    console.log(id)

    const alterEntry = (changedInfo, infoId) => {
        switch(infoId) {
            case 'title':
                return {...piece, title: changedInfo}
            case 'artist':
                return {...piece, artist: changedInfo}
            case 'publisher':
                return {...piece, publisher: changedInfo}
            case 'voicing': 
                return {...piece, voicing: changedInfo}
            case 'copies':
                return {...piece, copies: Number(changedInfo)}
            case 'scoreNum':
                return {...piece, scoreNum: changedInfo}
            case 'notes':
                return {...piece, notes: changedInfo}
        }
    }

    const editEntry = async (changedInfo, infoId) => {
        const editedPiece = alterEntry(changedInfo, infoId)
        dispatch(updatePiece(editedPiece))
    } 
    
    const deleteEntry = async () => {
        if(window.confirm(
           'Are you sure you want to delete this entry?' 
        )) {
            dispatch(deletePiece(id))
            navigate('/')
        }
    }

    return(
        <div>
            <Table>
                <TableHead>
                    <TableRow style={{backgroundColor: '#DCD9D9'}}>
                        <TableCell style={{fontWeight: 'bolder', textAlign: 'center'}}>Title</TableCell>
                        <TableCell style={{fontWeight: 'bolder', textAlign: 'center'}}>Artist</TableCell>
                        <TableCell style={{fontWeight: 'bolder', textAlign: 'center'}}>Publisher</TableCell>
                        <TableCell style={{fontWeight: 'bolder', textAlign: 'center'}}>Voicings</TableCell>
                        <TableCell style={{fontWeight: 'bolder', textAlign: 'center'}}>Copies</TableCell>
                        <TableCell style={{fontWeight: 'bolder', textAlign: 'center'}}>Score #</TableCell>
                        <TableCell style={{fontWeight: 'bolder', textAlign: 'center'}}>Notes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <EntryCell info={piece.title} infoId={'title'} editEntry={editEntry}/>
                        <EntryCell info={piece.artist} infoId={'artist'} editEntry={editEntry}/>
                        <EntryCell info={piece.publisher} infoId={'publisher'} editEntry={editEntry}/>
                        <EntryCell info={piece.voicing} infoId={'voicing'} editEntry={editEntry}/>
                        <EntryCell info={piece.copies} infoId={'copies'} editEntry={editEntry}/>
                        <EntryCell info={piece.scoreNum} infoId={'scoreNum'} editEntry={editEntry}/>
                        <EntryCell info={piece.notes} infoId={'notes'} editEntry={editEntry}/>
                    </TableRow>
                </TableBody>
            </Table>
            <Button
                onClick={() => navigate('/')}
            >
                Return
            </Button>
            <Button
                color='warning'
                onClick={deleteEntry}
            >
                Delete
            </Button>
        </div>
    )
}

export default SingleEntry