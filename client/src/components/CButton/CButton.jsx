import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const handleSubmit = () =>{
 const value = this.state.value
 console.log(value)
}


export default function CButton() {
  return (
    <Stack direction="row" marginTop={3} >
      <Button 
        variant="contained" 
        onClick={handleSubmit}>Pesquisar</Button>
    </Stack>
  );
}