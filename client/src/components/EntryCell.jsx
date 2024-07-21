/* eslint-disable react/prop-types */
import { TableCell, TextField, Button } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react'

const EntryCell = ({ info, infoId, editEntry }) => {
    const [clicked, setClicked] = useState(false)
    const [changedInfo, setChangedInfo] = useState('')

    return ( 
        <TableCell style={{border: '1px solid #000', textAlign: 'center'}}>
            {info}
            <EditIcon 
                style={{ marginLeft: '10px', cursor: 'pointer' }} 
                onClick={() => setClicked(true)}
            /> 
            {clicked && (
                <div>
                <TextField
                    label='newInfo'
                    value={changedInfo}
                    onChange={({ target }) => setChangedInfo(target.value)}
                />
                <Button
                    onClick={() => {
                        setClicked(false)
                        editEntry(changedInfo, infoId)
                        setChangedInfo('')
                    }}
                >submit</Button>
                <Button
                    onClick={() => setClicked(false)}
                >cancel</Button>
                </div>
            )}
        </TableCell>
    )
}

export default EntryCell