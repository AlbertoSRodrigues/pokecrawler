import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function PokeCard(props) {

  return (
    <Grid container columnSpacing={30} spacing={5} marginTop={0}>    
    {props.pokeData.map((item)=>(
      <Grid item xs={2}>
      <Card sx={{ height: 300,
          width:200,
        maxWidth: 400 }}>
        <CardMedia
          sx={{ height: 200,
          width:200}}
          image={item.sprite}
          title={item.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type: {item.type}
          </Typography>
        </CardContent>
      </Card>
      </Grid>
    )
    )
    }
    </Grid>
    );
    
}