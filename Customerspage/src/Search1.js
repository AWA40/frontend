import React, { useRef } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { makeStyles } from '@mui/material';



export default function Search1(props) {
    const query =  useRef()

    const handleSearch = (e) => {
        e.preventDefault();
        const queryVal = query.current.value
        props.fetchRestaurants(queryVal.trim())
    }

    const useStyles = makeStyles()

    return (
        <form onSubmit={handleSearch} className="search-bar">
            <TextField
            className="search-bar"
            autoFocus={true}
            inputRef={query}
            id="outlined-full-width"
            label="Search Restaurants"
            style={{margin: 8}}
            placeholder="Restaurant Title"
            required={true}
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink:true
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">  
                    <SearchIcon/>
                    </InputAdornment>
                    ),
                endAdornment: (
                    <InputAdornment position="end">
                        <button className="go" variant="contained" type="submit">
                            Go
                        </button>
                    </InputAdornment>
                ),
                useStyles: {
                    root: useStyles.root,
                    focused: useStyles.focused,
                    notchedOutline:useStyles.notchedOutline
                }            

            }}
            variant="outlined"
            />
        </form>
        
    )}
   