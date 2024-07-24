import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react'
import { TextField, Button } from "@mui/material"

import RepertoireList from "./RepertoireList"
import { useNavigate } from "react-router-dom"
import { initializeRep } from "../reducers/repertoireReducer"

const Search = () => {
    const [searchTitles, setSearchTitles] = useState('')
    const [searchArtists, setSearchArtists] = useState('')
    const [searchPublisher, setSearchPublisher] = useState('')
    const [searchType, setSearchType] = useState(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    window.onload = () => {
        dispatch(initializeRep())
    }

    const repertoire = [...useSelector(state => state.repertoire)]
   
    const filteredTitles = repertoire.filter(piece => piece.title
            .toLowerCase()
            .includes(searchTitles.toLowerCase())
    )

    const filteredArtists = repertoire.filter(piece => piece.artist
            .toLowerCase()
            .includes(searchArtists.toLowerCase())
    )

    const filteredPublisher = repertoire.filter(piece => piece.publisher
            .toLowerCase()
            .includes(searchPublisher.toLowerCase())
    )

    const handleSearch = (type) => {
        setSearchType(type)
    }

    return (
        <>
        <h1 style={{textAlign: 'center'}}>Search Database</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <TextField 
                label="titles"
                value={searchTitles}
                onChange={({ target }) => setSearchTitles(target.value)}
                onKeyDown={(e) => {
                    if(e.key === 'Enter') {
                        e.preventDefault()
                        handleSearch('titles')
                    }
                    if(e.key === 'Escape') {
                        setSearchType(null)
                        setSearchTitles('')
                    }
                }}      
            ></TextField>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <Button
                    onClick={() => handleSearch('titles')}
                >
                    Search
                </Button>
                <Button
                        onClick={() => {
                            setSearchType(null)
                            setSearchTitles('')
                        }}
                    >
                        clear
                </Button>
            </div>
            <TextField 
                label="artists"
                value={searchArtists}
                onChange={({ target }) => setSearchArtists(target.value)}
                onKeyDown={(e) => {
                    if(e.key === 'Enter') {
                        e.preventDefault()
                        handleSearch('artists')
                    } 
                    if(e.key === 'Escape') {
                        setSearchType(null)
                        setSearchArtists('')
                    }
                }} 
            ></TextField>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <Button
                    onClick={() => handleSearch('artists')}
                >
                    Search
                </Button>
                <Button
                        onClick={() => {
                            setSearchType(null)
                            setSearchArtists('')
                        }}
                    >
                        clear
                </Button>
            </div>
            <TextField 
                label="publisher"
                value={searchPublisher}
                onChange={({ target }) => setSearchPublisher(target.value)}
                onKeyDown={(e) => {
                    if(e.key === 'Enter') {
                        e.preventDefault()
                        handleSearch('publisher')
                    }
                    if(e.key === 'Escape') {
                        setSearchType(null)
                        setSearchPublisher('')
                    }
                }} 
            ></TextField>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <Button
                    onClick={() => handleSearch('publisher')}
                >
                    Search
                </Button>
                <Button
                        onClick={() => {
                            setSearchType(null)
                            setSearchPublisher('')
                        }}
                    >
                        clear
                </Button>
            </div>
        </div>
        <div>
        {searchType === 'titles' && (
            <>
            <RepertoireList repertoire={filteredTitles} />
            </>
        )}
        {searchType === 'artists' && (
            <>
            <RepertoireList repertoire={filteredArtists} />
            </>
        )}
        {searchType === 'publisher' && (
            <>
            <RepertoireList repertoire={filteredPublisher} />
            </>
        )}
        </div>
        <Button
            onClick={() => navigate('/')}
        >
            return
        </Button>
        </>
    )
}

export default Search