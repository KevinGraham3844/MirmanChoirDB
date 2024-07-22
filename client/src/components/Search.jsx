import { useSelector } from "react-redux"
import { useState } from 'react'
import { TextField, Button } from "@mui/material"

const Search = () => {
    const [searchTitles, setSearchTitles] = useState('')
    //const [searchType, setSearchType] = useState(null)

    const repertoire = [...useSelector(state => state.repertoire)]
   
    const filteredTitles = repertoire.filter(piece => piece.title
            .toLowerCase()
            .includes(searchTitles.toLowerCase())
        )


    const handleSearch = () => {
        console.log(filteredTitles)
    }

    return (
        <>
        <h1 style={{textAlign: 'center'}}>Search Database</h1>
        <TextField 
            label="titles"
            value={searchTitles}
            onChange={({ target }) => setSearchTitles(target.value)}
        ></TextField>
        <Button
            onClick={() => handleSearch()}
        >
            Search
        </Button>
        </>
    )
}

export default Search