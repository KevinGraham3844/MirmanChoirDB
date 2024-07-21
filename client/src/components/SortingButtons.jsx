/* eslint-disable react/prop-types */
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material'


const SortingButtons = ({ handleChange }) => {
    return (
        <div>
            <FormControl>
                <FormLabel id='sorting-buttons'>Sort by</FormLabel>
                    <RadioGroup
                        aria-labelledby='sorting-buttons' 
                        row
                        value={""}
                        onChange={handleChange}
                    >
                        <FormControlLabel value='default' control={<Radio />} label='default' />
                        <FormControlLabel value='title' control={<Radio />} label='title' />
                        <FormControlLabel value='artist' control={<Radio />} label='artist' />
                        <FormControlLabel value='publisher' control={<Radio />} label='publisher' />
                        <FormControlLabel value='voicing' control={<Radio />} label='voicings' />  
                    </RadioGroup>
            </FormControl>
        </div>
    )
}

export default SortingButtons