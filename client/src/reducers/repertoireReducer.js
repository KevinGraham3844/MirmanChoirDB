import { createSlice } from '@reduxjs/toolkit'
import repertoireService from '../services/repertoire'


const repertoireSlice = createSlice({
    name: 'repertoire',
    initialState: [],
    reducers: {
        setRepertoire(state, action) {
            return action.payload
        }, 
        appendRepertoire(state, action) {
            state.concat(action.payload)
        },
        removeEntry(state, action) {
            console.log('here is the id thats going to be removed', action.payload)
            return state.filter(piece => piece.id !== action.payload)
        }, 
        updateEntry(state, action) {
            const updatedPiece = action.payload
            return state.map(piece =>
                piece.id !== updatedPiece.id ? piece : updatedPiece
            )
        }
    }
})

export const initializeRep = () => {
    return async dispatch => {
        console.log('dispatch called')
        const repertoire = await repertoireService.getAll()
        dispatch(setRepertoire(repertoire))
    }
}

export const createPiece = (content) => {
    console.log('here is the content passed to the reducer: ', content)
    return async dispatch => {
        const newPiece = await repertoireService.create(content)
        dispatch(appendRepertoire(newPiece))
    }
}

export const deletePiece = (id) => {
    return async dispatch => {
        const entryToDelete = await repertoireService.getSingleEntry(id)
        await repertoireService.deleteEntry(entryToDelete)
        dispatch(removeEntry(id))
    }
}

export const updatePiece = (entryObj) => {
    return async dispatch => {
        await repertoireService.updateEntry(entryObj)
        dispatch(updateEntry(entryObj))
    }
}

export const { setRepertoire, appendRepertoire, removeEntry, updateEntry } = repertoireSlice.actions
export default repertoireSlice.reducer