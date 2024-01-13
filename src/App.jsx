
import React from 'react'
import './App.css'
import { Box, Button, Container, Fab, Grid, Avatar, Stack, Typography, Rating } from '@mui/material';
import { ArrowRight, Camera, Padding, Style } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import Avatar from '@mui/material/Avatar';

import { useState } from 'react';



export default function App() {


  let [number, setNumbr] = useState(0);

  const stop = () => {
    alert("error ( button has disabled)");
    document.getElementById('neg').disabled = true;
    

  }

  return (
    <>

      <Grid container alignItems='center' justifyContent='center'>
        <Grid item xs={2}>
          <Stack direction={'column'} spacing={2}>
            <h1 >{number}</h1>


            <Stack direction={'row'} spacing={4}>
              <Button variant='contained' color="success" id='neg' onClick={() => {
                setNumbr(--number);
            
                if (number < 0) {
                  stop();
                }

              }}
              >- </Button>
              <Button variant="contained" color="success" onClick={() => setNumbr(++number)}

              >+</Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}
