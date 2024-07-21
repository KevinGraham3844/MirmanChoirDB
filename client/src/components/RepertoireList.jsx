/* eslint-disable react/prop-types */
import { Table, TableHead, TableCell, TableRow, TableBody, TableContainer } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const RepertoireList = ({ repertoire }) => {
    const user = useSelector(state => state.user)
    if (!repertoire) {
      return (
        <div>loading...</div>
      )
    }
    console.log(repertoire)
    return (
      <div>
        <TableContainer sx={{ maxHeight: '700px', border: '1px solid #000'}}>
          <Table stickyHeader>
            <TableHead>
              <TableRow style={{backgroundColor: '#DCD9D9'}}>
                <TableCell style={{fontWeight: 'bolder', textAlign: 'center'}}>Title</TableCell>
                <TableCell style={{fontWeight: 'bolder', textAlign: 'center'}}>Artist</TableCell>
                <TableCell style={{fontWeight: 'bolder', textAlign: 'center'}}>Publisher</TableCell>
                <TableCell style={{fontWeight: 'bolder', textAlign: 'center'}}>Voicings</TableCell>
                <TableCell style={{fontWeight: 'bolder', textAlign: 'center'}}>Copies</TableCell>
                <TableCell style={{fontWeight: 'bolder', textAlign: 'center'}}>Score #</TableCell>
                <TableCell style={{fontWeight: 'bolder', textAlign: 'center'}}>Notes</TableCell>
                <TableCell style={{fontWeight: 'bolder', textAlign: 'center'}}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {repertoire.map(rep => (
                <TableRow key={rep.id}>
                  <TableCell style={{border: '1px solid #000', textAlign: 'center'}}>{rep.title}</TableCell>
                  <TableCell style={{border: '1px solid #000', textAlign: 'center'}}>{rep.artist}</TableCell>
                  <TableCell style={{border: '1px solid #000', textAlign: 'center'}}>{rep.publisher}</TableCell>
                  <TableCell style={{border: '1px solid #000', textAlign: 'center'}}>{rep.voicing}</TableCell>
                  <TableCell style={{border: '1px solid #000', textAlign: 'center'}}>{rep.copies}</TableCell>
                  <TableCell style={{border: '1px solid #000', textAlign: 'center'}}>{rep.scoreNum}</TableCell>
                  <TableCell style={{border: '1px solid #000', textAlign: 'center'}}>{rep.notes}</TableCell>
                  {user && (
                    <TableCell style={{border: '1px solid #000', textAlign: 'center'}}>
                      <Link to={`/${rep.id}`}>edit/delete</Link>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    )
}

export default RepertoireList