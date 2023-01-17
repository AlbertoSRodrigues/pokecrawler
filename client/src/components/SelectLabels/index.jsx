import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import axios from "axios"
import { Container } from '@mui/system';
export default function SelectLabels(props) {
  const [league, setLeague] = React.useState('');
  const [pokeNumber, setpokeNumber] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false)
  const [dexNumbers, setDexNumbers] = React.useState('')
  const [pokeDataArray, setPokeDataArray] = React.useState('')
  const handleChange = (event) => {
    setLeague(event.target.value);
  };
  const handleChange2 = (event) => {
    setpokeNumber(event.target.value)
  };
  const handleSubmit = async (e) =>{
    e.preventDefault()
    setIsLoading(true)
    const {data} = await axios.get(`http://localhost:3001/home/${league}/${pokeNumber}`)
    setIsLoading(false)
    setDexNumbers(data[0])
    setPokeDataArray(data[1])
    props.changeData(data[1])
  }

  return (
    <form onSubmit={handleSubmit}>
        <Grid container>
            <Grid item xs={4}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">League</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={league}
                label="League"
                onChange={handleChange}
        >
      
        <MenuItem value="" disabled><em>Select {props.title1}</em></MenuItem>
        {props.nameArray1.map((list)=>{
          return(
            <MenuItem key={list.value} value={list.value}>{list.name}</MenuItem>
          )
        })}
        </Select>
        <FormHelperText>{props.helperText1}</FormHelperText>
      </FormControl>
      </Grid>



      <Grid item xs={4}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Nº Of Pokes</InputLabel>
            <Select
            
                value={pokeNumber}
                label="pokeNumber"
                onChange={handleChange2}
        >
        
        <MenuItem value="" disabled><em>Select {props.title2}</em></MenuItem>
        {props.nameArray2.map((list)=>{
          return(
            <MenuItem key={list.value} value={list.value}>{list.name}</MenuItem>
          )
        })}
        </Select>
        <FormHelperText>{props.helperText2}</FormHelperText>
      </FormControl>
      </Grid>
      <Grid item xs={4}>
      <Stack direction="row" marginTop={3} >
      {isLoading || (!league || !pokeNumber) 
      ? <Button 
        variant="contained"
        disabled
        type="submit"
        >Pesquisar</Button> 
      : <Button 
        variant="contained"
        type="submit"
        >Pesquisar</Button>}
    
    </Stack>
      </Grid>
      </Grid>
      
      <Grid container marginTop={2}>
        <Container maxWidth="sm">
      <TextField  id="outlined-basic" label="Pokemon Filter" variant="outlined" InputProps={{
            readOnly: true,
          }} value= {dexNumbers} sx={{width:400}} />
          </Container>
      </Grid>

      
    </form>
  );
}